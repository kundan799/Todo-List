document.querySelector("form").addEventListener("submit",mytakefrominput);

var inputdata=JSON.parse(localStorage.getItem("inputdata"))||[];
function mytakefrominput(){
  event.preventDefault()
 // console.log("kundan");
  var name=document.querySelector("#name").value;
  var quantity=document.querySelector("#qty").value;
  var priority=document.querySelector("#priority").value;
 // console.log(name,quantity,priority);
  var tobj={
    name:name,
    quantity:quantity,
    priority:priority,
  };
  //console.log(obj)
  inputdata.push(tobj);
  console.log(inputdata)
  localStorage.setItem("inputdata",JSON.stringify(inputdata))


 
}
