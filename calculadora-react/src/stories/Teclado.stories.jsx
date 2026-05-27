import Teclado from '../components/Teclado'

// Historia por defecto del teclado completo
export default {
  title: 'Components/Teclado',
  component: Teclado
}

export const PorDefecto = {
  args: { alPresionar: (tecla) => console.log('Tecla:', tecla) }
}
