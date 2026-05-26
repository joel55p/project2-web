# Calculadora Web

Calculadora funcional construida con React y Vite. Soporta suma, resta,
multiplicación, división, módulo y cambio de signo. Incluye validaciones
de límite de 9 caracteres y manejo de errores.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/joel55p/project2-web.git
cd project2-web/calculadora-react
npm install --legacy-peer-deps
```

## Correr la aplicación

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador.

## Correr los tests

```bash
npm test
```

Para correr los tests una sola vez sin modo watch:

```bash
npm test -- --run
```

## Correr Storybook

```bash
npm run storybook
```

Abre http://localhost:6006 en tu navegador. Incluye historias para los
componentes Boton, Display y Teclado con sus distintos estados y variantes.

## Correr lint

```bash
npm run lint
```

El proyecto usa ESLint con JavaScript Standard Style. Reglas personalizadas:
- Prohibicion de punto y coma
- Maximo 120 caracteres por linea

## Funcionalidades

- Suma, resta, multiplicacion y division
- Modulo (%)
- Cambio de signo (+/-)
- Punto decimal
- Limite de 9 caracteres en pantalla
- Muestra ERROR para resultados negativos o mayores a 999999999
- Division por cero muestra ERROR

## Tecnologías

- React 19
- Vite
- Vitest + Testing Library
- Storybook
- ESLint con JavaScript Standard Style