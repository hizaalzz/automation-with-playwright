import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByLabel('Phone number, username, or').click();
  await page.getByLabel('Phone number, username, or').fill('yogayunand4');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('bakwanrebus01!');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.getByRole('link', { name: 'Search Search' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('syahrini');
  await page.getByRole('link', { name: 'princessyahrini\'s profile picture princessyahrini Verified SYAHRINI • 44.9M' }).click();
  await page.getByRole('link', { name: '• ~ 1st June 2024 ~' }).click();
  await page.locator('section').filter({ hasText: 'LikeCommentShare PostShare' }).getByRole('button').first().click();
});