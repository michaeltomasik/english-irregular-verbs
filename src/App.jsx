import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import WordsTable from './components/words-table/words-table'
import { words } from './words/words.js'
import { Categorize } from './javascript/words-process.js'
import paginate from './javascript/paggination.js'
import SelectCategory from './components/categories/categories.jsx'
import SearchInput from './components/seacrh/search-input.jsx'
import github from './images/github.svg'
import linkedin from './images/linkedin.svg'

export const MyContext = React.createContext()

function App () {

  const [pageNumber, setPageNumber] = useState(0)
  const [categoryName, setCategoryName] = useState('allDifferent')
  const [searchResult, setSearchResult] = useState('')
  let category = new Categorize(words)
  let page = paginate(category[categoryName])
  
  return (
      <>
      <Navbar />
      <MyContext.Provider value={[setCategoryName, setPageNumber, setSearchResult]} >
        <main>
          <div>
            <WordsTable words={searchResult === '' ? page[pageNumber] : searchResult} />
          </div>
          <div>
            <SearchInput />
            <SelectCategory />                                                   
          </div>
        </main>
      </MyContext.Provider>
      <div className="pagination">
        {
          page.map((each, index) => {
            return <button className={pageNumber === index ? 'activePaginationButton' : null} onClick={() => {
              setPageNumber(index)
            }}>{index + 1}</button>
          })
        }
      </div>
      <footer>
        <p>Designed & Developed by <span>Ioannis Mentesidis</span> &copy; 2022</p>
        <div>
          <a href="https://github.com/GiannisJOHN" target='_blank'>
            <img src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ioannis-mentesidis/" target='_blank'>
            <img src={linkedin} alt="" />
          </a>
        </div>
      </footer>
      </>
  )

}

export default App