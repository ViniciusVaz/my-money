const moongoose = require('mongoose')

moongoose.Promise = global.Promise

module.exports = moongoose.connect('mongodb://localhost/mymoney')

moongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
moongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
moongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
moongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."