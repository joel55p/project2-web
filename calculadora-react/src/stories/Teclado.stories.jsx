import Teclado from '../components/Teclado'

// se define la historia para el componente Teclado, con un caso por defecto que muestra el teclado completo de la calculadora, utilizando  tambien Storybook 
export default {
  title: 'Components/Teclado',
  component: Teclado
}

export const PorDefecto = {
  args: { alPresionar: (tecla) => console.log('Tecla:', tecla) }
}
