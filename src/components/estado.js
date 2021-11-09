import React, {Component} from "react";

function EstadoAHijo(props) {
    return(
        <>
            <h3>{props.contadorHijo + 1}</h3>
        </>
    );
}

export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000);
    }

    render(){
        return (
            <>
                <h2>El state</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </>
        );
    }
}