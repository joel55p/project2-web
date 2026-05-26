import PropTypes from 'prop-types'
import './Display.css'

const Display = ({ valor }) => (
  <div className="display" role="region" aria-label="pantalla de la calculadora">
    <span aria-live="polite" className="display-value">{valor}</span>
  </div>
)

Display.propTypes = {
  valor: PropTypes.string.isRequired
}

export default Display
