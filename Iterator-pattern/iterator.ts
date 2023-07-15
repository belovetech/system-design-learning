const iterableObject_ = {
  values: [1, 2, 3, 4],

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: (): any => {
        if (index < this.values.length) {
          return { value: this.values[index++], done: false };
        }
        return { done: true };
      },
    };
  },
};

const iteratorObject = iterableObject_[Symbol.iterator]();
console.log(iteratorObject.next());
console.log(iteratorObject.next());
console.log(iteratorObject.next());
console.log(iteratorObject.next());
console.log(iteratorObject.next());
