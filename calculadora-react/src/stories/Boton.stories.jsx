import Boton from '../components/Boton'

export default {
  title: 'Components/Boton',
  component: Boton
}

const alPresionar = (etiqueta) => console.log('Presionado:', etiqueta)

export const Numero = {
  args: { etiqueta: '5', alPresionar, variante: 'defecto' }
}

export const Operador = {
  args: { etiqueta: '+', alPresionar, variante: 'operador' }
}

export const Igual = {
  args: { etiqueta: '=', alPresionar, variante: 'igual' }
}

export const Limpiar = {
  args: { etiqueta: 'C', alPresionar, variante: 'operador' }
}
