export default function ListaProducto(prop){
    return(
        <div>
            <h3>Lista de Productos</h3>
            <ul>
                {prop.productos.map(function(producto, index){
                    return <li key={index}> {producto} </li>
                })}
            </ul>
        </div>
    )
}