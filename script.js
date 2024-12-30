const input=document.getElementById('Input');
function Addvalue(value){
    input.value=input.value+value;
}
function Delete(){
    input.value='';
}
function calculate(){
  if(input.value==''){
    alert("Enter som value to calculate")

}
   if (/^[A-za-z]+$/.test(input.value))
   {
    input.value=+("erroe")
   }
else{
    input.value=eval(input.value);
}  
}
function erase(){
    input.value=input.value.slice(0,-1)
}