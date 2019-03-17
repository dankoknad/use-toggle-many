export function useToggleMany(
  arr?: (number | string)[]
): [
  (idOrIndex: string | number) => void,
  (idOrIndex: string | number) => boolean,
  Array<string | number>
];