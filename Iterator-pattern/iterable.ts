const iterableObject = {
  values: [1, 2, 3, 4, 5],

  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        if (index < this.values.length) {
          return { value: this.values[index++], done: false };
        }
        return { done: true };
      },
    };
  },
};

for (const item of iterableObject) {
  console.log(item);
}
