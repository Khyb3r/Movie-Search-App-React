import React from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {

    console.log("Search Bar props:" , props);
    
    return(
        <div className="col-md-4 col-sm-6">
      <input
        style={{width: '225px'}}
        className="form-control "
        placeholder="Type to search movie..."
        value={props.movieSearch}
        onChange={(e) => props.setMovieSearch(e.target.value)}
      />
    </div>
    );
}

SearchBar.PropTypes = {
    movieSearch: PropTypes.string.isRequired,
    setMovieSearch: PropTypes.func.isRequired,
}

export default SearchBar;