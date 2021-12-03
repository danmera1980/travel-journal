import React from 'react';

export default function Card(props){
    return (
        <div className="card">
            <img className="photo" src={`${props.imageUrl}`} />
            <div className="details">
                <div className="country">
                    <i className="fas fa-map-marker-alt location"/>
                    <span>{props.location.toUpperCase()}</span>
                    <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}