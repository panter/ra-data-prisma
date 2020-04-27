declare namespace jest {
  interface Matchers<R> {
    toEqualGraphql(value: string | string[]): object;
  }
}
