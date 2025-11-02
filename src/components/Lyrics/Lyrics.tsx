import css from "./Lyrics.module.css";
interface LyricsType {
  title: string;
  text: string;
}
interface LyricsProps {
  onNext: () => void;
  onPrev: () => void;
  poem: LyricsType;
}

export default function Lyrics({ onNext, onPrev, poem }: LyricsProps) {
  return (
    <div className={css.poemContainer}>
      <div className={css.poemContainer}>
        <h2 className={css.poemTitle}>{poem.title}</h2>
        <p className={css.poem}>{poem.text}</p>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.arrowButton} onClick={onPrev}>
          <img
            className={css.arrowImg}
            src="/img/left-arrow-svgrepo-com.svg"
            alt="Left"
          />
        </button>
        <button className={css.arrowButton} onClick={onNext}>
          <img
            className={css.arrowImg}
            src="/img/right-arrow-svgrepo-com.svg"
            alt="Right"
          />
        </button>
      </div>
    </div>
  );
}
