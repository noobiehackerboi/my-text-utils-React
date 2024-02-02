import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleClear = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert("Text Cleared!", "success");
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" data-bs-theme={props.mode}>
                <div className="mb-3">
                    <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                    <textarea style={{ backgroundColor: 'grey' }} className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="10"></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" type="button" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" type="button" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" type="button" onClick={handleCopy}>Copy to CLipBoard</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" type="button" onClick={handleClear}>Clear All</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <p>{text.split(/\n+/).filter((word) => { return word.length !== 0 }).length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}