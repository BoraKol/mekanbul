var mongoose = require( "mongoose" ); 
/*
var mekanSema = new mongoose.Schema({
    ad: String,
    adres: String,
    puan: Number,
    imkanlar: [String]
}); 
*/

var yorumSema = new mongoose.Schema({
    yorumYapan:{ type: String, required: true},
    puan: { type: Number, default:0, min: 0, max: 5},
    yorumMetni: { type: String, required: true},
    tarih: {type: Date, default: Date.now}
}); 
var saatSema = new mongoose.Schema({
    gunler: {trpe: String, },
    acilis: String,
    kapanis: String,
    kapali: {type: Boolean}
}); 
var mekanSema = new mongoose.Schema({
    ad:  {type: String, required: true},
    adres: String,
    puan: {type: Number, default: 0, min: 0, max: 5},
    imkanlar: [String],
    koordinat: {type: [Number], index: '2dsphere'},
    saatler: [saatSema],
    yorumlar: [yorumSema]
}); 

mongoose.model('mekan', mekanSema,'mekanlar');