const SearchResults = ({countries}) => {
    if (countries === "Too many matches, specify another filter") {
        return (<div>Too many matches, specify another filter</div>)
    } 

    else if (countries.length === 1) {
        const country = countries[0]
        const languages = Object.values(country.languages)

        return (
            <div>
                <h1>{country.name.common}</h1>
                <div>
                    capital {country.capital}
                    <br />
                    area {country.area}
                </div>
                <h3>languages:</h3>
                <ul>
                    {languages.map((language) => {
                        return <li key={`${country.name.common}/${language}`}>{language}</li>
                    })}
                </ul>
                <div><img src={country.flags.png}/></div>
            </div>
        )
    }

    return (
        <ul>
            {countries.map((country) => {
                return <li key={country.name.common}>{country.name.common}</li>
            })}
        </ul>
    )
}

export default SearchResults