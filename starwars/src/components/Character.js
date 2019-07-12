import React from "react";
import "./StarWars.css";

const Character = props => {
  console.log(props);
  return (
    <div className="character-container">
      <div onClick={props.showInfo} key={props.name} className="character-name">
        <h2>
          {props.char.name}
          {"    "}

          <i
            className={`${
              props.active ? "fa fa-caret-down fa-xs" : "fa fa-caret-up fa-xs"
            }`}
            aria-hidden="true"
          />
        </h2>
      </div>
      <div
        className={`character-info ${
          props.active ? "info-display-hide" : null
        }`}
      >
        <div className="character-left">
          <div>
            <h4>Height: </h4>
            <p>{props.char.height}</p>
          </div>
          <div>
            <h4>Mass: </h4> <p>{props.char.mass}</p>
          </div>
          <div>
            <h4>Gender: </h4>
            <p>{props.char.gender}</p>
          </div>
        </div>
        <div className="character-middle">
          <div>
            <h4>Skin Color: </h4>
            <p>{props.char.skin_color}</p>
          </div>

          <div>
            <h4>Hair Color: </h4>
            <p>{props.char.hair_color}</p>
          </div>

          <div>
            <h4>Eye Color: </h4>
            <p>{props.char.eye_color}</p>
          </div>
        </div>
        <div className="character-right">
          <div>
            <h4>Birth Year: </h4>
            <p>{props.char.birth_year}</p>
          </div>

          <div>
            <h4>Films: </h4>
            <p>{props.char.films.length}</p>
          </div>

          <div>
            <h4>Starships Owned: </h4>
            <p>{props.char.starships.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
