import React, {Component} from 'react'
import { ReactiveBase, DataSearch, CategorySearch } from '@appbaseio/reactivesearch';
const Searchbar = () => {
  return(
    <div>
			<ReactiveBase
        app="saas"
        type="company"
        url="http://localhost:9200"
      >
      <DataSearch
        componentId="componentId"
        dataField="name"
        iconPosition="right"
        // autosuggest={true}
        // fieldWeights={[1, 3]}
        // highlight={true}
        // showFilter={true}
        fuzziness={1}
        style={{ borderWidth: 6, width: 500 }}
        //style={{height:30}}
      />
			</ReactiveBase>
      </div>
  )
}
export default Searchbar