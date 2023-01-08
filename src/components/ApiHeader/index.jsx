import React from 'react'

export default function ApiHeader(props) {
    const { method, path, name } = props;

    return (
        <>
            <br />
            <h2>{name}</h2>
            <h1>{method}: <a href={`#${path}`}>{path}</a></h1>
        </>

    )
}
