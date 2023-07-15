## Iterable vs Iterator

#### Iterable

Iterable are object that can be iterated over. It implements or defines [Symbol.iterator].

```typescript
const myIterable = {
  [symbol.iterator]() {
    // ...
  },
};
```

#### Iterator

Iterator on the other hand, implements [next()] object that calls the next element in an interable object.

```typescript
const myIterable = {
  next() {
    // ...
  },
};
```

Iterator and Generator provides a mechanism for customizing the behaviour of for..of loops.

#### Iterator methods

Iterator has three(3) methods

- **next:**
  returns the next element in the sequence

- **done:**

  - false: if next function produces result
  - true: if the next function produces no result

- **value:**
  the value in the sequence or iterable object, if no value is present, it returns {done: true}

#### Iterable Iterator

We can also make and iterator iterable by making it implements [symbol.iterator] that returns this. Such object is called iterable iterator

```typescript
const myIterable = {
  next() {
    //   ...
  },

  [symbol.iterator]() {
    return this;
  },
};
```
