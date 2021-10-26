export class Produtos {
    private itens: Item[] = []

    adicionarItem(item: Item){
        this.itens.push(item)
    }

    mostrarItens(): void {
        for(const item of this.itens){
            console.log(item)
        }
    }
}

export class Item {
    public codigo: string
    public unidades: number
    public preco: number

    constructor(codigo: string, unidades: number, preco: number){
        this.codigo = codigo
        this.unidades  =unidades
        this.preco = preco
    }

    public Pagar(unid: number, pre: number): number {
        return +(unid * pre).toFixed(2)
    }
}