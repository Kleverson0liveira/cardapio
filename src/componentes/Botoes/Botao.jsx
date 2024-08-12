import Image from "next/image";
import style from "./Botao.module.css";

function Botao (props){

    return(
        <button className={`${style.botoes} ${(props.clicado) ? style.clicado : style.unclicado}`} onClick={props.filtro } >
            <Image src={props.image}/>
            <span>{props.text}</span>
            
        </button>
    )
}
export default Botao;