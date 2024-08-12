import style from "./Topo.module.css";
import Image from "next/image";
import Baner from "../../../public/assets/img/banner.png";

function Topo () {

    return(
        <section className={style.baner}>
            <Image src={Baner} alt="Banner" />
            <div>
                <h1>RESTAURANT</h1>
                <p className="fontD">De pratos clássicos a criações surpreendentes, nosso <br/>cardápio é um requinte de sabores refinados</p>
            </div>
           
        </section>
    );
};
export default Topo;