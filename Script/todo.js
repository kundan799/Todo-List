var todoItems = JSON.parse(localStorage.getItem("todoData"));
console.log(todoItems);
var addtomarkcomplate=JSON.parse(localStorage.getItem("addtomarkcomplate"))||[];
todoItems.map(function (ele) {
    var row= document.createElement("tr")
    var td1 = document.createElement("td");
    td1.innerText = ele.itemName;
    var td2 = document.createElement("td");
    td2.innerText = ele.itemQty;
    var td3=document.createElement("td");
    td3.innerText=ele.itemPrior;
   
    console.log(td1, td2,td3)//right hai
    var td4=document.createElement("td");
    td4.innerText="complete";
    td4.style.cursor="pointer";
    td4.style.color="teal";
    td4.addEventListener("click",function(){
        markcomplate(ele)
    })
    row.append(td1,td2,td3,td4)
    document.querySelector("tbody").append(row)

});
function markcomplate(ele){
    console.log(ele);
    addtomarkcomplate.push(ele);
    localStorage.setItem("addtomarkcomplate",JSON.stringify(addtomarkcomplate))
}
