```js
const function linear_search (arr, target) {
  for (let index = 0; index < arr.length ;index++) {
    if ( arr[index] === target) return index
    return -1
  }
}

const answer = linear_search([1,2,3,4,5], 5);
console.log(answer)
```
