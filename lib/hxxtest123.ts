const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => {
  console.log(`累计值：${acc}，当前值：${curr}`); // 打印过程便于理解
  return acc + curr;
},10);
console.log('sum :>> ', sum);