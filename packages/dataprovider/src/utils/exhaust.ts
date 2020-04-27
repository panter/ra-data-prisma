export default function exhaust(
  value: never,
  message = `No such case in exhaustive switch: ${value}`,
) {
  throw new Error(message);
}
