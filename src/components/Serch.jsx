import React , {useState} from 'react'
import axios from 'axios';
import Zoom from '@mui/material/Zoom';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import lodash from 'lodash'

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [beer, setBeer] = useState([])


    const handleChange = (event) => {
        const input = lodash.toLower(event.target.value).replaceAll(' ', '_');
        setSearchTerm(input)
    }

    const handleClick = (event) => {
        event.preventDefault();
        props.mapData(beer);
        setSearchTerm('');
    }

    React.useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
            setBeer(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    },[searchTerm]);


    return (
        <div>
            <form className="search-beer">
                <input 
                    name="title" 
                    placeholder="Search your Beer (e.g. mashtag)" 
                    value={searchTerm}
                    onChange={handleChange}
                />
                <Zoom in={true}>
                    <Fab>
                        <SearchIcon onClick={handleClick} />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default Search;