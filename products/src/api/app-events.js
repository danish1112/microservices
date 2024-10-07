const ProductService = require('../services/product-service');

module.exports = (app) => {
    const product = new ProductService();

    app.get('/app-events', async(req, res, next) => {
        const {payload} = req.body;

        product.SubscribeEvents(payload);

        console.log("shopping product record event=====");

        return res.status(200).json(payload);
    })
}