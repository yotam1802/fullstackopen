const Numbers = ({personsToShow}) => {
    return (
        <ul>
            {personsToShow.map((person) => <li key={person.id}>{person.name} {person.phoneNumber}</li>)}
        </ul>
    )
}

export default Numbers