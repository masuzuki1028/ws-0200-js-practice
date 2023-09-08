/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  let x = "";
  // if ( 0 < num) {
    x = str.slice(-num)
    x += str.slice(0,-num)
  return x
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  return str.replace(/[aeiou]/g, '')
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  let x = 0;
  let z = 0;
  for (let i = 0; i < s1.length; i += s2.length ) {
      z = s1.indexOf(s2)
      if (z !== -1) {
          s1 = s1.slice(s2.length)
          x = x + 1            
      }
  }
  return x
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  let x =  "";
  for (let i = str.length - 1; 0 <= i; i--) {
    x = x + str[i]
  }
  return  str === x
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  if (num === 1) {
    return false
  }
    
  if (num === 2) {
    return true
  }

  if (num % 2 === 0) {
      return false
  }

  for (let i = 3; i*i <= num; i = i + 2) {
    if ( num % i === 0) {
      return false
    }
  }
  return true
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let x = 0;
  for (let i = 0; i < array.length; i++) {
    if (4 !== array[i] && 4 !== array[i - 1]) { 
      x = x + array[i]
    }
  }
  return x
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
