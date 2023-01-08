import React from 'react'
import ApiViewer from '../../components/ApiViewer'
import apis from '../../apis'
import { nanoid } from 'nanoid'

export default function Committer() {
    return (
        <>
            {apis.map(x => {
                return <ApiViewer key={nanoid()} info={x} />
            })}
        </>
    )
}
