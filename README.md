# useToggleMany - custom react hook

## Install:

With yarn:

```bash
yarn add use-toggle-many -S
```

With npm:

```bash
npm i use-toggle-many -S
```

## Api:

```javascript
const [handleActive, isActive, active, handleMany] = useToggleMany(arr)
```

handleActive:  `(idOrIndex: string | number) => void`

isActive: `(idOrIndex: string | number) => boolean`

active: `Array<string | number>`

handleMany: `(arr: (string | number)[]) => void`

arr?: `(number | string)[]`


## Demos

Basic usage: [demo](https://codesandbox.io/s/xow466o03o)

With initiall values set and optionall variable `active` used: [demo](https://codesandbox.io/s/x74q4wqqvo)

With "clear all" and "update many at once" buttons: [demo](https://codesandbox.io/s/m94q1q9x3j)

## Examples

Basic:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { useToggleMany } from 'use-toggle-many'

function SomeComponent({ fruits }) {
  const [handleActive, isActive] = useToggleMany()

  return (
    <div>
      <ul>
        {fruits.map(fruit => (
          <li
            key={fruit}
            style={{ color: isActive(fruit) ? "#6ada55" : "#222" }}
          >
            <input
              type="checkbox"
              onChange={() => handleActive(fruit)}
              checked={isActive(fruit)}
            />
            {fruit}: {isActive(fruit) ? "on" : "off"} - toggle by name ({fruit})
          </li>
        ))}
      </ul>
    </div>
  )
}

```

With `initiallState` and `active` variable used:

```javascript
import React, { useState } from 'react'
import { useToggleMany } from 'use-toggle-many'

function SomeComponent() {
  const [handleActive, isActive, active] = useToggleMany([0, 2, 4, 14])

  return (
    <div>
      <ul>
        {"INLOVEWITHHOOKS".split("").map((char, index) => (
          <li key={index} style={{ color: isActive(index) ? "#6ada55" : "#222" }}>
            <input
              type="checkbox"
              onChange={() => handleActive(index)}
              checked={isActive(index)}
            />
            {char}: {isActive(index) ? "on" : "off"} - index ({index})
          </li>
        ))}
      </ul>

      <p>Currently active: {active.length}</p>
    </div>
  )
}

```

With "clear all" and "update many at once" buttons:

```javascript
function SomeComponent({ fruits }) {
  const [handleActive, isActive, active, handleMany] = useToggleMany();

  return (
    <div>
      <ul>
        {fruits.map(fruit => (
          <li
            key={fruit}
            style={{ color: isActive(fruit) ? "#6ada55" : "#222" }}
          >
            <input
              type="checkbox"
              onChange={() => handleActive(fruit)}
              checked={isActive(fruit)}
            />
            {fruit}: {isActive(fruit) ? "on" : "off"} - toggle by name ({fruit})
          </li>
        ))}
      </ul>
      <button onClick={() => handleMany([])}>Clear all</button>
      <button onClick={() => handleMany(["Grapefruit", "Blueberries"])}>
        Set Grapefruit & Blueberries
      </button>
    </div>
  );
}
```
