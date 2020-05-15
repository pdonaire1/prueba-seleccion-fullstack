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
              <div className="column sub-title">Info:</div>
              <div className="column">{JSON.stringify(character)}</div>
            </div>
          </div>
          
        </div>

      </div>
    )
  }
}
