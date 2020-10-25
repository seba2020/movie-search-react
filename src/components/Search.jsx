import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const Search = (props) => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <InputGroup className="mb-3">
                <FormControl
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type="text"
                />
                <InputGroup.Append>
                    <Button style={{display: 'flex', alignItems: 'center'}} variant="outline-secondary" onClick={callSearchFunction} type="submit">
                        <span className="mr-1">Buscar</span>
                        <span style={{fontSize: '1rem', color: 'tomato'}} className="material-icons">local_movies</span>
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </form>
    )
}

export default Search;