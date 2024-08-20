import React, { useState, useEffect } from 'react';
import './memoryGame.css';
import cardsData from '../Data/memoryGame';

const MemoryGame = () => {
    const [shuffledCards, setShuffledCards] = useState([]);
    const [openedCards, setOpenedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [allRevealed, setAllRevealed] = useState(false);

    useEffect(() => {
        let cards = [...cardsData];

        // Ensure we always have exactly 8 unique cards for a 4x4 grid
        if (cards.length < 8) {
            // Duplicate random cards until we have 8 unique ones
            while (cards.length < 8) {
                cards.push(...cardsData.slice(0, 8 - cards.length));
            }
        }

        // Limit to exactly 8 unique cards
        cards = cards.slice(0, 8);
        const shuffled = [...cards, ...cards].sort(() => Math.random() - 0.5);
        setShuffledCards(shuffled);
        setOpenedCards([]);
        setMatchedCards([]);
    }, []);

    const handleRevealAll = () => {
        setAllRevealed(true);
        setTimeout(() => {
            setAllRevealed(false);
        }, 1000);
    };

    const handleCardClick = (index) => {
        if (openedCards.length === 2 || matchedCards.includes(index)) return;

        const newOpenedCards = [...openedCards, index];
        setOpenedCards(newOpenedCards);

        if (newOpenedCards.length === 2) {
            const firstCard = shuffledCards[newOpenedCards[0]];
            const secondCard = shuffledCards[newOpenedCards[1]];

            if (firstCard.number === secondCard.number) {
                setMatchedCards([...matchedCards, newOpenedCards[0], newOpenedCards[1]]);
                setOpenedCards([]);
            } else {
                setTimeout(() => setOpenedCards([]), 1000);
            }
        }
    };

    useEffect(() => {
        if (matchedCards.length === shuffledCards.length && matchedCards.length > 0) {
            alert('Congratulations! You have matched all the cards!');
        }
    }, [matchedCards, shuffledCards]);

    return (
        <div className="memory-game-container">
            <button onClick={handleRevealAll}>Reveal All Cards</button>
            <div
                className="memory-game-grid"
                style={{
                    gridTemplateColumns: `repeat(4, 1fr)`,
                    gridTemplateRows: `repeat(4, 1fr)`,
                }}
            >
                {shuffledCards.map((card, index) => (
                    <div
                        key={index}
                        className={`memory-card ${openedCards.includes(index) || matchedCards.includes(index) || allRevealed ? 'revealed' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        {openedCards.includes(index) || matchedCards.includes(index) || allRevealed
                            ? <img src={card.image} alt="memory card" />
                            : <div className="card-back"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemoryGame;
