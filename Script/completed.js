var completedpage=JSON.parse(localStorage.getItem("complatetodo"))
console.log(completedpage)
completedpage.map(function (ele) {
    var tr=document.createElement("tr")
    var td1=document.createElement("td");
    td1.innerText=ele.name;
    var td2=document.createElement("td");
    td2.innerText=ele.quantity;
    var td3=document.createElement("td");
    td3.innerText=ele.priority;
    
    console.log(tr)
  
    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr)


});