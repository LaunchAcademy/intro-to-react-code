import React from "react";
import ReactDOM from "react-dom";

import Message from "./components/Message"

import "./app.scss"

// const magicNumber = 8

// let resultString;

// if (magicNumber > 5) {
//   resultString = "I am text from the if-statement!"
// } else {
//   resultString = "I am text from the else-statement"
// }

// // synthetic events and event listener

// const alertFunction = () => {
//   alert("Woooah, something happened, I was clicked!")
//   // return alert(resultString)
// }


// const divElement = 
//   <div onClick={alertFunction}>
//     <h1>
//       {resultString}
//     </h1>
//   </div>


// let messageComponent = <Message />


// const reactMessage = <h1>Goodbye static text, dynamic React is here!</h1>

ReactDOM.render(
  <Message />,
  document.getElementById('app')
)
