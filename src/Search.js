import React from 'react';
import './search.css';
class Search extends React.Component{
    render(){
        return (
            <div>
            <input type='text' placeholder="Enter robot name" onChange={this.props.search}/>
            </div>
        );
    }
}

export default Search;