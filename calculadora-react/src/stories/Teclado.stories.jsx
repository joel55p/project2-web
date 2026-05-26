import Teclado from '../components/Teclado'

export default {
  title: 'Components/Teclado',
  component: Teclado
}

export const PorDefecto = {
  args: { alPresionar: (tecla) => console.log('Tecla:', tecla) }
}