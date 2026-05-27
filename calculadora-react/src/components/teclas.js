export const TECLAS = [ // se define una constante TECLAS que contiene un arreglo de arreglos con las etiquetas de las teclas de la calculadora
  ['7', '8', '9', '/'], //organizadas en filas para facilitar su renderizado en el componente Teclado
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['+/-', '0', '.', '+'],
  ['%', 'C', '=']
]
export const OPERADORES = ['*', '-', '+', '/', '%', '=', 'C', '+/-'] // se define una constante OPERADORES que contiene un arreglo con las etiquetas de los operadores y funciones especiales de la calculadora 
export const LABELS = { 
  '+': 'sumar',
  '-': 'restar',
  '*': 'multiplicar',
  '/': 'dividir',
  '%': 'módulo',
  '=': 'igual',
  C: 'limpiar',
  '.': 'punto decimal',
  '+/-': 'cambiar signo'
}