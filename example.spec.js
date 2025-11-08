const { test, expect } = require('@playwright/test');

test('server ping route', async ({ request }) => {
  const res = await request.get('/ping');
  expect(res.ok()).toBeTruthy();
  const body = await res.json();
  expect(body.pong).toBe(true);
});
