# nl2br - Newline to Break React Component

The `nl2br` function is a utility that converts newline characters in a string to `<br />` elements, suitable for rendering in React applications. This function can handle both strings and other types of inputs, returning the input unchanged if it is not a string.

## Installation

You can install the `nl2br` function from this repository by including it in your project.

```bash
npm install react-br
yarn add react-br
```

# Usage
```typescript
import nl2br from 'react-br';

const textWithBreaks = nl2br("This is a test.\nThis is only a test.");
```

### JSX 
```typescript jsx
import nl2br from 'react-br';

function MyComponent() {
  const text = "This is a test.\nThis is only a test.";
  
  return (
    <div>
      {nl2br(text)}
    </div>
  );
}
```


# Function Signature
```typescript
function nl2br(input: string): (string | ReactElement)[];
function nl2br<T>(input: T): T;
```

`nl2br` will check if the input is a string. If it is, it will split the string by newline characters and insert `<br />` elements. If the input is not a string, it will return the input unchanged.

# Typescript Support
`nl2br` is written in TypeScript, providing type definitions out of the box.