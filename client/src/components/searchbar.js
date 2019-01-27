import React, {Component} from 'react'
import { ReactiveBase, DataSearch, CategorySearch } from '@appbaseio/reactivesearch';
import { withRouter } from "react-router-dom";

class Searchbar extends Component {
  render() {
    return(
      <div>
        <ReactiveBase
          app="saas"
          type="company"
          url="http://localhost:9200"
        >
        <DataSearch
          componentId="componentId"
          dataField={["name"]}
          iconPosition="right"
          // autosuggest={true}
          // fieldWeights={[1, 3]}
          // highlight={true}
          // showFilter={true}
          fuzziness={1}
          style={{ borderWidth: 6, width: 500 }}
          //style={{height:30}}
          onValueSelected={
            (value, cause, source) => {
              //this.props.selectSearch(2)
              this.props.history.push(`/home/${source.id}`);
              //console.log('jjjjj:', this.props.selectSearch)
            }
          }
        />
        </ReactiveBase>
        </div>
    )    
  }

}
export default withRouter(Searchbar)