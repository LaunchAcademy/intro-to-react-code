import React from "react"

const MagicElement = () => {
  let resultString;

  const magicNumber = 4

  if (5 > magicNumber) {
    resultString = "Totally wicked"
  } else {
    resultString = "yo dawg, did you change the value of the magic number? Dude, not cool. "
  }

  let alertFunction = () => {
    return alert("Oooh that tickles")
  }

  return(
    <div onClick={alertFunction}  >
      <p>
        { resultString }
      </p>
    </div>
  )
}

export default MagicElement
