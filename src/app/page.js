'use client'
import { useState } from "react";
import style from "./page.module.css";
/* importando componentes */
import Topo from "@/componentes/Topo/Topo";
import Botao from "@/componentes/Botoes/Botao";
import Card from "@/componentes/Card/Card";
/* importando imagens */
import entradaIcon from '../../public/assets/img/entrada.png';
import massaIcon from '../../public/assets/img/massa.png';
import carneIcon from '../../public/assets/img/carne.png';
import bebidasIcon from '../../public/assets/img/bebidas.png';
import saladaIcon from '../../public/assets/img/salada.png';
import sobremesaicon from "../../public/assets/img/sobremesa.png";
/* funcoes de ineracao com colecao de dados */
import { buscaCardapio,buscaCategoria } from "@/service/FiltroPesquisa";


export default function Home() {
   
   const [card, setCard] = useState(buscaCategoria("Entradas"));
   const [busca, setBusca] = useState("");
   const [categoria, setCategoria] = useState("Entradas");
//alterar cor de interacao dos botoes
   const botoes = () =>{
      setCard(buscaCategoria("Entradas"))
      setCategoria("")
   }
//buscar a parti da 3 string digitada
   const handleBuscaPrato = (textoDigitado) => {
      setBusca(textoDigitado);
      textoDigitado.length >= 3 ? setCard(buscaCardapio(textoDigitado)) : botoes();
   }
//buscar por categoria
   const handleBuscaCategoria = (categoria) => {
      
         setCard(buscaCategoria(categoria));
         setCategoria(categoria);
         setBusca("");
         
      
   }
   
  return (
    <main>
      <Topo />
      <div className={style.container}>
         {/*aplicando botoes na pratica atraves de props */}
      <Botao 
           image={entradaIcon}
           text='Entradas'
           filtro={() => handleBuscaCategoria("Entradas")}
           clicado={(categoria === 'Entradas')}
        />
        <Botao 
           image={massaIcon}
           text='Massas'
           filtro={() => handleBuscaCategoria("Massas")}
           clicado={(categoria === 'Massas')}
        />
        <Botao 
           image={carneIcon}
           text='Carnes'
           filtro={() => handleBuscaCategoria("Carnes")}
           clicado={(categoria === 'Carnes')}
        />
        <Botao 
           image={bebidasIcon}
           text='Bebidas'
           filtro={() => handleBuscaCategoria("Bebidas")}
           clicado={(categoria === 'Bebidas')}
        />
        <Botao 
           image={saladaIcon}
           text='Saladas'
           filtro={() => handleBuscaCategoria("Saladas")}
           clicado={(categoria === 'Saladas')}
        />
        <Botao 
           image={sobremesaicon}
           text='Sobremesas'
           filtro={() => handleBuscaCategoria("Sobremesas")}
           clicado={(categoria === 'Sobremesas')}
        />
      </div>
      <div className={style.busca}>
            <input 
            type="text" 
            placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            onChange={(e) => {handleBuscaPrato(e.target.value)}}
            value={busca}
            />
        </div>
        <h3 className={style.cardapio}>Cardapio</h3>
        {/*aplicando cards na pratica atraves de funcoes MAP e FILTER para criar elementos a parti de uma colecao de dados */}
      <section className={style.cardsPratos}>
        {
        card.map((prato, index) => (
        <Card 
        key={index}
        nome={prato.nome}
        preco={`R$ ${(prato.preco).toFixed(2)}`}
        imagem={prato.imagem}
        categoria={prato.categoria}
        descricao={prato.descricao}
        />
      ))}
      </section>
    </main>
  );
}
