import { useState } from 'react';

export function useToggleMany(arr) {
  const [active, setActive] = useState(arr || []);

  const handleActive = (idOrIndex) =>
    setActive((prevState) =>
      isActive(idOrIndex)
        ? prevState.filter((item) => item !== idOrIndex)
        : [...prevState, idOrIndex]
    );

  const isActive = (idOrIndex) => active.indexOf(idOrIndex) > -1;

  return [handleActive, isActive, active];
}
