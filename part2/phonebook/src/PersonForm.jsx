const PersonForm = (props) => {
    const handleSubmit = props.handleSubmit
    const newName = props.nameValue
    const newPhone = props.phoneValue
    const handleNameInput = props.handleNameInput
    const handlePhoneInput = props.handlePhoneInput

    return (
        <form onSubmit={handleSubmit}>
        <div>name: <input value={newName} onChange={handleNameInput}/></div>
        <div>number: <input value={newPhone} onChange={handlePhoneInput}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;