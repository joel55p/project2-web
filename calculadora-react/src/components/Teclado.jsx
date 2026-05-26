import PropTypes from 'prop-types'
import Boton from './Boton'
import { TECLAS, OPERADORES } from './teclas'
import './Teclado.css'

const getVariante = (t) => {
  if (t === '=') return 'igual'
  return OPERADORES.includes(t) ? 'operador' : 'defecto'
}
const Teclado = ({ alPresionar }) => (
  <div className="teclado">
    {TECLAS.flat().map(t => (
      <Boton key={t} etiqueta={t} alPresionar={alPresionar} variante={getVariante(t)} />
    ))}
  </div>
)
Teclado.propTypes = {
  alPresionar: PropTypes.func.isRequired
}
export default Teclado
