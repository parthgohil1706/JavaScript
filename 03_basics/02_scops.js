
let a =300
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ",a);
  
//   var c = 30;
}

// console.log(a);
// console.log(b);


function one(){
  const usernamme = "Parth"

  function two(){
    const websie = "yputube"
    console.log(usernamme);
    
  }
  // console.log(websie);
  two()
  
}
// one()

if (true) {
  const username = "Parth"
  if (username === "Parth") {
    const webstie = "youtube"
    // console.log(username +  webstie);
  }
  // console.log(websie);     //errror
  
}
// console.log(username);     //error


//+++++++++++++++++++++++++++++new+++++++++++++++++
addone(5)
function addone(num) {
    return num+ 1
}
console.log(addone(5))



const addtwo = function (num) {
  return num + 2
}
addtwo(5)