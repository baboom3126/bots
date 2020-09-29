const bodyParser = require('body-parser');
const express = require('express');
const { bottender } = require('bottender');


var webRouter = require('./routes/web');

const app = bottender({
    dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 80;

// the request handler of the bottender app
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(
        bodyParser.json({
            verify: (req, _, buf) => {
                req.rawBody = buf.toString();
            },
        })
    );

    server.set('views', __dirname+'/views');
    server.set('view engine', 'ejs');

    // your custom route

    server.use('/web',webRouter)


    server.get('/api', (req, res) => {
        res.json({ ok: true });
    });


    // route for webhook request
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});