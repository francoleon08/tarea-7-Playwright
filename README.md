# Playwright Login Testing

Este proyecto corresponde a la Tarea 8 de la materia Verificación y Validación de Software.

El mismo contiene un conjunto de pruebas automatizadas para verificar el funcionamiento del formulario de inicio de sesión en la página web de ejemplo proporcionada en [https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html](https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html). Las pruebas están implementadas utilizando la biblioteca [Playwright](https://playwright.dev/), que permite la automatización de pruebas en navegadores web.

## Requisitos

Para ejecutar las pruebas, necesitas:

- Node.js instalado (versión 12 o superior).
- Playwright instalado en el proyecto.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias necesarias ejecutando:

   ```bash
   npm install
   ```

3. Instala los navegadores compatibles para Playwright:

   ```bash
   npx playwright install
   ```

## Ejecución de las Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npx playwright test
```

Esto ejecutará todos los casos de prueba definidos en el archivo de pruebas.

## Descripción de las Pruebas

El archivo de pruebas contiene varios casos para verificar el comportamiento del formulario de inicio de sesión bajo diferentes escenarios:

1. **Inicio de sesión exitoso**
   - Verifica que el usuario puede iniciar sesión correctamente con credenciales válidas (`username: dumbridge`, `password: tomriddle`).
   - Espera que la URL cambie a la página de inicio exitosa (`inicio.html`).

2. **Inicio de sesión fallido con contraseña incorrecta**
   - Verifica que el intento de inicio de sesión con una contraseña incorrecta no redirige al usuario.
   - La URL debe permanecer en la página de inicio de sesión.

3. **Inicio de sesión fallido sin contraseña**
   - Verifica que al intentar iniciar sesión sin proporcionar una contraseña, se muestra un mensaje de error indicando que el campo de contraseña no puede estar vacío.
   - La URL debe permanecer en la página de inicio de sesión.

4. **Inicio de sesión con usuario incorrecto**
   - Verifica que al proporcionar un nombre de usuario que no existe, se muestra un mensaje de error apropiado.
   - La URL debe permanecer en la página de inicio de sesión.

5. **Inicio de sesión sin nombre de usuario**
   - Verifica que si el usuario intenta iniciar sesión sin ingresar un nombre de usuario, se muestra un mensaje de error.
   - La URL debe permanecer en la página de inicio de sesión.

6. **Inicio de sesión con campos vacíos**
   - Verifica que si no se completan los campos de usuario y contraseña, se muestra un mensaje de error solicitando ingresar un nombre de usuario.
   - La URL debe permanecer en la página de inicio de sesión.

## Configuración Especial para Webkit

En las pruebas se ha añadido una espera (`waitForTimeout`) para Webkit debido a posibles diferencias de comportamiento entre navegadores.

## Recursos

- [Documentación de Playwright](https://playwright.dev/docs/intro)
- [API de Playwright](https://playwright.dev/docs/api/class-playwright)
