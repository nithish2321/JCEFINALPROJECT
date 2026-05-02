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
       console.log(response);
       let data = await response.json();
        if(response.ok){
           console.log("data loaded successfully");
           console.log(data);
       }else{
           console.log("data not loaded");
       }
        
       let category = data.meta.categories || [];
        
       const catgoriesS = document.getElementById("categories");
        
        
        category.forEach((element) =>{
            let opt = document.createElement("option");
            opt.value = element;
            opt.innerText = element;
            catgoriesS.appendChild(opt);
        });
        
       console.log(category);
        
    }catch(error){
        console.error(error.message);
    }
}

load();