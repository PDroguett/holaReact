import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
    return (
        <div>
            <h2>Propiedades</h2>
            <p>{props.porDefecto}</p>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{props.objeto.nombre}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.componente}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: 'Soy variable por defecto'
}

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}