import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  let btn = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonConteiner}>
        {btn.map((items) => (
          <button
            className={styles.button}
            onClick={() => onButtonClick(items)}
          >
            {items}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
