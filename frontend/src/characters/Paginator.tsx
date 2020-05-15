import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Store } from './store';
interface PaginatorProps {
  store?: Store
}

@inject('store')
@observer
export class Paginator extends React.Component<PaginatorProps> {
  changePage = (page:number) => {
    const { changePage } = this.props.store!;
    changePage(page);
  }
  render() {
    const { loading, page, total } = this.props.store!;
    const pages = Math.ceil(total/10);
    return (
      <div>
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
      </div>
    )
  }
}
