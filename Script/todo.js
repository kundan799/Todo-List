var completed=JSON.parse(localStorage.getItem("inputdata"))
// console.log(completed)--code is wright till 

var complate=JSON.parse(localStorage.getItem("complatetodo"))||[];
window.addEventListener("load", function () {
    display(completed);
  });
function handleNameSort(){
    //console.log("working")--code working
    var sorted=document.querySelector("#sortNames").value;
    //console.log(sorted)--code working
    if(sorted=="ascending"){
        completed.sort(function (a,b) {
            if(a.name>b.name) return 1;
            if(a.name<b.name) return -1;
            return 0

        });
        console.log(completed)
        display(completed);

    }
    if(sorted=="descending"){
        completed.sort(function (a,b) {
            if(a.name>b.name) return -1;
            if(a.name<b.name) return 1;
            return 0

        });
        console.log(completed)
        display(completed);

    }
}
function display(completed){
completed.map(function(ele) {
    // document.querySelector("tbody").innerHTML="";
    var tr=document.createElement("tr")
    var td1=document.createElement("td");
    td1.innerText=ele.name;
    var td2=document.createElement("td");
    td2.innerText=ele.quantity;
    var td3=document.createElement("td");
    td3.innerText=ele.priority;
    
    console.log(tr)
    var td4=document.createElement("td");
    td4.innerText="complate" 
    td4.style.color="blue";
        td4.addEventListener("click",function () {
            markascomplate(ele)

        });
    tr.append(td1,td2,td3,td4);
    document.querySelector("tbody").append(tr)


});
}
function  markascomplate(ele){
    console.log(ele)
    complate.push(ele)
    // console.log(complate) --till complate
    localStorage.setItem("complatetodo",JSON.stringify(complate))
}