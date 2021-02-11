import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Airline = (props) => {
    const [airline,setAirline] = useState({})
    const [review,setReview] = useState({})

    useEffect(() => {
        axios.get(`/api/v1/airlines/${props.match.params.slug}`)
        .then(resp => 
            setAirline(resp.data)
        )
        .catch(err => console.log(err))
    }, [])
    return (
    <div className="wrapper">
        <div className="column">
            <div className="header"></div>
            <div className="reviews"></div>
        </div>
        <div className="column">
            <div className="review-form">review form goes here</div>
        </div>
         
    </div>)
}

export default Airline