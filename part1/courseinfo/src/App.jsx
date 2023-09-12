const Course = ({course}) => {
  return (
    <div>
    <Header header={course.name}/>
    <Content content={course.parts}/>
    <Total content={course.parts}/>
    </div>
  )
}


const Header = ({header}) => {
  return <h1>{header}</h1>
}

const Part = ({name, exercises}) => {
  return <p>{name} {exercises}</p>
}

const Content = ({content}) => {
  return (
    <div>
      {content.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Total = ({content}) => {
  return (
    <p>
      <strong>
      total of {content.reduce((sum, part) => sum + part.exercises, 0)} exercises
      </strong>
    </p>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course key={course.id} course={course} />
}

export default App
