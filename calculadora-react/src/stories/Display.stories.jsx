import Display from '../components/Display'

// se define la historia para el componente Display, con diferentes casos para mostrar el valor inicial, un número largo, un número con decimal y el estado de error, utilizando Storybook para visualizar el componente en diferentes escenarios
export default {
  title: 'Components/Display',
  component: Display
}

export const ValorInicial = {
  args: { valor: '0' }
}

export const NumeroLargo = {
  args: { valor: '123456789' }
}

export const ConDecimal = {
  args: { valor: '3.14' }
}

export const EstadoError = {
  args: { valor: 'ERROR' }
}
