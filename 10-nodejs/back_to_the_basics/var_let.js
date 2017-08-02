var threeFunctions = [];

const constArr = [0,1,2]

for (let i = 0; i < 3; i++) {

  var printIndex = function() {
    console.log(i);
  }    

  threeFunctions.push(printIndex);

}

threeFunctions[0](); 
threeFunctions[1]();
threeFunctions[2]();

// 0, 1, 2 
