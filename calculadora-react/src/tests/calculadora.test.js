import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import useCalculadora from '../hooks/useCalculadora'

describe('useCalculadora', () => {
  it('muestra 0 al inicio', () => {
    const { result } = renderHook(() => useCalculadora())
    expect(result.current.display).toBe('0')
  })

  it('muestra el número presionado', () => {
    const { result } = renderHook(() => useCalculadora())
    act(() => result.current.manejarTecla('5'))
    expect(result.current.display).toBe('5')
  })

  it('concatena números correctamente', () => {
    const { result } = renderHook(() => useCalculadora())
    act(() => result.current.manejarTecla('1'))
    act(() => result.current.manejarTecla('2'))
    act(() => result.current.manejarTecla('3'))
    expect(result.current.display).toBe('123')
  })

  it('suma dos números correctamente', () => {
    const { result } = renderHook(() => useCalculadora())
    act(() => result.current.manejarTecla('5'))
    act(() => result.current.manejarTecla('+'))
    act(() => result.current.manejarTecla('3'))
    act(() => result.current.manejarTecla('='))
    expect(result.current.display).toBe('8')
  })

  it('resta dos números correctamente', () => {
    const { result } = renderHook(() => useCalculadora())
    act(() => result.current.manejarTecla('9'))
    act(() => result.current.manejarTecla('-'))
    act(() => result.current.manejarTecla('3'))
    act(() => result.current.manejarTecla('='))
    expect(result.current.display).toBe('6')
  })

  it('multiplica dos números correctamente', () => {
    const { result } = renderHook(() => useCalculadora())
    act(() => result.current.manejarTecla('4'))
    act(() => result.current.manejarTecla('*'))
    act(() => result.current.manejarTecla('3'))
    act(() => result.current.manejarTecla('='))
    expect(result.current.display).toBe('12')
  })

  it('muestra ERROR en resta con resultado negativo', () => {
    const { result } = renderHook(() => useCalculadora())
    act(() => result.current.manejarTecla('3'))
    act(() => result.current.manejarTecla('-'))
    act(() => result.current.manejarTecla('9'))
    act(() => result.current.manejarTecla('='))
    expect(result.current.display).toBe('ERROR')
  })

  it('muestra ERROR si resultado supera 999999999', () => {
    const { result } = renderHook(() => useCalculadora())
    '999999999'.split('').forEach(n => act(() => result.current.manejarTecla(n)))
    act(() => result.current.manejarTecla('+'))
    act(() => result.current.manejarTecla('1'))
    act(() => result.current.manejarTecla('='))
    expect(result.current.display).toBe('ERROR')
  })

  it('limpia la pantalla al presionar C', () => {
    const { result } = renderHook(() => useCalculadora())
    act(() => result.current.manejarTecla('5'))
    act(() => result.current.manejarTecla('C'))
    expect(result.current.display).toBe('0')
  })

  it('ignora dígitos después del noveno carácter', () => {
    const { result } = renderHook(() => useCalculadora())
    '123456789'.split('').forEach(n => act(() => result.current.manejarTecla(n)))
    act(() => result.current.manejarTecla('0'))
    expect(result.current.display).toBe('123456789')
  })

  it('no agrega segundo punto decimal', () => {
    const { result } = renderHook(() => useCalculadora())
    act(() => result.current.manejarTecla('1'))
    act(() => result.current.manejarTecla('.'))
    act(() => result.current.manejarTecla('.'))
    expect(result.current.display).toBe('1.')
  })
})
