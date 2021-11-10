import './SingleCard.css';
import coverCard from '../img/cover2.png';
import flipSfx from '../sound/Card-flip-sound-effect.mp3';

export default function SingleCard({
  card,
  handleChoice,
  flipped,
  disabled,
  num,
}) {
  // flip card sound effect
  let flipAudio = new Audio({ flipSfx });
  const startFlipEfx = () => {
    flipAudio.play();
  };

  const handleClick = () => {
    if (!disabled) {
      startFlipEfx();
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
