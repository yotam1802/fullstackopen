const PersonForm = ({newName, newNumber, handleNameChange, handlePhoneChange, handleFormSubmit}) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
                <br />
                number: <input value={newNumber} onChange={handlePhoneChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm