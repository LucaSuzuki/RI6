export interface ResultadoBhaskara {
    delta: number;
    x1: number;
    x2: number;
}

export class Bhaskara {
    calcular(a: number, b: number, c: number): ResultadoBhaskara {
        if (a === 0) throw new Error('O coeficiente a deve ser diferente de zero.');
        const delta = b ** 2 - 4 * a * c;
        if (delta < 0) throw new Error('A equação não possui raízes reais.');

        const raizDelta = Math.sqrt(delta);
        return { delta, x1: (-b + raizDelta) / (2 * a), x2: (-b - raizDelta) / (2 * a) };
    }
}
