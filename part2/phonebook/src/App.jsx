import { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Numbers from './Numbers'
import peopleService from './services/people'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState({message: '', type: ''})

  useEffect(() => {
    peopleService.getAll()
      .then(initialPeople => setPersons(initialPeople))
  }, [])

  const handleNameInput = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneInput = (e) => {
    setNewPhone(e.target.value)
  }

  const handleFilterInput = (e) => {
    setNewFilter(e.target.value)
    e.target.value == '' ? setShowAll(true) : setShowAll(false)
  }

  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id)

    if (confirm(`Delete ${person.name} ?`)) {
      peopleService.remove(id)
        .then(setPersons(persons.filter((person) => person.id !== id)))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {name: newName, phoneNumber: newPhone, }

    if (persons.some((person) => person.name === newPerson.name)) {
      const person = persons.find((person) => person.name === newPerson.name)
      if (confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = {...person, phoneNumber: newPerson.phoneNumber}
        peopleService.update(person.id, changedPerson)
          .then((changedPerson) => {
            setPersons(persons.map((person) => person.id !== changedPerson.id ? person : changedPerson))
          })
          .catch(error => {
            console.log(`An error occured: ${error}`)
            setNotification({message: `Information of ${changedPerson.name} has already been removed from server`, type: 'error'})
            setTimeout(() => {
              setNotification({message: '', type: ''})
            }, 5000)
            setPersons(persons.filter((person) => person.id !== changedPerson.id))
          })
      }

      setNewName('')
      setNewPhone('')
      return;
    }

    peopleService.create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotification({message: `Added ${returnedPerson.name}`, type: 'notification'})
        setTimeout(() => {
          setNotification({message: '', type: ''})
        }, 5000)
        setNewName('')
        setNewPhone('')
      })
  }

  const personsToShow = showAll ? 
                          persons : 
                          persons.filter((person) => person.name.toUpperCase().startsWith(newFilter.toUpperCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} type={notification.type}/>
      <br />
      <Filter filterValue={newFilter} handleFilterInput={handleFilterInput}/>
      <h2>Add a new</h2>
      <PersonForm handleSubmit={handleSubmit} nameValue={newName} handleNameInput={handleNameInput} phoneValue={newPhone} handlePhoneInput={handlePhoneInput}/>
      <h2>Numbers</h2>
      <Numbers personsToShow={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
