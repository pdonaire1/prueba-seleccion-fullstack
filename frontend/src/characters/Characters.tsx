import * as React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Store } from './store';
import { CharacterCard } from './CharacterCard';
import { timeout } from 'q';
interface CharactersProps {
  store?: Store
}

@inject('store')
@observer
export class Characters extends React.Component<CharactersProps> {
  componentDidMount = () => {
    const { requestCharacters } = this.props.store!;
    requestCharacters();
  }

  render() {
    const { characters, error, loading } = this.props.store!;
    return (
      <div>
        {/* <h1>Characters</h1> */}
        { error && <div>Error in Server, try refreshing the page</div> }
        { loading && <div>Loading... If it is the first time, this may take a while...</div> }

        { loading === false && characters.map((data, i) =>
          <CharacterCard key={i} character={data} />) }
          
      </div>
    )
  }
}
