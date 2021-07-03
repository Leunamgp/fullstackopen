import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (<h1>{props.course}</h1>)
}


const Total = (props) => {
  let sum = 0
  props.total.map(element => sum += element.exercises);
  return (<p>{sum}</p>)
}

const Part = (props)=>{
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

 const Content = (props) => {
   const content = props.content;

   const data = content.map(element => {
    return (
    <Part part={element.name} exercises={element.exercises} />
    )
  })  
  return data
 }

 const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
     <Header course={course.name}/>
     <Content content={course.parts}/>
     <Total total={course.parts}/>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'))

