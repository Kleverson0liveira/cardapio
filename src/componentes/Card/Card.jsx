import Image from "next/image";
import style from "./Card.module.css";
function Card (props){

    return(
        <div className={style.prato}>
            <Image src={props.imagem} alt={props.imagem}/>
            <div>
            <h3>{props.nome}</h3>
            <span>{props.categoria}</span>
            <p className={style.prePreco}>{props.descricao}</p>
            <p className={style.preco}>{props.preco}</p>
            </div>
        </div>
    );
};
export default Card;