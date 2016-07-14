var mongoose = require('mongoose');

var cartModel = new mongoose.Schema({
    name: {type: String},
    totalCost: {type: String},
    items: [{type: Schema.Types.ObjectId, ref: 'Widget'}]
});

module.exports = mongoose.model('Cart', cartModel);
