import { test as base } from '@playwright/test';

// Tworzymy fixture, który pozwoli na mockowanie API w testach
export const test = base.extend<{
  mockApi: (url: string, response: any) => void
}>({
  mockApi: async ({ page }, use) => {
    await use((url: string, response: any) => {
      page.route(url, route => route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(response)
      }));
    });
  }
});