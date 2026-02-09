import { test, expect } from '@playwright/test';

test.describe('Settings - Legal and Data (Keyboard)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://app.staging.fastgamernetwork.com/settings');
  });

  test('should reach Legal and Data tab using arrows', async ({ page }) => {
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Enter');

    await expect(page.getByText('LEGAL AND DATA')).toBeVisible();
  });

  test('should toggle Accept Data using Enter key', async ({ page }) => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    const checkbox = page.getByRole('checkbox', { name: /accept data/i });
    await expect(checkbox).toBeChecked();
  });

  test('should un-toggle Accept Data using Enter key', async ({ page }) => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');

    const checkbox = page.getByRole('checkbox', { name: /accept data/i });
    await expect(checkbox).not.toBeChecked();
  });

    test('should toggle Other Data using Enter key', async ({ page }) => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    const googleAnalytics = page.getByRole('checkbox', { name: /google analytics/i });
    const videoAnalytics = page.getByRole('checkbox', { name: /video analytics/i });
    const otherdata = page.getByRole('checkbox', { name: /other data/i });

    await expect(googleAnalytics).toBeChecked();
    await expect(videoAnalytics).toBeChecked();
    await expect(otherdata).toBeChecked();
  });

    test('should un-toggle Other Data using Enter key', async ({ page }) => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');

    const googleAnalytics = page.getByRole('checkbox', { name: /google analytics/i });
    const videoAnalytics = page.getByRole('checkbox', { name: /video analytics/i });
    const otherdata = page.getByRole('checkbox', { name: /other data/i });

    await expect(googleAnalytics).not.toBeChecked();
    await expect(videoAnalytics).not.toBeChecked();
    await expect(otherdata).not.toBeChecked();
  });

  test('should open Sony Pictures link in new window', async ({ page, context }) => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
    ]);

    await expect(newPage).toHaveURL(/sony/i);
  });

    test('should open Sony Group Companies link in new window', async ({ page, context }) => {
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
    ]);

    await expect(newPage).toHaveURL(/sony/i);
  });

});
