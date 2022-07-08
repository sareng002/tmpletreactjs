import React from "react"
export default function Content(props)
{
    return (
        <>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <div className="container">
                    {props.children}
                </div>
            </div>
            {/* /.content-wrapper */}

        </>

           )
}