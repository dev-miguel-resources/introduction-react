import { useState } from "react";
import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";
import s from "./style.module.css";

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  // ciclos de vida: mount (montado), update (actualizado), unmount (destrucción o desacople)

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };

  // JSX = XML + JS
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Select your React difficulty</h1>
      <div className={s.workspace}>
        <MenuList 
          difficulty={currentDifficulty}
          onItemClick={onMenuListItemClick}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;
