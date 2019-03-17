# useToggleMany react hook

Install it with yarn:

```
not ready yet
```

Or with npm:

```
not ready yet
```

## Demos

Will be added

## Simple example

```javascript
import React, { useState } from 'react';
import { useToggleMany } from 'use-toggle-many';

function SomeComponent() {
  const [handleActive, isActive, active] = useToggleMany([0, 1, 2, 6, 7])

  return (
    <div>
      <ul>
        {"InLoveWithHooks".split("").map((char, index) => (
          <li key={index} style={{ color: isActive(index) ? "red" : "blue" }}>
            <input
              type="checkbox"
              onChange={() => handleActive(index)}
              checked={isActive(index)}
            />
            {char}: {isActive(index) ? "on" : "off"} - toggle by index ({index})
          </li>
        ))}
      </ul>

      <p>Currently active: {active.length}<p/>
    </div>
  )
}
```
