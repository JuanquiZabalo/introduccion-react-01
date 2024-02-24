import { productos } from "../../constants/productos"
import TituloEjercicio from "../TituloEjercicio"
import ListaProductos from "./Lista"

export default function Ejercicio2(){
    return(
        <section className="caja-ejercicio">
            <TituloEjercicio>Este es el ejercicio 2</TituloEjercicio>
            <ListaProductos productos= {productos}/>
        </section>
    )
}
