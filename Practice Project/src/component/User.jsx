import React from 'react'

const User = () => {
  return (
    <div>
      <h2> {props.name} </h2>
      <p> {props.age} </p>
      <p> {props.isMarried} </p>
      <p> {props.hobby} </p>
    </div>
  )
}

export default User;
