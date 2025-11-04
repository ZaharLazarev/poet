interface ModalProps {
  onChange: () => void;
}
export default function Button({ onChange }: ModalProps) {
  return (
    <>
      <button onClick={onChange}>Переглянути вірш</button>
    </>
  );
}
