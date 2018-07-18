import React, { Component } from 'react';


class Poker extends Component {

    constructor() {
        super();
        this.state = {
            pokerHand: [
                {
                    suit: "Clubs",
                    number: 2
                },
                {
                    suit: "Hearts",
                    number: 7
                }
            ]
        };
    }

    addRandomCard() {
        // Next three lines shows how to copy and array of objects:
        let newPokerHand = this.state.pokerHand.map((card)=>{
            return {...card}
        });

        let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

        newPokerHand.push({
            number: Math.floor(Math.random()*13) + 1,
            suit: suits[Math.floor(Math.random()*4)]
        })

        this.setState({
            pokerHand: newPokerHand
        });
    }

    changeToJokers() {
        let newPokerHand = this.state.pokerHand.map((card)=>{
            return {
                suit: "Joker",
                number: "Joker"
            }
        });

        this.setState({
            pokerHand: newPokerHand
        })
    }

    render() {

        return (
            <div>
                <h1>Poker</h1>
                {this.state.pokerHand.map((card)=>{
                    return <h1>{card.number} of {card.suit}</h1>
                })}

                <button onClick={this.addRandomCard.bind(this)}>RANDOM CARD</button>
                <button onClick={this.changeToJokers.bind(this)}>JOKERS</button>
            </div>
        )
    }
}

export default Poker;