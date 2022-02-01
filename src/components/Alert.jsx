import React from 'react'

export default function Alert(props) {
    return (
        <div style={{ height: '60px'}}>
            {props.alert && <div className="alert alert-warning d-flex align-items-center" role="alert">
                <div> {props.alert.msg}</div>
            </div>}
        </div>

    )
}
