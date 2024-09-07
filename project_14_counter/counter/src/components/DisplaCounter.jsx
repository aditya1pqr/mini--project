import React from 'react'
import { useSelector } from 'react-redux'

function DisplaCounter() {

  const counter = useSelector(store  => store.counter)
  return (
    <p className="lead mb-4">Counter current Value: {counter}</p>
  )
}

export default DisplaCounter
