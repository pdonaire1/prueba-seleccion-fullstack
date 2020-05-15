import * as React from 'react';
import { ICharacter } from './store';
interface CharacterCardProps {
  character: ICharacter
}

export class CharacterCard extends React.Component<CharacterCardProps> {
  render() {
    const { character } = this.props;
    return (
      <div key={character.id} className="card-box">
        <div className="card">
          <div className="container">
            <div className="sub-title">{character.name}</div>
            <div className="wrapper">
              <div className="column sub-title">Culture:</div>
              <div className="column">{character.culture}</div>
              <div className="column sub-title">Gender:</div>
              <div className="column">{character.gender ? character.gender : '-'}</div>
            </div>
            <div className="wrapper">
              <div className="column sub-title">Allegiance:</div>
              <ul className="column">{character.allegiance.map((value, i) => <li key={i}>{value}</li>)}</ul>
            </div>
          </div>
          
        </div>

      </div>
    )
  }
}
