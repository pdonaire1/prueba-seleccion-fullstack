import React from 'react';
import { Provider } from 'mobx-react';
import { Store } from './characters/store'
import { Characters } from './characters/Characters';
import { Character } from './characters/Character';

import './App.css';

class App extends React.Component<{}> {
  private store: Store = new Store()
  render(){
    return (
      <Provider store={this.store}>
        <div className="App">
          <h1>Game of Thrones</h1>
          <div className="wrapper">
            <div className="column">
              <Characters />
            </div>
            <div className="column">
              <Character />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}


export default App;