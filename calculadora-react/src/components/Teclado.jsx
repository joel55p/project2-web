import PropTypes from 'prop-types'
import Boton from './Boton'
import './Teclado.css'
const TECLAS = [
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['.', '0', 'C', '=']
]
const OPERADORES = ['*', '-', '+', '=', 'C']
const Teclado = ({ alPresionar }) => (
  <div className="teclado">
    {TECLAS.flat().map(t => (
      <Boton
        key={t}
        etiqueta={t}
        alPresionar={alPresionar}
        variante={t === '=' ? 'igual' : OPERADORES.includes(t) ? 'operador' : 'defecto'}
      />
    ))}
  </div>
)
Teclado.propTypes = {
  alPresionar: PropTypes.func.isRequired
}

export default Teclado
