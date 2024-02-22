function display (num){
  input.value+= num

  //input box always returns string
}

function clearAll(){
  input.value= ""

}

function back(){
  input.value= input.value.slice(0,-1)
}

function equal(){
  try {
    input.value= eval(input.value)
  } catch (error) {
    input.value=` error`
    setTimeout(()=>{
      input.value =""
    },1000)
    
  }
}