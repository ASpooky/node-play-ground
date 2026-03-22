let count = 0;
let count2 = 0;

const max =30;

function runBlock() {
  // 1000回だけ計算する（チャンク処理）
  const chunkSize = 10;
  for (let i = 0; i < chunkSize; i++) {
    if (count >= max) return; // 終了
    console.log('loop1 num :',count)
    count++;
  }
  setImmediate(runBlock); 
}
function runBlock2() {
  // 1000回だけ計算する（チャンク処理）
  const chunkSize = 10;
  for (let i = 0; i < chunkSize; i++) {
    if (count2 >= max) return; // 終了
    console.log('loop2 num :',count2)
    count2++;
  }

  setImmediate(runBlock2); 
}

runBlock()
runBlock2()