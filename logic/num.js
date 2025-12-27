let num = 12;
const res = [];

for(let i = 1; i<= 10; i++){
    res.push(num);

    // num= (i % 2 === 1) ? num - 1 : num + 2;
    if(i % 2 === 1)
    {

        num = num - 1;
    }
    else{
        num = num + 2;
    }
    
}
console.log(res.join(','))