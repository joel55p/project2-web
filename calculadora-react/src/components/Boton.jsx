import './Boton.css'

const Boton = ({ etiqueta, alPresionar, variante = 'defecto' }) => (
  <button
    className={`calc-boton calc-boton--${variante}`}
    onClick={() => alPresionar(etiqueta)}
  >
    {etiqueta}
  </button>
)

export default Boton