import { useState } from 'react'

const MAXIMO = 999999999
const MAX_CARACTERES = 9

// Realiza la operación y valida el resultado
const calcular = (a, op, b) => {
  if (op === '/' && b === 0) return 'ERROR'
  const resultado = op === '+'
    ? a + b
    : op === '-'
      ? a - b
      : op === '*'
        ? a * b
        : op === '/'
          ? a / b
          : a % b
  if (resultado < 0 || resultado > MAXIMO) return 'ERROR'
  return parseFloat(resultado.toFixed(8)).toString().slice(0, MAX_CARACTERES)
}

const useCalculadora = () => {
  const [display, setPantalla] = useState('0')
  const [anterior, setAnterior] = useState(null)
  const [operacion, setOperacion] = useState(null)
  const [esperaSiguiente, setEsperaSiguiente] = useState(false)

  // Maneja entrada de números y punto decimal
  const presionarNumero = (num) => {
    const actual = esperaSiguiente ? '' : (display === '0' ? '' : display)
    if (actual.replace('.', '').length >= MAX_CARACTERES) return
    if (num === '.' && actual.includes('.')) return
    setPantalla(actual + num || '0')
    setEsperaSiguiente(false)
  }

  // Maneja selección de operador
  const presionarOperador = (siguienteOp) => {
    const actual = parseFloat(display)
    if (operacion && !esperaSiguiente) {
      const resultado = calcular(anterior, operacion, actual)
      setPantalla(resultado)
      setAnterior(resultado === 'ERROR' ? null : parseFloat(resultado))
    } else {
      setAnterior(actual)
    }
    setOperacion(siguienteOp)
    setEsperaSiguiente(true)
  }

  // Ejecuta la operación pendiente
  const presionarIgual = () => {
    if (!operacion || esperaSiguiente) return
    const resultado = calcular(anterior, operacion, parseFloat(display))
    setPantalla(resultado)
    setAnterior(null)
    setOperacion(null)
    setEsperaSiguiente(true)
  }

  // Cambia el signo del número en pantalla
  const presionarMasMenos = () => {
    if (display === 'ERROR' || display === '0') return
    const nuevo = display.startsWith('-') ? display.slice(1) : `-${display}`
    if (nuevo.length > MAX_CARACTERES) return
    setPantalla(nuevo)
  }

  // Reinicia la calculadora
  const limpiar = () => {
    setPantalla('0')
    setAnterior(null)
    setOperacion(null)
    setEsperaSiguiente(false)
  }

  // Enruta cada tecla a su función correspondiente
  const manejarTecla = (tecla) => {
    if (tecla === 'C') return limpiar()
    if (tecla === '=') return presionarIgual()
    if (tecla === '+/-') return presionarMasMenos()
    if (['+', '-', '*', '/', '%'].includes(tecla)) return presionarOperador(tecla)
    presionarNumero(tecla)
  }

  return { display, manejarTecla }
}

export default useCalculadora
