import React, { useState } from 'react'
import Alert from './Alert';

const Text_Area = (props) => {
    const [text, setText] = useState('');
    const [alert, setAlert] = useState(null);
    const handleEvent = (event) => {
        setText(event.target.value);
    }

    const toUpperCase = () => {
        setText(text.toLocaleUpperCase());
        showAlert("Converted To Uppercase", "success");
    }


    const toLowerCase = () => {
        setText(text.toLocaleLowerCase());
        showAlert("Converted To Lowercase", "success");
    }


    const clearSpace = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        showAlert("Space Cleared", "success");
    }


    const handleCopy = () => {
        const copyTxt = document.getElementById("exampleFormControlTextarea1");
        // console.log(copyTxt.value);
        copyTxt.select();
        copyTxt.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyTxt.value);
        showAlert("Sucessfully Copied", "success");
    }
  const clearText=()=>{
      setText('');
      showAlert("text Cl", "success");
  }

    const showAlert = (msg, type) => {
        setAlert({ msg, type });
        setTimeout(() => {
            setAlert(null);
        }, 1500)
    }






    return (
        <>
            <div className={`container-fluid bg-${props.mode === "dark" ? "dark" : "light"}`} style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", height: "100vh", justifyContent: "center"
            }} >
                <Alert content={alert} />

                <div className={`container  bg-${props.mode === "dark" ? "dark" : "light"}`}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Enter Some Text</label>
                        <textarea className={`form-control text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={props.mode === 'dark' ? { backgroundColor: "#738580" } : { backgroundColor: "white" }} id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleEvent}></textarea>
                    </div>
                    <button type="button" className="btn btn-outline-success mx-2 my-2" onClick={toUpperCase}>Upper Case</button>
                    <button type="button" className="btn btn-outline-success mx-2 my-2" onClick={toLowerCase}>Lower Case</button>
                    <button type="button" className="btn btn-outline-success mx-2 my-2" onClick={clearSpace}>Clear Space</button>
                    <button type="button" className="btn btn-outline-success mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                    <button type="button" className="btn btn-outline-success mx-2 my-2" onClick={clearText}>Clear Text</button>
                </div>
                <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text.length} words and {text.split(" ").length} charecters</p>

                <p>time To Read {text.length ? text.length * 0.43.toFixed(2) : ">>"}</p>
                <div>
                    <h2 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text.length === 0 ? 'Preview' : text}</h2>
                </div>
            </div>
        </>
    )
}

export default Text_Area
