interface Modelo {
    id: number,
    nome: string,
    icone: string
}

interface Movimentacao {
    id: number,
    descricao: string,
    quantidade: number,
    valor: number,
    data: string,
    tipo: "ENTRADA" | "SAIDA",
    modelo: Modelo
}