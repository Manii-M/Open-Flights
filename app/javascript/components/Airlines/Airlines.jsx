import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Airline from '../Airlines/Airline'
import styled from 'styled-components'

const Home = styled.div`
    text-align:center;
    max-width:1200px;
    margin-left:auto;
    margin-right:auto;
`
const Header = styled.div`
    padding:100px 100px 10px 100px;
    h1{
        fond-size: 42px;
    }
`
const SubHeader = styled.div`
    font-weight:300;
    font-size:26px;
`
const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap:20px;
    width:100%;
    padding:20px;
`

const Airlines = () => {
    
    const [airlines,setAirlines] = useState([])
    useEffect(() => {
        axios.get('/api/v1/airlines.json')
        .then(resp => {
            console.log(resp)
            setAirlines(resp.data.data);
        })
        .catch(err => console.log(err))
    }, [airlines.length])

    
    const list = airlines.map(item => {
        return (
            <Airline
                key={item.attributes.name}
                attributes={item.attributes}
            />
        )
    })
    return (
   <Home>
       <Header>
            <h1>openFlights</h1>
           <SubHeader>
                Honest, unbiased airline reviews.
                </SubHeader>
       </Header>
        <Grid>
            {list}
        </Grid>          
   </Home>
    )
}

export default Airlines