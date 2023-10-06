const Persons = ({filteredPersons, handleDelete}) => {

    return (
        <ul>
            {filteredPersons.map(person => {
                return (<li key={person.name}>
                    {person.name} {person.number} <button onClick={handleDelete(person)}>delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Persons