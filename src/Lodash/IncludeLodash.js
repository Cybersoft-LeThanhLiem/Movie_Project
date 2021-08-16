import React from 'react'
import _ from 'lodash'

export default function IncludeLodash() {
    const arr = ['1', '2', '3'];
    console.log(_.includes(arr, '1'));

    const object = {id: 1, name: "Nguyen Van A", age: 18};
    console.log(_.includes(object, 2));

    return (
        <div>
            
        </div>
    )
}
