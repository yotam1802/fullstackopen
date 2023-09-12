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
    return <h2>{header}</h2>
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

export default Course