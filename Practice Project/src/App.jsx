import React from 'react'

const App = () => {
  return (
    <div>
      <User name="Mianur" age="20" isMarried="false" hobby="not reading, sleeping, money"  />
      <User name="Mianur" age="20" isMarried="false" hobby="not reading, sleeping, money" />
    </div>
  )
}

const User = (props) => {
  return(
    <div>
      <h2> {props.name} </h2>
      <p> {props.age} </p>
      <p> {props.isMarried} </p>
      <p> {hobby} </p>
    </div>
  )
}


export default App