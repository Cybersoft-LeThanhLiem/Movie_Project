import React from 'react'
import _ from 'lodash'

export default function CompareObjectArray() {
    const arrA = [1, 2];
    const arrB = [2, 1];
    const resultN = _.isEqual(arrA.sort(), arrB.sort());
    console.log(resultN);

    const arrObject1 = [{id: 1, name: 'Khai'}, {id: 2, name: 'Minh'}];
    const arrObject2 = [{id: 1, name: 'Khai'}, {id: 2, name: 'Hang'}, {id: 3, name: 'Hoa'}];
    const result1 = _.differenceWith(arrObject2, arrObject1, _.isEqual);
    console.log(result1);

    return (
        <div>
            
        </div>
    )
}
