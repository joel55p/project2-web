import PropTypes from 'prop-types'
import Boton from './Boton'
import { TECLAS, OPERADORES } from './teclas' // se importan las constantes TECLAS y OPERADORES para definir las teclas y operadores de la calculadora
import './Teclado.css'

const getVariante = (t) => { // funcion para determinar la variante del botón basada en su etiqueta, asignando estilos específicos para operadores y el botón de igual
  if (t === '=') return 'igual'
  return OPERADORES.includes(t) ? 'operador' : 'defecto' 
} 
const Teclado = ({ alPresionar }) => ( // se define el componente Teclado que recibe la función alPresionar como prop para manejar los eventos de las teclas
  <div className="teclado">
    {TECLAS.flat().map(t => (
      <Boton key={t} etiqueta={t} alPresionar={alPresionar} variante={getVariante(t)} /> // se renderiza un botón para cada tecla definida en TECLAS, asignando la etiqueta, la función alPresionar y la variante correspondiente para el estilo del botón
    ))}
  </div>
)
Teclado.propTypes = { // se definen las propTypes para validar las props del componente
  alPresionar: PropTypes.func.isRequired
}
export default Teclado
