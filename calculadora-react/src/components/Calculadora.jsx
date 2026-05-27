import Display from './Display'
import Teclado from './Teclado'
import useCalculadora from '../hooks/useCalculadora'

const Calculadora = () => { // se define el componente Calculadora que utiliza el hook useCalculadora para manejar la lógica de la calculadora
  const { display, manejarTecla } = useCalculadora() // se extraen el valor del display y la función manejarTecla del hook useCalculadora
  return (
    <div className="calculadora">
      <Display valor={display} /> 
      <Teclado alPresionar={manejarTecla} />
    </div>
  ) // se renderiza el componente Display con el valor del display y el componente Teclado con la función manejarTecla como prop alPresionar
}

export default Calculadora //para poder usar el componente Calculadora en otras partes de la aplicación, se exporta como default
