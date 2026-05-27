import PropTypes from 'prop-types' // se importa PropTypes para validar las props del componente
import { LABELS } from './teclas' // se importa LABELS para asignar etiquetas accesibles a los botones
import './Boton.css'

const Boton = ({ etiqueta, alPresionar, variante = 'defecto' }) => ( // se define el componente Boton que recibe las props etiqueta, alPresionar y variante
  <button
    className={`calc-boton calc-boton--${variante}`} // se asigna una clase CSS dinámica basada en la variante del botón
    onClick={() => alPresionar(etiqueta)} // se asigna un evento onClick que llama a la función alPresionar con la etiqueta del botón como argumento
    aria-label={LABELS[etiqueta] || `número ${etiqueta}`}
  >
    {etiqueta}
  </button>
)
Boton.propTypes = { // se definen las propTypes para validar las props del componente
  etiqueta: PropTypes.string.isRequired,
  alPresionar: PropTypes.func.isRequired,
  variante: PropTypes.string
}
export default Boton