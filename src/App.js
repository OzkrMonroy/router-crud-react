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

    useEffect(() => {
      const consultarApi = async () => {
        const consulta = await axios.get('http://localhost:4000/restaurante')

        console.log(consulta.data)
        guardarProductos(consulta.data)
      }
      consultarApi()
    }, [])
  // Siempre colocar las rutas más específicas primero luego los genéricos (/:id)
  return (
    <Router>
      <Header/>
      <main className="container mt-5">
        <Switch>
          <Route exact path="/productos" render={() => (
            <Productos
              productos={productos} />
          )}/>
          <Route exact path="/productos/nuevo-producto" component={AgregarProducto}/>
          <Route exact path="/productos/:id" component={Producto}/>
          <Route exact path="/productos/editar/:id" component={EditarProducto}/>
        </Switch>
      </main>
      <p className="mt4 p2 text-center">Todos los derechos reservados</p>
    </Router>
  );
}

export default App;
