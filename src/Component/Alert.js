import React from 'react'

const Alert = (props) => {
    const display = () => {
        if (props.content) {
            return <div class={`alert alert-${props.content.type}`} role="alert">
                {props.content.msg}
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
