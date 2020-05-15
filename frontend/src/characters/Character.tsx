import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Store } from './store';
import { CharacterCard } from './CharacterCard';
interface CharactersProps {
  store?: Store
}

@inject('store')
@observer
export class Character extends React.Component<CharactersProps> {
  render() {
    const { characterSelected, error, loading } = this.props.store!;
    return (
      <div>
        <h1>Details</h1>
        { error && <div>Error in Server, try refreshing the page</div> }
        { loading && <div>Loading... If it is the first time, this may take a while...</div> }

        { loading === false && <CharacterCard character={characterSelected} /> }
          
      </div>
    )
  }
}
