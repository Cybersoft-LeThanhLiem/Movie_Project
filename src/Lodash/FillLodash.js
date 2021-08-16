import React from 'react'
import _ from 'lodash'

export default function FillLodash() {
    var arr = [
        {id: 1, name: 'IPhone'},
        {id: 2, name: 'IPhone X'},
        {id: 3, name: 'IPhone XS'}
    ];

    _.fill(arr, {id: 5, name:'Samsung Galaxy Note 10'}, 1, 2);
    console.log(arr);

    return (
        <div>
            
        </div>
    )
}
