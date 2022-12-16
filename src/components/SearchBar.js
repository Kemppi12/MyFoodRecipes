import React from 'react';

const SearchBar = (props) => {
  return (
    <form className='search-form' 
      onSubmit={props.handleSubmit}>
        <input
        value={props.value}
        disabled={props.loading}
        onChange={props.onChange}
        placeholder='Search Recipes'
        className='search-input'
        />
        <input
        disabled={props.loading || !props.value}
        type='submit'
        className='search-btn'
        value='Search'
        />
    </form>   
  );
};

export default SearchBar;
