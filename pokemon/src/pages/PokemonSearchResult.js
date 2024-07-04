import {useState, useEffect} from 'react';

function PokemonSearchResult () {

    const [inputText, setInputText] = useState('');
    const [names, setNames] = useState('');

    const onChangeHandler = e => {
        setInputText(e.target.value);
    }

    const onClickHandler = () => {
        fetch(`https://pokeapi.co9/api/v2/pokemon-form/{id or name}/${names}`)
            .then(res => res.json())
            .thenr(data => {
                console.log(data),
                setNames()
            })
        setNames(inputText);
        setInputText('');
    }

    return(
        <div>
            <input 
                type="text"
                value={ inputText }
                onChange={ onChangeHandler }
            />
            <button
                onClick = {onClickHandler}
            >검색하기</button>
        </div>
    );

}

export default PokemonSearchResult;