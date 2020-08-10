import React, { Fragment, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error from './Components/Error';
import Formulario from './Components/Formulario';

function App() {

  const [pedidos, guardarPedidos] = useState([]);
  const nombre = "Jonathan"
  const crearPedido = pedido => {
    guardarPedidos([...pedidos, pedido]);
  }
  
  return (
    <Fragment>
        <Header
          nombre= {nombre}
        />
        <Formulario 
          crearPedido = {crearPedido}
        />
    </Fragment>
  );
}

export default App;
