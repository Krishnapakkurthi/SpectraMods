let x=document.getElementsByClassName("child");
console.log(x);
for (let index = 0; index < x.length; index++) {
    const element = x[index];
    console.log(element);
    
}
Array.from(x).forEach(element => {
    element.style.color= 'red';
    console.log(element);
    
});
