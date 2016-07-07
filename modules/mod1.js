module.exports = function genRanNum(min, max){
  return Math.random() * (max - min) + min;
}
