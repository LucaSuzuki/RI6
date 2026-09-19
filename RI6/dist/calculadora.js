"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
const bhaskara_1 = require("./bhaskara");
const divisao_1 = require("./divisao");
const multiplicacao_1 = require("./multiplicacao");
const potencia_1 = require("./potencia");
const raiz_1 = require("./raiz");
const soma_1 = require("./soma");
const subtracao_1 = require("./subtracao");
class Calculadora {
    soma = new soma_1.Soma();
    subtracao = new subtracao_1.Subtracao();
    multiplicacao = new multiplicacao_1.Multiplicacao();
    divisao = new divisao_1.Divisao();
    potencia = new potencia_1.Potencia();
    raiz = new raiz_1.Raiz();
    bhaskara = new bhaskara_1.Bhaskara();
    somar(a, b) { return this.soma.calcular(a, b); }
    subtrair(a, b) { return this.subtracao.calcular(a, b); }
    multiplicar(a, b) { return this.multiplicacao.calcular(a, b); }
    dividir(a, b) { return this.divisao.calcular(a, b); }
    elevar(a, b) { return this.potencia.calcular(a, b); }
    calcularRaiz(numero, indice) { return this.raiz.calcular(numero, indice); }
    calcularBhaskara(a, b, c) { return this.bhaskara.calcular(a, b, c); }
}
exports.Calculadora = Calculadora;
