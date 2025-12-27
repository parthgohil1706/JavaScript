let a = 0, b = 1;
res = [];

function fibonacci(n){
    res.push(a);
    res.push(b);

    for(let i = 2;i<n;i++){
        let c = a + b ;
        res.push(c);
        a=b;
        b=c;
    }
}

fibonacci(8)
console.log(res.join(","))