import React from "react";
import Character from "./Character";
import "./StarWars.css";

const CharacterList = props => {
  return (
    <div>
      {props.chars.map(char => (
        <Character
          key={props.name}
          showInfo={props.showInfo}
          active={props.active}
          char={char}
        />
      ))}
    </div>
  );
};

export default CharacterList;
