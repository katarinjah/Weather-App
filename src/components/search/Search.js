import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../Api";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const handleOnchange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
            geoApiOptions
        )
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} ${city.countryCode}`,
                    }
               }) 
            }
            })
        .catch(error => console.error(error))
    };

    return(
        <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnchange}
        loadOptions = {loadOptions}
        />
    )

}

export default Search