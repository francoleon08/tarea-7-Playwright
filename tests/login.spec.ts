import { test, expect } from '@playwright/test';

test('Test para verificar el inicio de sesión exitoso', async ({ page, browserName }) => {
  await page.goto('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');

  await page.fill('#username', 'dumbridge');
  await page.fill('#password', 'tomriddle');
  const button = page.locator('button:has-text("Ingresar")');

  if (browserName === 'webkit') {
    await page.waitForTimeout(1000);
  }
  await button.click({ force: browserName === 'webkit' });
  
  const currentUrl = page.url();
  expect(currentUrl).toBe('https://cs.uns.edu.ar/~mll/temp/testing/examen/inicio.html');
});

test('Test para verificar el inicio de sesión fallido con contraseña incorrecta', async ({ page, browserName }) => {
  await page.goto('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');

  await page.fill('#username', 'dumbridge');
  await page.fill('#password', '1234');  
  const button = page.locator('button:has-text("Ingresar")');

  if (browserName === 'webkit') {
    await page.waitForTimeout(1000);
  }
  await button.click({ force: browserName === 'webkit' });
  
  const currentUrl = page.url();
  expect(currentUrl).toBe('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');
});

test('Test para verificar el inicio de sesión fallido sin contraseña', async ({ page, browserName }) => {
  await page.goto('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');

  await page.fill('#username', 'dumbridge');  
  const button = page.locator('button:has-text("Ingresar")');

  if (browserName === 'webkit') {
    await page.waitForTimeout(1000);
  }
  await button.click({ force: browserName === 'webkit' });
  
  const message = await page.innerText('#estado');
  const currentUrl = page.url();
  expect(message).toBe('Atención: El password no puede estar vació');
  expect(currentUrl).toBe('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');
});

test('Test para verificar el inicio con un usuario incorrecto', async ({ page, browserName }) => {
  await page.goto('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');

  await page.fill('#username', '123');
  await page.fill('#password', 'tomriddle');  
  const button = page.locator('button:has-text("Ingresar")');

  if (browserName === 'webkit') {
    await page.waitForTimeout(1000);
  }
  await button.click({ force: browserName === 'webkit' });

  const message = await page.innerText('#estado');
  const currentUrl = page.url();
  expect(message).toBe('Atención: El usuario ingresado no existe');
  expect(currentUrl).toBe('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');
});

test('Test para verificar el inicio sin ingresar un usuario', async ({ page, browserName }) => {
  await page.goto('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');

  await page.fill('#password', 'tomriddle');  
  const button = page.locator('button:has-text("Ingresar")');

  if (browserName === 'webkit') {
    await page.waitForTimeout(1000);
  }
  await button.click({ force: browserName === 'webkit' });
  
  const message = await page.innerText('#estado');
  const currentUrl = page.url();
  expect(message).toBe('Atención: Debe ingresar un nombre de usuario');
  expect(currentUrl).toBe('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');
});

test('Test para verificar el inicio con campos vacíos', async ({ page, browserName }) => {
  await page.goto('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');

  const button = page.locator('button:has-text("Ingresar")');

  if (browserName === 'webkit') {
    await page.waitForTimeout(1000);
  }
  await button.click({ force: browserName === 'webkit' });
  
  const message = await page.innerText('#estado');
  const currentUrl = page.url();
  expect(message).toBe('Atención: Debe ingresar un nombre de usuario');
  expect(currentUrl).toBe('https://cs.uns.edu.ar/~mll/temp/testing/examen/login.html');
});
