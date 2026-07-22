require('dotenv').config();
const Hapi = require('@hapi/hapi');
const routes = require('./server/routes');
const { loadModel } = require('./services/loadModel');

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 8080,
        host: '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    console.log("Memuat model machine learning...");
    const model = await loadModel();
    server.app.model = model;
    console.log("Model berhasil dimuat!");

    server.route(routes);

    server.ext('onPreResponse', function (request, h) {
        const response = request.response;

        if (response.isBoom) {
            if (response.output.statusCode === 413) {
                return h.response({
                    status: 'fail',
                    message: 'Payload content length greater than maximum allowed: 1000000'
                }).code(413);
            }

            return h.response({
                status: 'fail',
                message: 'Terjadi kesalahan dalam melakukan prediksi'
            }).code(400);
        }

        return h.continue;
    });

    await server.start();
    console.log(`Server is running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
