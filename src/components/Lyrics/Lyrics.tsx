import css from "./Lyrics.module.css";
interface LyricsType {
  title: string;
  text: string;
}
interface LyricsProps {
  onNext: () => void;
  onPrev: () => void;
  poem: LyricsType;
  modalIcon: boolean;
  onClose: () => void;
}

export default function Lyrics({
  onNext,
  onPrev,
  poem,
  modalIcon,
  onClose,
}: LyricsProps) {
  return modalIcon ? (
    <div className={css.poemModal}>
      <div className={css.poemContainerInModal}>
        <button className={css.CloseButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={css.poemTitle}>{poem.title}</h2>
        <p className={css.poemModalText}>{poem.text}</p>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.arrowButton} onClick={onPrev}>
          <img
            className={css.arrowImg}
            src="https://www.svgrepo.com/show/425979/left-arrow.svg"
            alt="Left"
          />
        </button>
        <button className={css.arrowButton} onClick={onNext}>
          <img
            className={css.arrowImg}
            src="https://www.svgrepo.com/show/425982/right-arrow.svg"
            alt="Right"
          />
        </button>
      </div>
    </div>
  ) : (
    <div className={css.poemContainer}>
      <div className={css.poemContainer}>
        <h2 className={css.poemTitle}>{poem.title}</h2>
        <p className={css.poem}>{poem.text}</p>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.arrowButton} onClick={onPrev}>
          <img
            className={css.arrowImg}
            src="https://www.svgrepo.com/show/425979/left-arrow.svg"
            alt="Left"
          />
        </button>
        <button className={css.arrowButton} onClick={onNext}>
          <img
            className={css.arrowImg}
            src="https://www.svgrepo.com/show/425982/right-arrow.svg"
            alt="Right"
          />
        </button>
      </div>
    </div>
  );
}
