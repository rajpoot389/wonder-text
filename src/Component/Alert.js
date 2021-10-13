import React from 'react'

const Alert = (props) => {
    const display = () => {
        if (props.content) {
            return <div>
                <div class={`alert alert-${props.content.type}`} role="alert">
                    {props.content.msg}
                </div>
                 {/* <div class={`alert alert-success`} role="alert">
                sedrfffffffffff
                </div> */}
            </div>
        }
    }
    return (
        <>
            {display()}
        </>
    )
}

export default Alert
