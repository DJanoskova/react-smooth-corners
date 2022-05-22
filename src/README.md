# Use smooth corners in your React application

Leverage the CSS Houdini API and the wopian/smooth-corners npm package to create a rounded corner look for your React elements

`npm install react-smooth-corners --save`

---
## Plug & Play

Import the SmoothCorners component, specify the corners value and let the magic do everything for you ✨

```jsx
import { SmoothCorners } from 'react-smooth-corners'
  
const Button = () => {
  return (
    <SmoothCorners
      corners="12, 3"
      style={ padding: '10px 30px', background: 'blue' }
      as="button"
    >
      Click to view
    </SmoothCorners>
  )
}
```