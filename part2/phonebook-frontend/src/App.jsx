import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phoneService from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    phoneService.getAll()
      .then(people => setPersons(people))
  }, [])

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
      if (confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) {
        const existingPerson = persons.find(person => person.name === personObject.name)

        phoneService
          .update(existingPerson.id, personObject)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : updatedPerson))
            setNewName('')
            setNewNumber('')
            setMessage(`Changed ${updatedPerson.name}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch(error => {
            setPersons(persons.filter(person => person.id !== existingPerson.id))
            setNewName('')
            setNewNumber('')
            setMessage(`Information of ${existingPerson.name} has already been removed from server`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
      return
    }

    phoneService.create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }

  const handleDelete = (personToDelete) => () => {
    if (confirm(`Delete ${personToDelete.name} ?`)) {
      phoneService
      .remove(personToDelete.id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== personToDelete.id))
      })
    }
  }

  const filteredPersons = filter === '' ?
    persons :
    persons.filter(person => person.name.toUpperCase().startsWith(filter.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} handleFormSubmit={handleFormSubmit}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App