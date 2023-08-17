
// 從客人桌子收回來的髒杯盤們
const tablewares = ['杯子_1', '杯子_2', '小盤子_1', '大盤子_1', '杯子_3', '大盤子_2', '中盤子_1', '杯子_4'];

function goWash(tablewaresToBeWashed) {

  /**
   * 定義一個變數 i，用來記錄目前要洗的杯盤是陣列中的第幾個餐具
   * 當 i 小於 tablewaresToBeWashed 的長度時，就繼續執行迴圈
   * 每次迴圈結束，i 就會加 1（這就是為什麼 i 被宣告為 let 而不是 const）
   */
  for (let i = 0; i < tablewaresToBeWashed.length; i++) {
    console.log(`現在要洗的是：${tablewaresToBeWashed[i]}`);
    console.log(`開始洗第一槽：正在沖掉 ${tablewaresToBeWashed[i]} 上的髒污`);
    console.log(`開始洗第二槽：正在用洗碗精搓洗 ${tablewaresToBeWashed[i]}`);
    console.log(`開始洗第三槽：正在清水沖洗 ${tablewaresToBeWashed[i]}`);
    console.log(`將 ${tablewaresToBeWashed[i]} 放上架子`);
  }

  console.log('把所有的架子放進烘碗機烘乾');
}

// 呼叫 goWash 函式，把 tablewares 陣列傳進去，開始洗碗
goWash(tablewares)




function doWash(tableware) {
  console.log(`開始洗第一槽：正在沖掉 ${tableware} 上的髒污`);
  console.log(`開始洗第二槽：正在用洗碗精搓洗 ${tableware}`);
  console.log(`開始洗第三槽：正在清水沖洗 ${tableware}`);
  console.log(`將 ${tableware} 放上架子`);
}

doWash(tablewares[0])
doWash(tablewares[1])
doWash(tablewares[2])
doWash(tablewares[3])
doWash(tablewares[4])
doWash(tablewares[5])
doWash(tablewares[6])
doWash(tablewares[7])


let i = 0;

while (i <= 10) {
  if (i % 2 === 0) {
    console.log(`${i} 是偶數`);
  }
  i++;
}
