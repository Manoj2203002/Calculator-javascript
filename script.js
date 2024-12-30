const input=document.getElementById('Input');
function Addvalue(value){
    input.value=input.value+value;
}
function Delete(){
    input.value='';
}
function calculate(){
  if(input.value==''){
    input.value="Undefined";
}
   if (/^[A-za-z]+$/.test(input.value))
   {
    input.value="error"
   }
else{
    input.value=eval(input.value);
}  
}
function erase(){
    input.value=input.value.slice(0,-1)
}