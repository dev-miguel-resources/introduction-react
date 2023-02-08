import MenuListItem from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constant";
import s from "./style.module.css";

const MenuList = (props) => {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty, idx) => (
        <MenuListItem
          key={idx}
          isSelected={props.difficulty === difficulty}
          onClick={props.onItemClick}
          difficulty={difficulty}
        />
      ))}
    </div>
  );
};

export default MenuList;
