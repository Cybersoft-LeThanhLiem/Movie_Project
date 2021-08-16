import React from 'react'
import _ from 'lodash'

export default function LastFirstLodash() {
    const arrStudent = [
        {id: 1, name: 'Peter'},
        {id: 2, name: 'Barry'},
        {id: 3, name: 'Iris'}
    ]

    const firstItem = _.first(arrStudent);
    const lastItem = _.last(arrStudent);

    const arr = [['001', 'Alice'], ['001', 'Pop'], ['001', 'Kris']];

    const [id, name] = _.first(arr); 
    const [id2, name2] = _.last(arr);

    return (
        <div className="container">
            <div>First Item: {firstItem.name}</div>
            <div>Last Item: {lastItem.name}</div>
            <hr />
            <div>First Item: {id} - {name}</div>
            <div>Last Item: {id2} - {name2}</div>
        </div>
    )
}
