<img src="./public/image.png" alt="Smooth corners" width="600">

# Use smooth corners in your React application

Leverage the CSS Houdini API and the wopian/smooth-corners npm package to create a rounded corner look for your React elements

`npm install react-smooth-corners --save`

---

## Demo

### https://react-smooth-corners.netlify.app/

---
## Plug & Play

Import the SmoothCorners component, specify the corners value and let the magic do everything for you ✨
Everything works out of the box and there's no additional setup needed.

```jsx
import { SmoothCorners } from 'react-smooth-corners'
  
const Button = () => {
  return (
    <SmoothCorners
      corners="12, 3"
      borderRadius="12px"
      style={ padding: '10px 30px', background: 'blue' }
      as="button"
    >
      Click to view
    </SmoothCorners>
  )
}
```

Add a fallback border-radius value for browsers that don't support mask-image.