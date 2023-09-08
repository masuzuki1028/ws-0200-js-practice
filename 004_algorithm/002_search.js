
/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */
// 線形探索とは、データ探索アルゴリズムの一つで、配列などに格納されたデータ列の先頭から末尾まで順番に、探しているデータと一致するか比較していく手法。
function linearSearch (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return 1
    }
  }
  return -1
}

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */
//バイナリーサーチ(二分探索とも呼ばれる)はソート済みの配列において、検索する間隔を半分に分割しながらデータを探し出すアルゴリズム
function binarySearch (array, target) {
  for (let i = 0; i <= array.length / 2; i++) {
    if (array[i] === target || array[array.length -i] === target ) {
      return i
    }
  }
  return -1
}

module.exports = {
  linearSearch,
  binarySearch
}
