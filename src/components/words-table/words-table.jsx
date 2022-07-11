// 1. Add React lib to the top of this component
// 2. Change words-table/words-table.js to WordsTable/index.js


// Use this form
// const WordsTable = ({ words }) =>
function WordsTable (props) {


    return (
        <>
        <table className="wordsTable">
            <thead>
                <tr>
                    <th>infinitive</th>
                    <th>simple past</th>
                    <th>past participle</th>
                </tr>
            </thead>
            <tbody>
                { 
                // "each" does not say on what type of data are you working on... Change to "word"
                // basically you should be able to read the code like a book, never second guess
                 props.words.map((each) => {

                    return (
                        <tr>
                            <td>{each.Infinitive}</td>
                            <td>{each.SimplePast}</td>
                            <td>{each.PastParticiple}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
        {/* Don't use inline styles, create the scss file and apply this change from there */}
        {props.words.length === 0 ? <h2 style={{marginTop: '20px', color: '#cbcbcb'}}>nothing found</h2> : null}
        </>
    )
}


export default WordsTable