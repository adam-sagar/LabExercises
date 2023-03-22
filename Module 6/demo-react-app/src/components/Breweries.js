import React from 'react';
//import Pagination from './Pagination';

//component which reads data from an API and therefore may cause delay when rendering
function Breweries() {

    //by default the list of breweries is empty and we're showing page 1
    const [breweries, setBreweries] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [filterType, setFilterType] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)


    //gets the list of breweries for the given page, then updates both the current list of breweries and the current page
    const getBreweries = () => {
        const filterParam = filterType === '' ? '' : '&by_type='+filterType;

        console.log('getting '+filterType+' breweries on page number '+currentPage)
        setIsLoading(true)

        fetch('https://api.openbrewerydb.org/breweries?per_page=50&page='+currentPage+filterParam)
        .then(response => response.json())
        .then(jsonData => {
            setBreweries(jsonData)
            setIsLoading(false)
        })        
    }

    //once the component is definitely being rendered on screen, load in the API data
    React.useEffect(() => {
        getBreweries()
    }, [currentPage, filterType]) //we want to re-run this when the page or the filter type change

    const handleChangePage = (newPage) => {
        setCurrentPage(newPage)
    }

    const handleChangeFilter = (newFilter) => {
        setFilterType(newFilter)
    }    

    return (
        <div className="Breweries componentBox">
            <h2>Breweries</h2>

            {/* how could we add a new component to filter the list by brewery type, or state? see https://www.openbrewerydb.org/documentation */}
            <TypeFilter selectedFilter={filterType} filterBreweryHandler={handleChangeFilter}/>

            {isLoading ? <div>Loading breweries ...</div> : 
                <ul className="hideBulletsBreweries">
                    {breweries.map(brewery => //try moving the below out into a separate Brewery component and formatting the data better
                        <li key={brewery.id}><a target="_blank" href={`https://api.openbrewerydb.org/breweries/${brewery.id}`}>{brewery.name}</a> is 
                        a {brewery.brewery_type} brewery in {brewery.state}, {brewery.country}</li>
                    )}
                </ul>
            }
            {/* just reloads the list of breweries with the next page number */}
            <button onClick={() => handleChangePage(currentPage + 1)}>Next Page</button>

            {/* try moving the paging into its own component */}
        </div>
    );
}

function TypeFilter(props) {

    //try adding the full list of brewery types from https://www.openbrewerydb.org/documentation here as an array and using .map() to fill the select options

    let types = ['micro','nano', 'regional', 'brewpub', 'large', 'planning', 'bar', 'contract', 'proprietor', 'closed']

    return (
        <div className="TypeFilter">
            <select name="filterType" value={props.selectedFilter} onChange={(e) => props.filterBreweryHandler(e.target.value)}>
                <option value="">Choose an option</option>
                {/* <option value="micro">Micro</option>
                <option value="nano">Nano</option>
                <option value="regional">Regional</option> */}
                {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    )
}

//extension activity: choose a different API from the list at https://docs.google.com/spreadsheets/d/15iDpjqyBkSse9wcN7vvQvORBvX8P_ivAjm-iKXp776Y/edit#gid=0 
//and implement either searching, sorting or paging (or all three!) keeping in mind the tips at https://react.dev/learn/thinking-in-react

//to export both a default component and some extras
//see https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

export { Breweries as default, TypeFilter };