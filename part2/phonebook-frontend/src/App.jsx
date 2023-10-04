import {useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    {name: "Arto Hellas", number: "040-1234567"}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === personObject.name)) {
      alert(`${personObject.name} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = filter === '' ?
    persons :
    persons.filter(person => person.name.toUpperCase().startsWith(filter.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} handleFormSubmit={handleFormSubmit}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App