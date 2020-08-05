import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Components

import FunctionGreet from "./components/FunctionGreet";
import ClassGreet from "./components/ClassGreet";
import Post from "./components/Post";
import { Container, CardColumns } from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FunctionGreet firstName="Nitz" lastName="Villa" />
        <ClassGreet firstName="Otra vez Nitz" lastName=":3 " />
      </header>
      <CardColumns>
        <Post
          img="https://i.pinimg.com/originals/81/02/68/81026878273e4c933692657e4eafbed3.jpg"
          tittle="Un perrito"
          subtittle="Samoyedo"
          text="Esta raza, que toma el nombre del pueblo Samoyedo, es nativo de Siberia. Son los perros pastores por excelencia de la región. Aunque son criados en su región para este trabajo, También destacan por su belleza. En Europa es conocido como Bielkier"
        />
        <Post
          img="https://dogbreeds10.com/wp-content/uploads/2018/11/Caucasian-Ovcharka-Full-Grown-200x200.jpg"
          tittle="Otro perrito"
          subtittle="Ovcharka"
          text="Sus maneras y poses de lobo marcan la diferencia con el resto de sabuesos. Destaca por su rapidez, sobre todo, porque mientras otros sabuesos zigzaguean para dar alcance a su presa, el Borzoi les da alcance gracias a su velocidad punta"
        />
        <Post
          img="https://www.ecured.cu/images/2/25/Mstor1.jpg"
          tittle="Más perritos"
          subtittle="Perro guardián moscovita"
          text="Como curiosidad, este perro fue creado por orden de Joseph Stalin, en las instalaciones de Krásnaia Zvezda, con el fin de crear el perro policía perfecto. Se adapta a cualquier tipo de clima, resistente y muy obediente, si se le entrena bien.
          Pastor de Europa del Este"
        />
      </CardColumns>
    </div>
  );
}

export default App;
