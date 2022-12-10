    import React, {useState} from 'react'

    export default function Textbox(props) {
        const [text, setText] = useState("")
        const [letterCount, setletterCount] = useState(0)
        const [wordCount, setWordCount] = useState(0)
        let invertSchem = props.mode==='light'?'dark':'light'

        const handleOnClickUpper = (event) => {
            let value = text.toUpperCase()
            setText(value)
            props.showAlert('Upper case.', 'success')
        }

        const handleOnClickLower = () => {
            let value = text.toLowerCase()
            setText(value)
            props.showAlert('Lower case.', 'success')
        }

        const handleOnClickClear = () => {
            setText('')
            props.showAlert('Text cleared.', 'success')
        }

        const handleOnClickCopy = (event) => {
            let copyText = document.getElementById('area')
            copyText.select()
            navigator.clipboard.writeText(copyText.value)

            alert("Copied Text: " + copyText.value)
        }

        const handleOnClickInvert = () => {
            let value = text

            const reverseString = (str) => {
                if (str === "")
                    return ""
                else
                    return reverseString(str.substr(1)) + str.charAt(0)
            }

            setText(reverseString(value))
        }

        const handleOnClickSpeak = () => {
            let msg = new SpeechSynthesisUtterance()
            msg.text = text
            window.speechSynthesis.speak(msg)
        }

        const handleOnChange = (event) => {
            setText(event.target.value)
            let text = event.target.value
            let count = text.length
            setletterCount(count)

            let strCount = text.split(" ").length
            setWordCount(strCount)
        }

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h2 className={`text-${invertSchem}`}>Example textarea</h2>
                    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="area" rows="10" value={text} placeholder='Enter value here' onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleOnClickUpper}>Upper</button>
                <button className="btn btn-primary mx-2" onClick={handleOnClickLower}>Lower</button>
                <button className="btn btn-primary mx-2" onClick={handleOnClickClear}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleOnClickCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleOnClickInvert}>Invert</button>
                <button className="btn btn-primary mx-2" onClick={handleOnClickSpeak}>Speak</button>
                
                <p className={`my-2 text-${invertSchem}`}>{letterCount} letters in the text.</p>
                <p className={`text-${invertSchem}`}>{wordCount} words in the text.</p>
            </div>
        </>
    )
    }
