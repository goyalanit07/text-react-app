import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [sText, setSText] = useState('');
    const [btnText, setBtnText] = useState('Lower Case');

    const findTextFn = (event) => {
        setSText(event.target.value);
    }
    const onChangeFn = (event) => {
        setText(event.target.value)
    }
    const toggelCaseFn = () => {
        if (btnText === 'Upper Case') {
            setText(text.toUpperCase())
            setBtnText('Lower Case')
        } else if (btnText === 'Lower Case') {
            setText(text.toLowerCase())
            setBtnText('Upper Case')
        }
    }
    const capitalCaseFn = () => {
        let splittext = text.split(' ');

        for (let i = 0; i < splittext.length; i++) {
            splittext[i] = splittext[i].charAt(0).toUpperCase() + splittext[i].slice(1).toLowerCase();
        }
        setText(splittext.join(' '))
    }

    const clearTextFn = () => {
        setText('');
    }
    const copyTextFn = () => {
        navigator.clipboard.writeText(text);
        props.alert('Text Copied')
    }
    const extraSpaceFn = () => {
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
    }

    const selectFn = () => {
        if (sText.length === 0) {

        } else {
            var newtext = text.split(sText);
            setText(newtext.join(' '));
            setSText('')
        }
    }
    return (
        <div className="container">
            <div className="mb-3">
                <label htmlFor="textBox" className="form-label mt-2" ><h3 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Enter Text Here</h3></label>
                <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`} id="textBox" rows="7" onChange={onChangeFn} value={text} placeholder='Enter Some Text'></textarea>
            </div>

            <button type="button" className="btn-sm m-1 btn-secondary " onClick={toggelCaseFn} >{btnText}</button>
            <button type="button" className="btn-sm m-1 btn-secondary" onClick={capitalCaseFn} >Capital</button>
            <button type="button" className="btn-sm m-1 btn-secondary" onClick={clearTextFn} >Clear Text</button>
            <button type="button" className="btn-sm m-1 btn-secondary" onClick={copyTextFn} >Copy Text</button>
            <button type="button" className="btn-sm m-1 btn-secondary" onClick={extraSpaceFn} >Extra Space</button>
            <button className="btn-sm m-1 btn-secondary" type="button" htmlFor='find-text' onClick={selectFn} > Remove Text</button>
            <input type="text" placeholder="Enter To Remove" id="find-text" value={sText} onChange={findTextFn} aria-describedby="find-text" />

            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Character Count : {text.length}</p>
        </div>
    )
}
