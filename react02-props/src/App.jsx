import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>

      <Card user='Suhail' age={23} image='https://images.unsplash.com/photo-1691443297137-68818fe7bce9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

      <Card user='Kushagra' age={23} image='https://images.unsplash.com/photo-1769921824660-648d69d2642a?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

    </div>
  )
}

//user, age, image are props(properties) which can be passed to the components.

export default App