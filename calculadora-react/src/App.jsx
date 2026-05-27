import Calculadora from './components/Calculadora'
import './App.css' // se importan el componente Calculadora y el archivo de estilos App.css para ser utilizados en el componente principal de la aplicacion

const App = () => ( // se define el componente App que renderiza el título de la aplicación y el componente Calculadora dentro de un contenedor principal con la clase "app" para aplicar los estilos definidos en App.css
  <main className="app">
    <h1 className="app-titulo">CALCULADORA - WEB</h1>
    <Calculadora />
  </main>
) 

export default App
