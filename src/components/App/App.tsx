import Header from "../Header/Header";
import Button from "../Button/Button";
import Lyrics from "../Lyrics/Lyrics";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { LyricsObject } from "../LyricsObject/LyricsObject";
import css from "./App.module.css";
export default function App() {
  const [poemIndex, setPoemIndex] = useState(0);
  const poemIndexPlus = () => {
    if (poemIndex < LyricsObject.length - 1) setPoemIndex(poemIndex + 1);
  };
  const poemIndexMinus = () => {
    if (poemIndex > 0) {
      setPoemIndex(poemIndex - 1);
    }
  };
  return (
    <div className={css.mainContainer}>
      <Header></Header>
      <Button></Button>
      <Lyrics
        onNext={poemIndexPlus}
        onPrev={poemIndexMinus}
        poem={LyricsObject[poemIndex]}
      ></Lyrics>
      <Modal></Modal>
    </div>
  );
}
