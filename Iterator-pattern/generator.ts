function* makeSimpleGenerator(array: Array<number | string>) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}
const gen = makeSimpleGenerator([1, 2, 3]);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
