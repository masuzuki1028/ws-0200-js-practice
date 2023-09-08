/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
  for (let i = 0; i  < array.length -1; i++) {
    for (let y = 0; y < array.length - 1 -i; y++) {
      if (array[y] > array[y + 1] ) {
        let temp = array[y]
        array[y] = array[y + 1]
        array[y + 1] = temp
      }
    }
  }
  return array
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  for (let i = 1; i < array.length; i++){
    //要素iをtempに格納　　 1要素目(3)を格納
    const temp = array[i]
    let j = i -1
    //要素iを適切な位置に挿入するため、現在の要素より大きければ後ろにずらす
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]; // 0要素目(5)を1要素目(3)に格納する。
      j--; //-1にする
    }
    array[j + 1] = temp; // 0要素目に3を格納する
  }
  return array
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr
}

function merge(left, right) {
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (a, start = 0, end = (a.length -1)) {

};

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}
