import { useState, useEffect } from 'react';
import SingleCard from './components/SingleCard';
import './App.css';

const cardImages = [
  { 'src': '/img/a.png', matched: false },
  { 'src': '/img/b.png', matched: false },
  { 'src': '/img/c.png', matched: false },
  { 'src': '/img/d.png', matched: false },
  { 'src': '/img/e.png', matched: false },
  { 'src': '/img/f.png', matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Intro sound effect
  let introAudio = new Audio('/sound/mixkit-cartoon-positive-sound-2255.wav');
  const startIntroEfx = () => {
    introAudio.play();
  };

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare two selected cards
  useEffect(() => {
    // // Matched cards sound effect
    let successAudio = new Audio(
      '/sound/Game-show-winner-bell-sound-effect.mp3'
    );
    const startSuccessEfx = () => {
      successAudio.play();
    };

    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              startSuccessEfx();
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

  // reset choice & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Auto start new game
  useEffect(() => {
    shuffleCards();
  }, []);

  // button start new game
  const newGame = () => {
    startIntroEfx();
    shuffleCards();
  };

  return (
    <div className='App'>
      <h1>Memory ABC</h1>
      <button className='new-btn' onClick={newGame}>
        <span className='btn-front'>🏆 Nytt Spel</span>
      </button>

      <div className='card-grid'>
        {cards.map((card, index) => (
          <SingleCard
            num={index}
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>
        <span>😅🕖👴</span> försök: <span className='turns'>{turns}</span>
      </p>
      <div className='credit'>
        <a href='https://www.freepik.com/vectors/school'>
          School vector created by pikisuperstar - www.freepik.com
        </a>
        <div>
          Icons made by{' '}
          <a
            href='https://www.flaticon.com/authors/vectors-market'
            title='Vectors Market'
          >
            Vectors Market
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
