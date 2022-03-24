var markdatafromlocal=JSON.parse(localStorage.getItem("addtomarkcomplate"));
console.log(markdatafromlocal);
markdatafromlocal.map(function (ele) {
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=ele.itemName;
    var td2=document.createElement("td");
    td2.innerText=ele.itemQty;
    var td3=document.createElement("td");
    td3.innerText=ele.itemPrior;
    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr)


});