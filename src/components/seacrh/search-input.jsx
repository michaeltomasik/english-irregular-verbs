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