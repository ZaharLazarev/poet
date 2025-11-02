import css from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <h1>Poetic Soul</h1>
      <p className={css.headerText}>Слова, що живуть у тиші</p>
    </div>
  );
}
