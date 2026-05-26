import PropTypes from 'prop-types'
import './Boton.css'

const Boton = ({ etiqueta, alPresionar, variante = 'defecto' }) => (
  <button
    className={`calc-boton calc-boton--${variante}`}
    onClick={() => alPresionar(etiqueta)}
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
