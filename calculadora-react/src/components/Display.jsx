import PropTypes from 'prop-types' //
import './Display.css'

const Display = ({ valor }) => ( // se define el componente Display que recibe la prop valor para mostrar el contenido del display de la calculadora
  <div className="display" role="region" aria-label="pantalla de la calculadora">
    <span aria-live="polite" className="display-value">{valor}</span>
  </div>
) // se renderiza un contenedor con la clase display y un span con la clase display-value que muestra el valor del display, además se agregan atributos de accesibilidad para mejorar la experiencia de usuarios con discapacidades visuales

Display.propTypes = { // se definen las propTypes para validar las props del componente
  valor: PropTypes.string.isRequired
}

export default Display
