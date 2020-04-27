import { print, ASTNode } from "graphql";
import diff from "jest-diff";
import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

// replace whitespace
// also ignore commas (not supe precise but fixes some edge cases with comparing)
const replaceWhitespace = (str: string) =>
  str ? str.replace(/[\s,]+/g, " ").trim() : str;

const removeWhitespaceBeforeBrackets = (str: string) =>
  str ? str.replace(/\(\s/g, "(").replace(/\s\)/g, ")") : null;
const name = `toEqualGraphql`;

const cleanString = (str: string) =>
  removeWhitespaceBeforeBrackets(replaceWhitespace(str));

const toEqualGraphql = (
  received: ASTNode | ASTNode[],
  expected: string | string[],
) => {
  const receivedArray = Array.isArray(received) ? received : [received];
  const expectedArray = Array.isArray(expected) ? expected : [expected];
  const expectedArrayCompressed = expectedArray.map(cleanString);
  const receivedPrinted = receivedArray.map((node) => cleanString(print(node)));
  const pass = receivedPrinted.every(
    (s, index) => s === expectedArrayCompressed[index],
  );

  const message = pass
    ? () =>
        `${matcherHint(`.not.${name}`)}\n\n` +
        `  ${printExpected(expectedArrayCompressed)}\n` +
        `Received:\n` +
        `  ${printReceived(receivedPrinted)}`
    : () => {
        const diffString = diff(expectedArrayCompressed, receivedPrinted);
        return (
          `${matcherHint(`.${name}`)}\n\n` +
          `Expected value to equal:\n` +
          `  ${printExpected(expectedArrayCompressed)}\n` +
          `Received:\n` +
          `  ${printReceived(receivedPrinted)}${
            diffString ? `\n\nDifference:\n\n${diffString}` : ``
          }`
        );
      };
  return {
    actual: received,
    expected,
    message,
    name,
    pass,
  };
};

expect.extend({
  toEqualGraphql,
});
