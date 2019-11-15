import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Productos from './components/Productos'
import EditarProducto from './components/EditarProducto'
import AgregarProducto from './components/AgregarProducto'
import Producto from './components/Producto'

function App() {

    const [productos, guardarProductos] = useState([])
    const [cargarProductos, guardarCargarProductos] = useState(true)

    useEffect(() => {
      if (cargarProductos) {
        const consultarApi = async () => {
          const consulta = await axios.get('http://localhost:4000/restaurante')
  
          console.log(consulta.data)
          guardarProductos(consulta.data)
          guardarCargarProductos(false)
        }
        consultarApi()
      }
    }, [cargarProductos])
  // Siempre colocar las rutas más específicas primero luego los genéricos (/:id)
  return (
    <Router>
      <Header/>
      <main className="container mt-5">
        <Switch>
          <Route exact path="/productos" render={() => (
            <Productos
              productos={productos}
              guardarCargarProductos={guardarCargarProductos} />
          )}/>
          <Route exact path="/productos/nuevo-producto" render={() => (
            <AgregarProducto
              guardarCargarProductos={guardarCargarProductos} />
          )}/>
          <Route exact path="/productos/:id" component={Producto}/>
          <Route exact path="/productos/editar/:id" render={props => {
            const idProducto = parseInt(props.match.params.id)
            const producto = productos.filter(producto => producto.id === idProducto)
            return (
              <EditarProducto
                producto={producto[0]}
                guardarCargarProductos={guardarCargarProductos}
              />
            )
          }}/>
        </Switch>
      </main>
      <p className="mt4 p2 text-center">Todos los derechos reservados</p>
    </Router>
  );
}

export default App;
