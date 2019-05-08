// Example
function ourReusableFunction() {
    console.log("Heyya, World");
  }
  
  ourReusableFunction();
  
  // Only change code below this line
  function reusableFunction(){
      ourReusableFunction();
      console.log("Hi World");
  }
  
  reusableFunction();