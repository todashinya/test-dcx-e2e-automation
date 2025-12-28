import { test, expect } from '@playwright/test';

test('ダウンロードセンタページへ遷移できること', async ({ page }) => {
  // OMRONダウンロードセンタページへ遷移
  await page.goto('/download/');

  await page.locator('#keyword').fill('2JCIE-BL');

  await page.locator('#button-search').click()

});

