const Numbers = ({personsToShow, handleDelete}) => {
    return (
        <ul>
            {personsToShow.map((person) => {
                return (
                <li key={person.id}>
                    {person.name} {person.phoneNumber}
                    <button onClick={() => handleDelete(person.id)}>delete</button>
                </li>
                )
            })}
        </ul>
    )
}

export default Numbers