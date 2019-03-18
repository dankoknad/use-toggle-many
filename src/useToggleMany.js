import { useState } from 'react';

export default function useToggleMany(arr) {
  const [active, setActive] = useState(arr || []);

  const handleActive = (idOrIndex) =>
    setActive((prevState) =>
      isActive(idOrIndex)
        ? prevState.filter((item) => item !== idOrIndex)
        : [...prevState, idOrIndex]
    );

  const isActive = (idOrIndex) => active.indexOf(idOrIndex) > -1;

  const handleMany = (arr) => setActive(arr);

  return [handleActive, isActive, active, handleMany];
}
