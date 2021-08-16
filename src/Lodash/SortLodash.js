import React from 'react'
import _ from 'lodash'

export default function SortLodash() {
    const users = [
        {id: 5,name: "Fred", age: 48},
        {id: 1,name: "Kato", age: 36},
        {id: 7,name: "Kato", age: 47},
        {id: 9,name: "Kato", age: 33},
        {id: 4,name: "Bake", age: 25},
        {id: 2,name: "June", age: 30}
    ];

    const resultSortByAge = _.sortBy(users, [item => item.age]);
    console.log(resultSortByAge);

    const result = _.sortBy(users, ['name', 'id']);
    console.log(result);

    return (
        <div>
            
        </div>
    )
}
