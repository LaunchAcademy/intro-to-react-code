import React from "react"

const Message = (props) => {
  const magicNumber = 1

  let resultString;

  if (magicNumber > 5) {
    resultString = "I am text from the if-statement!"
  } else {
    resultString = "HEY! I am text from the else-statement"
  }

  let alertFunction = () => {
    // return alert("Woooah, something happened, I was clicked!")
    alert(resultString)
  }

  return(
    <div className="home_page" onClick={alertFunction}>
      <h1>
        {resultString}
      </h1>
    </div>
  )
}

export default Message;
