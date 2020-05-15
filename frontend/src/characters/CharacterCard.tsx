import * as React from 'react';
import { ICharacter } from './store';
const person = 'https://pointchurch.com/wp-content/uploads/2019/02/Blank-Person-Image.png';
interface CharacterCardProps {
  character: ICharacter
  showDetails?: any
}

export class CharacterCard extends React.Component<CharacterCardProps> {
  constructor(props: CharacterCardProps){
    super(props);
    this.showDetails.bind(this);
  }
  showDetails(id: string){
    this.props.showDetails!(id);
  }
  render() {
    const { character } = this.props;
    if (!character.id) return (<div></div>);
    return (
      <div className="card-box">
        <div className="card">
          <div className="container">
            <div className="wrapper">
              <div className="column"><img src={character.image ? character.image : person } /></div>
              <div className="column sub-title">{character.name}</div>
            </div>
            { !this.props.showDetails &&
              <div>
                <div className="wrapper">
                  <div className="column sub-title">Culture:</div>
                  <div className="column">{character.culture ? character.culture : '-'}</div>
                  <div className="column sub-title">Gender:</div>
                  <div className="column">{character.gender ? character.gender : '-'}</div>
                </div>
                <div className="wrapper">
                  <div className="column sub-title">Allegiance:</div>
                  <div className="column">
                    { !character.allegiance.length ? '-' :
                      <ul>
                        {character.allegiance.map((value, i) => <li key={i}>{value}</li>)}</ul>}
                  </div>
                </div>
              </div>}
          </div>
          { this.props.showDetails &&
            <button onClick={() => this.showDetails(character.id)} >
              Details
            </button> }
        </div>

      </div>
    )
  }
}
