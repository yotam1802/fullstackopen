const Search = ({value, handleChange}) => {
    return (
        <div>
            <strong>find countries</strong> <input value={value} onChange={handleChange}/>
        </div>
    )
}

export default Search