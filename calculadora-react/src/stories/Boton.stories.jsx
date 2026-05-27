import Boton from '../components/Boton' // se importa el componente Boton para ser utilizado en las historias de Storybook

export default {
  title: 'Componentes/Boton',
  component: Boton
}

// función para manejar el evento de presionar un boton, simplemente imprime la etiqueta del botón presionado en la consola
const alPresionar = (etiqueta) => console.log('Presionado:', etiqueta) 

export const Numero = {
  args: { etiqueta: '5', alPresionar, variante: 'defecto' }
}

export const Operador = {
  args: { etiqueta: '+', alPresionar, variante: 'operador' }
}

export const Division = {
  args: { etiqueta: '/', alPresionar, variante: 'operador' }
}

export const Modulo = {
  args: { etiqueta: '%', alPresionar, variante: 'operador' }
}

export const CambioSigno = {
  args: { etiqueta: '+/-', alPresionar, variante: 'operador' }
}

export const Igual = {
  args: { etiqueta: '=', alPresionar, variante: 'igual' }
}

export const Limpiar = {
  args: { etiqueta: 'C', alPresionar, variante: 'operador' }
}
