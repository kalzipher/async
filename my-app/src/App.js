import React, { useState } from "react";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect, useDispatch } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions";
import {
  getRickAndMortyCharacters,
  getCharacterById,
} from "./redux/RickAndMorty/rick.action";

function App(props) {
  const [idCharacter, setId] = useState(1);
  const dispatch = useDispatch()

  const getRick = async () => {
    try {
      console.log(11)
      const response = await fetch("https://rickandmortyapi.com/api/character/1").then(r => r.json())
      console.log(12)
    } catch (err) {
    }
  }

  return (
    <div className="App">
      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>

      <button onClick={() => props.loadRickAndMorty()}>
        Load rick and morty characters
      </button>
      <br />
      <input onChange={(e) => setId(e.target.value)} />

      <button onClick={() => props.getCharacterById(idCharacter)}>
        Get Character #{idCharacter}
      </button>
      <br />
      {(props.rick.isFetchingCharacters || props.rick.isFetchingCharacter)  && (
        <div className="LoaderRick">Is loading rick and morty</div>
      )}
      {(!props.rick.isFetchingCharacters && props.rick.character) && (
        <div key={props.rick.character.id} className="character">
          <img src={props.rick.character.image} />
          <h1 className="text-center">{props.rick.character.name}</h1>
        </div>
      )}
      {!props.rick.isFetchingCharacters && (
        <div>
          {props.rick.characters?.map((character) => (
            <div key={character.id} className="character">
              <img src={character.image} />
              <h1 className="text-center">{character.name}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    rick: state.rick,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: bindActionCreators(increaseCounter, dispatch),
    // es el equivalente al de abajo
    decreaseCounter: () => dispatch(decreaseCounter()),

    loadRickAndMorty: getRickAndMortyCharacters(dispatch),
    getCharacterById: getCharacterById(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
