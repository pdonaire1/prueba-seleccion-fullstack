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
  showDetails(id: string){
    const { selectCharacter } = this.props.store!;
    selectCharacter(id);
  }
  changePage = (page:number) => {
    const { changePage } = this.props.store!;
    changePage(page);
  }
  render() {
    const { characters, error, loading, page, total } = this.props.store!;
    const pages = Math.ceil(total/10);
    return (
      <div>
        {/* <h1>Characters</h1> */}
        { error && <div>Error in Server, try refreshing the page</div> }
        { loading && <div>Loading... If it is the first time, this may take a while...</div> }

        { !loading && <div>
          <button
            className={page === 0 ? "disabled" : ""}
            disabled={page === 0}
            onClick={() => this.changePage(0)} >
            Start
          </button>
          <button
            className={page === 0 ? "disabled" : ""}
            disabled={page === 0}
            onClick={() => this.changePage(page - 1)} >
            Back
          </button>
          {page + 1} of {pages}
          <button
            className={page === pages-1 ? "disabled" : ""}
            disabled={page === pages-1}
            onClick={() => this.changePage(page + 1)}>
            Next
          </button>
          <button
            className={page === pages-1 ? "disabled" : ""}
            disabled={page === pages-1}
            onClick={() => this.changePage(pages-1)}>
            End
          </button>
        </div> }

        { loading === false && characters.map((data, i) =>
          <CharacterCard key={i} character={data} showDetails={this.showDetails.bind(this)} />) }
      </div>
    )
  }
}
