import PropTypes from 'prop-types'
import { LABELS } from './teclas'
import './Boton.css'
// Componente botón con etiqueta accesible y variante de estilo
const Boton = ({ etiqueta, alPresionar, variante = 'defecto' }) => (
  <button
    className={`calc-boton calc-boton--${variante}`}
    onClick={() => alPresionar(etiqueta)}
    aria-label={LABELS[etiqueta] || `número ${etiqueta}`}
  >
    {etiqueta}
  </button>
)
Boton.propTypes = {
  etiqueta: PropTypes.string.isRequired,
  alPresionar: PropTypes.func.isRequired,
  variante: PropTypes.string
}
export default Boton