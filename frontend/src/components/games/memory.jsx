import React, { useState, useEffect } from 'react';
import Card from './Card';
import { FaDumbbell, FaRunning, FaBicycle, FaSwimmer, FaWeightHanging, FaBiking } from 'react-icons/fa';


const cardIcons = [
    { icon: <FaDumbbell />, matched: false },
    { icon: <FaBiking />, matched: false },
    { icon: <FaRunning />, matched: false },
    { icon: <FaBicycle />, matched: false },
    { icon: <FaSwimmer />, matched: false },
    { icon: <FaWeightHanging />, matched: false },
];

function App() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    // Shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardIcons, ...cardIcons]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    };

    // Handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    // Compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.icon.type === choiceTwo.icon.type) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.icon.type === choiceOne.icon.type) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    // Reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns((prevTurns) => prevTurns + 1);
    };

    // Start a new game automatically
    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <div className="App flex flex-col justify-center items-center h-screen bg-gray-100">
           <h1 className=" text-white bg-slate-500 outline-slate-600 p-3 outline text-4xl font-serif mb-3 font-extrabold">Fitness Memory Game</h1>

            <button
                onClick={shuffleCards}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 font-bold"
            >
                New Game
            </button>
            <div className="grid grid-cols-4 gap-4">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                    />
                ))}
            </div>
            <p className="mt-4 text-xl">Turns: {turns}</p>
        </div>
    );
}

export default App;
