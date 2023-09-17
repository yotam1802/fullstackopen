import { useEffect } from "react"
import Search from "./components/Search"
import SearchResults from "./components/SearchResults"
import { useState } from "react"
import countryService from './services/countries'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  }, [])

  useEffect(() => {
    const exactName = countries.filter((country) => country.name.common.toUpperCase() === search.toUpperCase())
    if (exactName.length !== 0) {
      setCountriesToShow(exactName)
      return
    }

    const searchCountries = countries.filter((country) => country.name.common.toUpperCase().startsWith(search.toUpperCase()))
    searchCountries.length > 10 ? setCountriesToShow("Too many matches, specify another filter") : setCountriesToShow(searchCountries)
  }, [search])

  if (countries.length === 0) {
    console.log('Loading....')
    return null
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleShow = (country) => () => {
    return (
      setCountriesToShow([country])
    )
  }

  return (
    <div>
      <Search value={search} handleChange={handleSearchChange}/>
      <SearchResults countries={countriesToShow} handleShow={handleShow}/>
    </div>
  )
}

export default App