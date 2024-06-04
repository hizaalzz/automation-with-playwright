import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tokopedia.com/');
  await page.getByPlaceholder('Cari di Tokopedia').click();
  await page.getByPlaceholder('Cari di Tokopedia').fill('iphone 15 digimap');
  await page.getByTestId('lnkHeaderAutocomItem').click();
  await page.getByTestId('CPMProductItem').nth(1).click();
});