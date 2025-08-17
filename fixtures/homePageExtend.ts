// fixtures/test-base.ts
import { test as base } from '@playwright/test';
import { ToDoPage } from '../pages/ToDoPage';

// Typ rozszerzonego fixture
type MyFixtures = {
  homePage: ToDoPage;
};

// Rozszerzamy test o własny fixture
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new ToDoPage(page);
    await use(homePage); 
  },
});

export { expect } from '@playwright/test';