
/*
 |--------------------------------------
 | Schema Model: Storing/Saving visualizations
 |--------------------------------------
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const visualizationSchema = new mongoose.Schema({
    title: { type: String, required: false },
    uri: { type: String, required: true },
    imgUrl: { type: String, required: true },
    createDate: { type: Date, required: true},
});

module.exports = mongoose.model('Visualization', visualizationSchema);
