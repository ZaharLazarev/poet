import Header from "../Header/Header";
import Button from "../Button/Button";
import Lyrics from "../Lyrics/Lyrics";
import { useState } from "react";
import { LyricsObject } from "../LyricsObject/LyricsObject";
import css from "./App.module.css";
export default function App() {
  const [modal, setModal] = useState(false);
  const ModalChange = () => {
    setModal(true);
  };
  const ModalClose = ()=>{
    setModal(false);
  }
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
      <Button onChange={ModalChange}></Button>
      <Lyrics
        onClose={ModalClose}
        onNext={poemIndexPlus}
        onPrev={poemIndexMinus}
        poem={LyricsObject[poemIndex]}
        modalIcon={modal}
      ></Lyrics>
    </div>
  );
}
