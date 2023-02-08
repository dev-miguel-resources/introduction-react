import s from "./style.module.css";

const DisplayDifficulty = (props) => {
  const { difficulty } = props;
  console.log(props);
  return (
    <div className={s.container}>
      {props.difficulty
        ? `Difficulty set to ${difficulty}`
        : "No difficulty set"}
    </div>
  );
};

export default DisplayDifficulty;
