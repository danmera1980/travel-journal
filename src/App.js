import React from "react";
import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data"


export default function App(){
    
    const cards = data.map(card => {
        return (
            <div>
                <Card 
                    key={card.id}
                    {...card}
                />
                <hr/>
            </div>
        )
    });
    
    return (
        <div>
            <Header />
            {cards}
        </div>
    )
}