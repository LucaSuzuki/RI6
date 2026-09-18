class Bhask{
    calcular(a: number, b:number, c:number){
        const sol1 = ((-1 * b) + (b**2 - 4 * a * c)**1/2)/2 * a
        const sol2 = ((-1 * b) - (b**2 - 4 * a * c)**1/2)/2 * a
        return 'Solução 1: ' + sol1 + " e Solução2: " + sol2
    }
}