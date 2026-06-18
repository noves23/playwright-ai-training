
class Locators {
  get editButton() {
    return page.getByRole('button', { name: 'Edit' }).first();
  }
}

export default new Locators();
