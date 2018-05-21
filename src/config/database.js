const moongoose = require('mongoose')

moongoose.Promise = global.Promise

module.exports = moongoose.connect('mongodb://localhost/mymoney')