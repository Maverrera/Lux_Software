import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const ContForm = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:5%;
    padding-bottom:5%;
    margin-right: 30%;
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: white;
    color:black;

    div {
        label {
        color:black;
        }
    }


    div{
        input {
        margin-bottom: 5%;
        }
    }


`;

const Formulario = ({crearPedido}) => {

    const [pedido, actualizarPedido] = useState({
        nombre: '',
        apellidos: '',
        direccion: ''
    });
    const [error, actualizarError] = useState(false);

    const actualizarState = e => {
        actualizarPedido ({
            ...pedido,
            [e.target.name]: e.target.value
        })
    }

    const {nombre, apellidos, direccion} = pedido;

    const SubmitPedido = e => {
        e.preventDefault();

        if(nombre.trim() === '' || apellidos.trim() === '' || direccion.trim() === ''){
            actualizarError(true);
            return;
        }

        actualizarError(false);

        crearPedido(pedido);

        actualizarPedido({
            nombre: '',
            apellidos: '',
            direccion: ''
        });

    }

    return (
        <ContForm>
            <form
            onSubmit={SubmitPedido}
            >

            <div>
                <label>Nombre</label>
                <br/>
                <input
                    type="text"
                    name="nombre"
                    onChange={actualizarState}
                    value={nombre}
                />
            </div>
            <div>
                <label id="Apellidos">Apellidos</label>
                <br/>
                <input 
                    type="text"
                    name="apellidos"
                    onChange={actualizarState}
                    value={apellidos}
                />
            </div>
            <div>
                <label id="Direccion">Direccion</label>
                <br/>
                <input 
                    type="text"
                    name="direccion"
                    onChange={actualizarState}
                    value={direccion}
                />
            </div>
            <div>
                <button
                    type="submit"
                >Agregar Pedido</button>
            </div>
        </form>
        </ContForm>
       
    );
}

export default Formulario;