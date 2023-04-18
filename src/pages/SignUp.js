import React from 'react'

const SignUp = () => {

    let getOrder = async() => {
        let response = await fetch('/api/orders/')
        let data = await response.json()
        console.log(data)
    }
  return (
    <div>
        <button onClick={getOrder}>SignUp</button>
    </div>
  )
}

export default SignUp