import logo from './assets/images/Udeg.jpg';
import './assets/css/App.css';

//Importar componentes
import MiComponente from './components/MiComponente';

function HolaMundo(nombre, edad) {
  var presentacion = (
    <div>
        <h2> Hola, soy {nombre}</h2>
    </div>
  );

  return presentacion;
}

function App() {
  var nombre = "Ivan Cortez";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Hola, bienvenido a "Actividad integradora. Sprint, el corazón de SCRUM"</b>
        </p>
        {HolaMundo (nombre, 26)}
        <section className="componentes" >

            <MiComponente />
           




        </section>
          
      </header>
     
    </div>
  );
}

export default App;
