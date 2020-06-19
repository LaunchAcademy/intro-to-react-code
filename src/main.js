import './app.scss';

import React from "react"

import ReactDOM from "react-dom"

// import MagicElement from "./../MagicElement"

let resultString;

const magicNumber = 4

if (5 > magicNumber) {
  resultString = "Totally wicked"
} else {
  resultString = "yo dawg, did you change the value of the magic number? Dude, not cool. "
}

// synthetic events and event listener

let alertFunction = () => {
  return alert("Oooh that tickles")
}

let divElement =
  <div onClick={alertFunction}  >
    <p>
      { resultString }
    </p>
  </div>


ReactDOM.render(
  divElement,
  document.getElementById('app')
)
