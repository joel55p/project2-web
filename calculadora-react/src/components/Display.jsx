import './Display.css'

const Display = ({ valor }) => (
  <div className="display">
    <span className="display-value">{valor}</span>
  </div>
)

export default Display