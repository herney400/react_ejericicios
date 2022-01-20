import { paste } from '@testing-library/user-event/dist/paste'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
/**A continuación, agreguemos estado al componente App de nuestra aplicación 
 * con la ayuda del hook de estado de React. Cambiaremos la aplicación a lo siguiente:*
*/
const App = () => {
 
  const [counter , setCounter]=useState(0)

  const handleClick=()=>{
    console.log("Clicked")
  }

/*  setTimeout(
    ()=>setCounter(counter + 1), 
    1000
  )*/

 
  return (
    <div>
    <div> {counter}</div>
    <button onClick={()=>setCounter(counter+1)}>
      plus

    </button>
    <button onClick={()=>setCounter(0)} >
      Zero
    </button>
    </div>
    
  )
} 
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
/*
let counter =1

const refresh =() =>{
  ReactDOM.render(<App counter={counter}/>, 
  document.getElementById('root'))
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000) */

