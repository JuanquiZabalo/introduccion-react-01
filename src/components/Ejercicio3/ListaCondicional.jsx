export default function ListaProductosCondicional(prop){
    return(
        <div>
            <h3>Lista de productos condicional</h3>
            {prop.productos.length === 0 ? (
                <p>No hay elementos en la lista</p>
            ) : (
                <ul>
                    {prop.productos.map((producto, index)=>{
                        return <li key={index}> {producto} </li>
                    })}
                </ul>
            )}
        </div>
    )
}