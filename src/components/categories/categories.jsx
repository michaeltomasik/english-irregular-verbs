import { useContext, useState } from 'react'
import { MyContext } from '../../App'

function SelectCategory () {
    const updateFunction = useContext(MyContext)
    const [activeButtons, setActiveButtons] = useState([false, true, false, false, false])
    
    function activateButton (numberOfButton) {
        setActiveButtons(activeButtons.map((each, index) => {                       
            if (index === numberOfButton) {
                each = true
            } else {
                each = false
            }
            return each
        }))
    }

    return (    
        <ul className="categoryOptions">
            <li>
                <div>
                    <button className={activeButtons[0] === true ? 'currentButton' : ''} onClick={() => {
                        activateButton(0)
                        updateFunction[0]('allSame')
                        updateFunction[1](0)
                        updateFunction[2]('')
                    }}>01</button>
                </div>
                <span>all same</span>
            </li>
            <li>
                <div>
                    <button className={activeButtons[1] === true ? 'currentButton' : ''} onClick={() => {
                        activateButton(1)
                        updateFunction[0]('allDifferent')
                        updateFunction[1](0)
                        updateFunction[2]('')
                    }}>02</button>
                </div>
                <span>all different</span>
            </li>
            <li>
                <div>
                    <button className={activeButtons[2] === true ? 'currentButton' : ''} onClick={() => {
                        activateButton(2)
                        updateFunction[0]('infinitiveAndSimplePastSAME')
                        updateFunction[1](0)
                        updateFunction[2]('')
                    }}>03</button>
                </div>
                <span>same infinitive and simple past</span>
            </li>
            <li>
                <div>
                    <button className={activeButtons[3] === true ? 'currentButton' : ''} onClick={() => {
                        activateButton(3)
                        updateFunction[0]('infinitiveAndPastParticipleSAME')
                        updateFunction[1](0)
                        updateFunction[2]('')
                    }}>04</button>
                </div>
                <span>same infinitive and past participle</span>
            </li>
            <li>
                <div>
                    <button className={activeButtons[4] === true ? 'currentButton' : ''} onClick={() => {
                        activateButton(4)
                        updateFunction[0]('SimplePastAndPastParticipleSAME')
                        updateFunction[1](0)
                        updateFunction[2]('')
                    }}>05</button>
                </div>
                <span>same simple past and past participle</span>
            </li>
        </ul>
    )
}

export default SelectCategory