import Display from './Display'
import Teclado from './Teclado'
import useCalculadora from '../hooks/useCalculadora'

const Calculadora = () => {
  const { display, manejarTecla } = useCalculadora()
  return (
    <div className="calculadora">
      <Display valor={display} />
      <Teclado alPresionar={manejarTecla} />
    </div>
  )
}

export default Calculadora
