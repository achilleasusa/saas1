import React, {Component} from 'react'
import { ReactiveBase, DataSearch, CategorySearch } from '@appbaseio/reactivesearch';
const Searchbar = () => {
  return(
    <div>
			<ReactiveBase
        app="index"
        type="type"
        url="http://localhost:9200"
      >
      <DataSearch
        componentId="componentId"
        dataField="title"
        // autosuggest={true}
        // fieldWeights={[1, 3]}
        // highlight={true}
        // showFilter={true}
        fuzziness={1}
      />
      {/* <CategorySearch
        componentId="searchbox"
        dataField="model"
        categoryField="brand.keyword"
        placeholder="Search for cars"
      />  */}
			</ReactiveBase>
      </div>
  )
}
export default Searchbar