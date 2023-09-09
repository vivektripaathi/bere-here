import React, {useState} from 'react';
// import axios from 'axios';
import Card from './Card'
import Search from './Serch';
import Header from './Header';

const App = () => {
    const [beerData, setBeerData] = useState([]);
    return (
        <div>
            <Header/>
            <Search mapData={(beer)=> setBeerData(beer)}/>  
            {beerData.map((beer) => <Card img={beer.image_url} name={beer.name} tagline={beer.tagline} description={beer.description} id={beer.id}/>)}
        </div>
    );
}

export default App;