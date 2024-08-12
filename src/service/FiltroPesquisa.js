//colecao de dados
import { produtos } from "@/service/colecaoDeDados"

export const cardapio = () => {
    return produtos;
}
// funcao de bunca pelo imput
export const buscaCardapio = (textoDigitado) => {
    return produtos.filter((produto) => produto.nome.toLowerCase().includes(textoDigitado) ||  produto.descricao.toLowerCase().includes(textoDigitado))
}
//funcao de busca por categoria
export const buscaCategoria = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria)
}

