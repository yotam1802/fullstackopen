import { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Numbers from './Numbers'
import axios from '../node_modules/axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then((response) => {
        console.log(response)
        setPersons(response.data)
      })
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {name: newName, phoneNumber: newPhone, id: persons.length + 1}
    if (persons.some((person) => person.name === newPerson.name)) {
      setNewName('')
      setNewPhone('')
      alert(`${newPerson.name} is already added to phonebook`)
      return;
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewPhone('')
  }

  const personsToShow = showAll ? 
                          persons : 
                          persons.filter((person) => person.name.toUpperCase().startsWith(newFilter.toUpperCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={newFilter} handleFilterInput={handleFilterInput}/>
      <h2>Add a new</h2>
      <PersonForm handleSubmit={handleSubmit} nameValue={newName} handleNameInput={handleNameInput} phoneValue={newPhone} handlePhoneInput={handlePhoneInput}/>
      <h2>Numbers</h2>
      <Numbers personsToShow={personsToShow}/>
    </div>
  )
}

export default App
