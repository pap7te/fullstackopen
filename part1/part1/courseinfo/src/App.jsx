const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}
const App = () => {
  const course = [
    {name:'Half Stack application development',
      part1 : 'Fundamentals of React',
      exercises1 : 10,
      part2 : 'Using props to pass data',
      exercises2 : 7,
      part3 : 'State of a component',
      exercises3 : 14
    }
  ]
  console.log(course)
  return (
    <div>
      <Header course={course[0].name} />
      <Content part={course[0].part1} exercise={course[0].exercises1} />
      <Content part={course[0].part2} exercise={course[0].exercises2} />
      <Content part={course[0].part3} exercise={course[0].exercises3} />
      <Total exercises1={course[0].exercises1} exercises2={course[0].exercises2} exercises3={course[0].exercises3} />
    </div>
  )
}

export default App