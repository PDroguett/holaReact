import './App.css';
import Componente from './components/componente';
import Propiedades from './components/propiedades';
import Estado from './components/estado';

function App() {
  let title = "Hola react";

  return (
    <div className="App">
      <h1>{title}</h1>
      <section>
        <Componente subtitle="Soy el subtitulo"></Componente>
        <hr/>
        <Propiedades
          cadena="soy cadena"
          numero={33}
          booleano={true}
          arreglo={[1,2,3,4]}
          objeto={{nombre:'jose'}}
          funcion={(num) => num*num}
          componente={<Componente subtitle="soy un subcomponente"></Componente>}
        ></Propiedades>
        <hr/>
        <Estado></Estado>
      </section>
    </div>
  );
}

export default App;
