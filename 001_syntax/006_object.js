/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  const x = {
    name: 'Bob',
    age: 32,
    gender: 'male'
  }
  return x
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  const A = {
    name: 'Bob',
    age: 32,
    gender: 'male'
  }
  const B = {
    name: 'Mary',
    age: 37,
    gender: 'female'
  }
  if (A === person) {
    return A
  } else {
    return B
  }
} 

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
  let x = {};
  for (let i = 0; i <= persons.length; i++) {
    x[persons[i]] = i + 1
  }
  return x
}

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  const obj = Object.assign({}, array)
  for (let x = 0; x < Object.keys(obj).length; x++ ) {
    for (let j = x + 1; j < Object.keys(obj).length; j++ ) {
        if (obj[x] === obj[j]) {
            return true         
        }
    }
  }
  return false
}


module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
