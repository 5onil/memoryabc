import './SingleCard.css';
import coverCard from '../img/cover2.png';

export default function SingleCard({
  card,
  handleChoice,
  flipped,
  disabled,
  num,
  cardAudio,
  successAudio,
}) {
  const handleClick = () => {
    if (!disabled) {
      successAudio.pause();
      successAudio.currentTime = 0;
      cardAudio.play();
      handleChoice(card);
    }
  };

  return (
    <div className={`card card-${num}`}>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          src={coverCard}
          onClick={handleClick}
          alt='card back'
        />
      </div>
    </div>
  );
}
