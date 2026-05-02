try{
console.log("Hello");
why();
}catch(error){
    console.log("Error Name: "+error.name);
    console.log("Error Message: "+error.message);
}

let a = 10;
let b = 20;
console.log("a+b = "+(a+b));

async function load(){
    try{
       const response = await fetch("https://nithish2321.github.io/API/api.json");
       if(response.ok){
           console.log("data loaded successfully");
           console.log(await response.json());
       }else{
           console.log("data not loaded");
       }
        
    }catch(error){
        console.error(error.message);
    }
}

load();