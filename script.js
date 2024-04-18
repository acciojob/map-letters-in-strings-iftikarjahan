//your JS code here. If required.
function mapLetters(str){
	
	let obj={};
for(let i=0;i<str.length;i++){
  if(!obj.hasOwnProperty(str[i])){
    obj[str[i]]=[i]
  }
  else{
    let arr=obj[str[i]];
    arr.push(i);
  }
}

return obj;
}

module.exports = mapLetters