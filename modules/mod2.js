module.exports = function convertToUSD(val){
  return val.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
}
