import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 
// function NewApp (){
//   return (
//     <h1>Changed through main.js </h1>
//   )
// }
// export default NewApp

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click Me to Visit Google'
// };

const reactElement = React.createElement(
  'h1',
  'PARTH'
)

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/* <NewApp/> */}
  // </React.StrictMode>,
  // anotherElement
reactElement  
)

