import React, { useState } from "react";
import Error from './Error'
import axios from 'axios'

function AgregarProducto() {
  const [nombrePlatillo, guardarNombre] = useState('')
  const [precioPlatillo, guardarPrecio] = useState('')
  const [categoria, guardarCategoria] = useState('postre')
  const [error, guardarError] = useState(false)

  const leerValorRadio = e => {
    guardarCategoria(e.target.value)
  }

  const enviarDatos = async e => {
    e.preventDefault()

    if(nombrePlatillo === '' || precioPlatillo === '') {
      guardarError(true)
      console.log('Llena todos los campos');
      
      return
    }

    guardarError(false)
    console.log(nombrePlatillo, precioPlatillo, categoria)
    // Creamos un nuevo platillo
    let platillo = {
      nombrePlatillo,
      precioPlatillo,
      categoria
    }
    try {
      const request = await axios.post('http://localhost:4000/restaurante', platillo)
      
      console.log(request)
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Agregar Nuevo Producto</h1>
      {(error) ? <Error message="Ingresa todos los datos"/> : null}
      <form className="mt-5" onSubmit={enviarDatos}>
        <div className="form-group">
          <label>Nombre Platillo</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre Platillo"
            onChange={e => guardarNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Precio Platillo</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            placeholder="Precio Platillo"
            onChange={e => guardarPrecio(e.target.value)}
          />
        </div>

        <legend className="text-center">Categoría:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input
              defaultChecked
              className="form-check-input"
              type="radio"
              name="categoria"
              value="postre"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Postre</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="bebida"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Bebida</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="cortes"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Cortes</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              value="ensalada"
              onChange={leerValorRadio}
            />
            <label className="form-check-label">Ensalada</label>
          </div>
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Agregar Producto"
        />
      </form>
    </div>
  );
}

export default AgregarProducto;
