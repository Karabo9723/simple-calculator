function add(){
  var position = 0;
  var sum = 0;
  while(position < arguments.length){
    sum = sum + arguments[position];
    position = position + 1;
  }
  return sum;
}
function multiply(){
  var position = 0;
  var product = 1;
  while(position < arguments.length){
    product = product * arguments[position];
    position = position + 1;
  }
  return product;
}
