import React from 'react'
import _ from 'lodash'

export default function UniqLodash() {
    const arr = [1, 2, 2, 2, 4, 5, 5, 6];
    console.log(_.uniq(arr));

    const arrN = [
        {id: 1, name: 'IphoneX', price: 1000},
        {id: 2, name: 'IphoneXS', price: 2000},
        {id: 3, name: 'Iphone 11 Pro', price: 3000},
        {id: 3, name: 'Iphone 12', price: 4000},
        {id: 3, name: 'Iphone 12', price: 4000},
        {id: 5, name: 'Iphone 10', price: 5000},
        {id: 6, name: 'Iphone 8', price: 6000},
    ];

    console.log(_.uniqBy(arrN, 'id'));

    return (
        <div>
            
        </div>
    )
}
