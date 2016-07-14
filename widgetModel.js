var mongoose = require('mongoose');

var widgetModel = new mongoose.Schema({
    name: {type: String},
    type: {type: String},
    cost: {type: String},
    size: {type: String},
    weight: {type: String}
});

module.exports = mongoose.model('Widget', widgetModel);
