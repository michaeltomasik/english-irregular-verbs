

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
        {props.words.length === 0 ? <h2 style={{marginTop: '20px', color: '#cbcbcb'}}>nothing found</h2> : null}
        </>
    )
}


export default WordsTable