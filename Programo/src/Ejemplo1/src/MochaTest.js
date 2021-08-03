class MochaExample {
  constructor() {
    this.exampleList = [];
  }

  list() {
    return [...this.exampleList];
  }

  add(title) {
    let item = {
      title: title,
      completed: false,
    };

    this.exampleList.push(item);
  }

  complete(title) {
    let found = false;
    this.exampleList.forEach((item) => {
      if (item.title === title) {
        item.completed = true;
        found = true;
        return;
      }
    });

    if (!found) {
      throw new Error(`No item was found with the title: "${title}"`);
    }
  }
}

module.exports = MochaExample;
