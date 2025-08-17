import { Page, Locator } from '@playwright/test';

export class ToDoPage {
  readonly page: Page;
  readonly toDoInput: Locator;
//  readonly newTodo: Locator;


  constructor(page: Page) {
    this.page = page;
    this.toDoInput = page.getByPlaceholder('What needs to be done?');
  }

  // Elementy strony --zmien na jakis inny. 
  get toDoInputg() {
    return this.page.getByPlaceholder('What needs to be done?');
  }

  // Akcje na stronie
  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async clickExampleButton() {
    await this.toDoInput.click();
  }

async createDefaultTodos(items: string[]){
    for(const item of items)
    {
        await this.toDoInput.fill(item);
        await this.toDoInput.press("Enter");
    }
}


async checkNumberOfTodosInLocalStorage(expected: number)
{
    return await this.page.waitForFunction(e => {
     return   JSON.parse(localStorage['react-todos']).length===e}, expected);
}

}