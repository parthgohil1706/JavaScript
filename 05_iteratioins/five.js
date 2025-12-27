const codding = ["c++","c","java","python","ruby"]

// codding.forEach( function (val) {
//     console.log(val);
    
// } )

// codding.forEach( (item) => {
//     console.log(item);
// } )

// function printme(item) {
//     console.log(item);
// }
// codding.forEach(printme)

// codding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
    
// })

const mycodding=[
    {
        languagename: "javascript",
        languagefile: "js",
    },
    {
        languagename: "java",
        languagefile: "java",
    },
    {
        languagename: "python",
        languagefile: "py",
    },
    {
        languagename: "c++",
        languagefile: "c+",
    },
]

mycodding.forEach((item)=>{

    console.log(item.languagename);
    
})