import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Bhaskara } from './bhaskara';
import { Divisao } from './divisao';
import { Multiplicacao } from './multiplicacao';
import { Potencia } from './potencia';
import { Raiz } from './raiz';
import { Soma } from './soma';
import { Subtracao } from './subtracao';

const soma = new Soma();
const subtracao = new Subtracao();
const multiplicacao = new Multiplicacao();
const divisao = new Divisao();
const potencia = new Potencia();
const raiz = new Raiz();
const bhaskara = new Bhaskara();
const leitor = createInterface({ input, output });

function paraNumero(texto: string): number {
    const numero = Number(texto.trim().replace(',', '.'));

    switch (Number.isFinite(numero)) {
        case true:
            return numero;
        default:
            throw new Error('Digite um número válido.');
    }
}

async function pedirNumero(mensagem: string): Promise<number> {
    return paraNumero(await leitor.question(mensagem));
}

async function executarOperacao(operacao: (a: number, b: number) => number, segundaMensagem = 'Segundo número: '): Promise<void> {
    const a = await pedirNumero('Primeiro número: ');
    const b = await pedirNumero(segundaMensagem);
    console.log(`Resultado: ${operacao(a, b)}`);
}

async function executarBhaskara(): Promise<void> {
    const a = await pedirNumero('a: ');
    const b = await pedirNumero('b: ');
    const c = await pedirNumero('c: ');
    const { delta, x1, x2 } = bhaskara.calcular(a, b, c);
    console.log(`Delta: ${delta}\nx1: ${x1}\nx2: ${x2}`);
}

async function executar(): Promise<void> {
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
    } catch (erro) {
        console.log(`Erro: ${erro instanceof Error ? erro.message : 'Erro desconhecido.'}`);
    }

    await executar();
}

executar().catch((erro: unknown) => console.error(erro)).finally(() => leitor.close());
