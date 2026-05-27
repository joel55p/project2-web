import { useState } from 'react' // se importa el hook useState de React para manejar el estado de la calculadora

const MAXIMO = 999999999 //va a ser el max que se va a poder mostrar en la pantalla(osea en Display)
const MAX_CARACTERES = 9 

const calcular = (a, op, b) => { //
  if (op === '/' && b === 0) return 'ERROR' // se maneja el caso de división por cero
  const resultado = op === '+'
    ? a + b
    : op === '-'
      ? a - b
      : op === '*'  
        ? a * b
        : op === '/'
          ? a / b
          : a % b
  if (resultado < 0 || resultado > MAXIMO) return 'ERROR' // se maneja el caso de resultados fuera del rango permitido
  return parseFloat(resultado.toFixed(8)).toString().slice(0, MAX_CARACTERES)
}

const useCalculadora = () => { // se define el hook useCalculadora que maneja la lógica de la calculadora, incluyendo el estado del display, el num  anterior, la operación actual y si se espera la siguiente entrada
  const [display, setPantalla] = useState('0')
  const [anterior, setAnterior] = useState(null)
  const [operacion, setOperacion] = useState(null)
  const [esperaSiguiente, setEsperaSiguiente] = useState(false)

  const presionarNumero = (num) => { // función para manejar la entrada de números y el punto decimal, asegurando que no se exceda el límite de caracteres y que solo se permita un punto decimal
    const actual = esperaSiguiente ? '' : (display === '0' ? '' : display)
    if (actual.replace('.', '').length >= MAX_CARACTERES) return
    if (num === '.' && actual.includes('.')) return
    setPantalla(actual + num || '0')
    setEsperaSiguiente(false)
  }

  const presionarOperador = (siguienteOp) => { // función para manejar la seleccion de operadores, realizando la operacion si ya hay una  pendiente y actualizando el estado del display, el número anterior, la operación actual y si se espera la siguiente entrada
    const actual = parseFloat(display)
    if (operacion && !esperaSiguiente) {
      const resultado = calcular(anterior, operacion, actual)
      setPantalla(resultado)
      setAnterior(resultado === 'ERROR' ? null : parseFloat(resultado)) // si el resultado es un error, se reinicia el numero anterior, de lo contrario se actualiza con el resultado de la operacion
    } else {
      setAnterior(actual)
    }
    setOperacion(siguienteOp)
    setEsperaSiguiente(true)
  }

  const presionarIgual = () => { // fun para manejar la operacion de igual, realizando la operacion pendiente si existe y actualizando el estado del display, el numero anterior, la operación actual y si se espera la siguiente entrada
    if (!operacion || esperaSiguiente) return
    const resultado = calcular(anterior, operacion, parseFloat(display)) 
    setPantalla(resultado) // si el resultado es un error, se reinicia el numero anterior y la operacion, de lo contrario se actualiza el display con el resultado de la operacion
    setAnterior(null)
    setOperacion(null)
    setEsperaSiguiente(true)
  }

  const presionarMasMenos = () => { // fun para manejar el cambio de signo, asegurando que no se cambie el signo si el display muestra un error o cero, y que el nuevo valor no exceda el límite de caracteres
    if (display === 'ERROR' || display === '0') return
    const nuevo = display.startsWith('-') ? display.slice(1) : `-${display}`
    if (nuevo.length > MAX_CARACTERES) return
    setPantalla(nuevo)
  }

  const limpiar = () => { // fun para la limpieza de la calculadora, reiniciando el estado del display, el numero anterior, la operación actual y si se espera la siguiente entrada
    setPantalla('0')
    setAnterior(null)
    setOperacion(null)
    setEsperaSiguiente(false)
  }

  const manejarTecla = (tecla) => { // fun para manejar la entrada de teclas, determinando si la tecla es un num, un operador,  boton de igual, el boton de cambio de signo o el boton de limpieza, y llamando a la funcion correspondiente para cada caso
    if (tecla === 'C') return limpiar()
    if (tecla === '=') return presionarIgual()
    if (tecla === '+/-') return presionarMasMenos()
    if (['+', '-', '*', '/', '%'].includes(tecla)) return presionarOperador(tecla)
    presionarNumero(tecla)
  }

  return { display, manejarTecla } // se retorna el valor del display y la fun manejarTecla para ser utilizados en el componente Calculadora
}

export default useCalculadora // se exporta el hook useCalculadora para ser utilizado en otros componentes de la aplicación
