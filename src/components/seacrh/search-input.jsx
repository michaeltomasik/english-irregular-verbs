// 1. Add React lib to the top of this component
// 2. Change -> seacrh(typo)/search-input.js to SearchInput/index.js

import searchImg from '../../images/search.svg'
import { words } from '../../words/words.js'
import { useState, useContext } from 'react'
import { MyContext } from '../../App'

function SearchInput () {
    const [userInput, setUserInput] = useState('')
    const [cleanInput, setCleanInput] = useState(false)
    let setSearchResult = useContext(MyContext)

    function handleResult() {
        let searchResult = words.filter((each) => {
            setCleanInput(true)
            if (userInput === each.Infinitive) {
                return each
            }
        })
        // Why 2? Please avoid magic numbers
        // https://www.codebyamir.com/blog/software-anti-patterns-magic-numbers#:~:text=A%20magic%20number%20is%20a,so%20they%20should%20be%20avoided.
        setSearchResult[2](searchResult)
    }
    
    return (
        <div className='search' >

            <input  value={cleanInput === true ? '' : userInput} onInput={(e) => {
                setCleanInput(false)
                setUserInput(e.target.value)
            
            }} onKeyDown={(e) => {
                if (e.code === 'Enter') {
                    handleResult()
                }
            }} type="text" placeholder="enter infinitive form"/>

            <button onClick={ handleResult }>
                <img src={searchImg} alt="" />
            </button>
        </div>
    )
}

export default SearchInput