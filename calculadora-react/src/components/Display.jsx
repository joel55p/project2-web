import PropTypes from 'prop-types'
import './Display.css'

const Display = ({ valor }) => (
  <div className="display">
    <span className="display-value">{valor}</span>
  </div>
)

Display.propTypes = {
  valor: PropTypes.string.isRequired
}

export default Display
