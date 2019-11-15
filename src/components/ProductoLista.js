import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const ProductoLista = ({producto, guardarCargarProductos}) => {
  
  const eliminarProducto = id => {
    console.log('eliminando', id)

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Un platillo eliminado no se puede recuperar.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.value) {
        const url = `http://localhost:4000/restaurante/${id}`
        
        try {
          const resultado = await axios.delete(url)
  
          if(resultado.status === 200) {
            Swal.fire(
              'Eliminado',
              'El producto se ha eliminado',
              'success'
            )
            guardarCargarProductos(true)
          }
        } catch (error) {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error de nuestro lado, por favor vuelve a intentarlo.',
          })
        }

      }
    })
  }

  return ( 
    <li  data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between align-items-center">
      <p>{producto.nombrePlatillo} <span className="font-weight-bold">$ {producto.precioPlatillo}</span></p>
      <div>
        <Link to={`/productos/editar/${producto.id}`} className="btn btn-success mr-2">Editar</Link>
        <button className="btn btn-danger" onClick={() => eliminarProducto(producto.id)}>Eliminar &times;</button>
      </div>
    </li>
   );
}
 
export default ProductoLista;