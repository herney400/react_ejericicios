import { paste } from '@testing-library/user-event/dist/paste'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log(parts[0].exercises);
  return (
    <div>  
      <Header nombre={course}/>
      <Content parts={parts}/>
      <Total  total={parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
 
    </div>
  )
}

/**Componenter Header  */

const Header=(props)=>{
  console.log(props)
  return (
     <div>
       <p>El nombre de curso es: {props.nombre} </p>
     </div>
  )  
  

}
/**Componente Conntent */
const Content=(props)=>{
  
  console.log(props)
 return (
    <div>
  
       <Part  nombre={props.parts[0].name} exercise={props.parts[0].exercises}/> 
       <Part  nombre={props.parts[1].name} exercise={props.parts[1].exercises}/> 
       <Part  nombre={props.parts[2].name} exercise={props.parts[2].exercises}/> 

        
     </div>
  )

}
/**componente Total */

const Total =(props)=>{

  return(
    <div>
      <p>Total ejercicios: {props.total} </p>
    </div>
  )

}

/**Componente Part */

const Part =(props)=>{

  return (
    <div>
      <p>Nombre del ejercicio: {props.nombre}, Número de ejercicios :{props.exercise} </p>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
