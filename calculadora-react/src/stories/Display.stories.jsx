import Display from '../components/Display'

// Historias para los distintos estados del Display
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
