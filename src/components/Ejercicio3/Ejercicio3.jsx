import ListaProductosCondicional from "./ListaCondicional"
import { productosCondicional } from "../../constants/productos"
import TituloEjercicio from "../TituloEjercicio"

export default function Ejercicio3(){
    return(
        <section className="caja-ejercicio">
            <TituloEjercicio>Este es el ejercicio 3</TituloEjercicio>
            <ListaProductosCondicional productos= {productosCondicional}/>
        </section>
    )
}