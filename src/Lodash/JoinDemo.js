import React from 'react'
import _ from 'lodash'

export default function JoinDemo() {
    let arr = ['Khải', 'Nam', 'Minh'];

    let arrPerson = [
        {id: 1, name: 'Khải'},
        {id: 2, name: 'Nam'},
        {id: 3, name: 'Minh'}
    ]

    const result = arr.join('-');
    const resultLodash = _.join(arr, '*');
    const person = _.find(arrPerson, item => item.id === 2);

    return (
        <div>
            {result}
            <br />
            {resultLodash}
            <br />
            <div>
                <p>Name: {person.name} - ID: {person.id}</p>
            </div>
        </div>
    )
}
