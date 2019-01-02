const drv = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drv.push(name);
}
function destructivelyPrependDriver(name){
  drv.unshift(name);
}
function destructivelyRemoveLastDriver(){
  drv.pop();
}
function destructivelyRemoveFirstDriver(){
  drv.shift();
}
function appendDriver(name){
return [...drv,name];

}
function prependDriver(name){
  return [name, ...drv];
}
function removeLastDriver(){
  return drv.slice(0,drv.length-1);
}
function removeFirstDriver(){
  return drv.slice(1);
}
