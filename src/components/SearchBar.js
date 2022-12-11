import React from 'react';

const SearchBar = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <input
        value={props.value}
        disabled={props.loading}
        placeholder='Search Recipes'
        className='form-control'
        />
        <input
        disabled={props.loading || !props.value}
        type='submit'
        className='btn'
        value='Search'
        />
    </form>   
  );
};

export default SearchBar;
