
const programming = ["java", "python", "ruby"]

console.log("Output Using forof in array");
for (const key of programming) {
    
    console.log(key);
} 
console.log("Output Using forin in array");
for (const index in programming) {
    
    console.log(index + ":" + programming[index]);
}

const map = new Map();
map.set("IN","India");
map.set("USA","America")

console.log("Output Using forof in map");
for (const key of map) {    
    console.log(key);
}

console.log("Output Using forof in map");
// Destructure way as below
for (const [key,value] of map) {
    
    console.log(key + ":" + value); // IN:India , USA:America
}
console.log("Output Using forin in map");
for (const [key,value] in map) {    
    console.log(key + ":" + value);
}

const myObject = {
    js:"JAVASCRIPT",
    java:"JAVA"
}
//for (const [key,value] of myObject) {
    //console.log(key + ":" + value); // myObject is not iterable
//}
console.log("Output Using forin in literal object");
for (const key in myObject) {
    
    console.log(key + ":" + myObject[key]);
}


// The most common loop method is foreach and map
const coding = ["js", "cpp", "php"]
coding.forEach((item)=>{
    console.log(item);
});
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]

myCoding.forEach((item)=>{
    let {languageName,languageFileName} = item
    console.log(languageName + ":" + languageFileName);
})


