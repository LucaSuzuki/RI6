"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("node:readline/promises");
const node_process_1 = require("node:process");
const bhaskara_1 = require("./bhaskara");
const divisao_1 = require("./divisao");
const multiplicacao_1 = require("./multiplicacao");
const potencia_1 = require("./potencia");
const raiz_1 = require("./raiz");
const soma_1 = require("./soma");
const subtracao_1 = require("./subtracao");
const soma = new soma_1.Soma();
const subtracao = new subtracao_1.Subtracao();
const multiplicacao = new multiplicacao_1.Multiplicacao();
const divisao = new divisao_1.Divisao();
const potencia = new potencia_1.Potencia();
const raiz = new raiz_1.Raiz();
const bhaskara = new bhaskara_1.Bhaskara();
const leitor = (0, promises_1.createInterface)({ input: node_process_1.stdin, output: node_process_1.stdout });
function paraNumero(texto) {
    const numero = Number(texto.trim().replace(',', '.'));
    switch (Number.isFinite(numero)) {
        case true:
            return numero;
        default:
            throw new Error('Digite um número válido.');
    }
}
async function pedirNumero(mensagem) {
    return paraNumero(await leitor.question(mensagem));
}
async function executarOperacao(operacao, segundaMensagem = 'Segundo número: ') {
    const a = await pedirNumero('Primeiro número: ');
    const b = await pedirNumero(segundaMensagem);
    console.log(`Resultado: ${operacao(a, b)}`);
}
async function executarBhaskara() {
    const a = await pedirNumero('a: ');
    const b = await pedirNumero('b: ');
    const c = await pedirNumero('c: ');
    const { delta, x1, x2 } = bhaskara.calcular(a, b, c);
    console.log(`Delta: ${delta}\nx1: ${x1}\nx2: ${x2}`);
}
async function executar() {
    console.log('\n=== Calculadora ===');
    console.log('1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão');
    console.log('5. Potência\n6. Raiz\n7. Bhaskara\n0. Sair');
    const opcao = (await leitor.question('Escolha uma opção: ')).trim();
    try {
        switch (opcao) {
            case '0':
                return;
            case '1':
                await executarOperacao((a, b) => soma.calcular(a, b));
                break;
            case '2':
                await executarOperacao((a, b) => subtracao.calcular(a, b));
                break;
            case '3':
                await executarOperacao((a, b) => multiplicacao.calcular(a, b));
                break;
            case '4':
                await executarOperacao((a, b) => divisao.calcular(a, b));
                break;
            case '5':
                await executarOperacao((a, b) => potencia.calcular(a, b));
                break;
            case '6':
                await executarOperacao((a, b) => raiz.calcular(a, b), 'Índice da raiz: ');
                break;
            case '7':
                await executarBhaskara();
                break;
            default:
                throw new Error('Opção inválida.');
        }
    }
    catch (erro) {
        console.log(`Erro: ${erro instanceof Error ? erro.message : 'Erro desconhecido.'}`);
    }
    await executar();
}
executar().catch((erro) => console.error(erro)).finally(() => leitor.close());
