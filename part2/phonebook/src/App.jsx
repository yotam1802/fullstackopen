import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', phoneNumber: '040-123-4567'}
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameInput = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneInput = (e) => {
    setNewPhone(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {name: newName, phoneNumber: newPhone}
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>name: <input value={newName} onChange={handleNameInput}/></div>
        <div>number: <input value={newPhone} onChange={handlePhoneInput}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.name}>{person.name} {person.phoneNumber}</li>)}
      </ul>
    </div>
  )
}

export default App
