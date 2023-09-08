
/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence (n, sum = 0) {
  if (n === 0) {
    return 0;
  }

  return n + sumSequence(n-1)
}


/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

function fibonacci (num) {
  const x = [1,1];
  for (i = 2; i < num; i++) {
    const a = x[i -1];
    const b = x[i -2];
    x.push(a + b)
  }
  return x
}


/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize (node, sum = 0) {
  let result = 0;
  result += node.size

  // for ... ofを利用
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of
  if (node.children && 0 < node.children.length) {
    for (const x of node.children) {
      result += fileSize(x)
    }
  }
  return result
  // if (node.children && 0 < node.children.length) {
  //   for (let i = 0; i < node.children.length; i++ ) {
  //     if (node.children[i].children && 0 < node.children[i].children.length) {
  //       for (let x = 0; x < node.children[i].children.length; x++ ) {
  //         if (node.children[i].children[x].children && 0 < node.children[i].children[x].children.length) {
  //           for (let y = 0; y < node.children[i].children[x].children.length; y++ ) {
  //             result += node.children[i].children[x].children[y].size
  //           }
  //         }
  //         result += node.children[i].children[x].size
  //       }
  //     }
  //     result += node.children[i].size
  //   }
  // }
  // return result
}

module.exports = {
  sumSequence,
  fibonacci,
  fileSize
}
