import { paste } from '@testing-library/user-event/dist/paste'
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 
 * @param {*} props 
 * @returns 
 */
const Hello=(props)=>{ //Tambien podemos desestructura de la siguiente maner la función  const Hello = ({ name, age }) => {
  
  /**Desestructuracion de los props al recibirlos */
   const{ name, age}= props  //se desestructura los props en un solo arreglos
   const bornYear=() => new Date().getFullYear()-age //Desestructuracion de la funcion bornYear()
 
  return (
     <div>
       <p>Hello {name}, you are {age} years old</p>
       <p>So you were probably born in {bornYear()}</p>
     </div>
  )   
}

const App = () => {
   const name ='Peter'
   const age =10

  return (
    <div>  
      <h1>Greetings</h1>
      < Hello name={"May"} age={26+10} />
      <Hello name={name} age={age}/>
    </div>
  )
}





ReactDOM.render(<App />, document.getElementById('root'))
