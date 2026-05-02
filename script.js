try {
    console.log("Hello");
    why();
} catch (error) {
    console.log("Error Name: " + error.name);
    console.log("Error Message: " + error.message);
}

let a = 10;
let b = 20;
console.log("a+b = " + (a + b));

async function load() {
    try {
        const response = await fetch("https://nithish2321.github.io/API/api.json");
        console.log(response);
        let data = await response.json();
        if (response.ok) {
            console.log("data loaded successfully");
            console.log(data);
        } else {
            console.log("data not loaded");
        }

        let category = data.meta.categories || [];

        const catgoriesS = document.getElementById("categories");

        category.forEach((element) => {
            let opt = document.createElement("option");
            opt.value = element;
            opt.innerText = element;
            catgoriesS.appendChild(opt);
        });

        console.log(category);

        const blog = data.blogs || [];

        console.log(blog);

        const container = document.getElementsByClassName("container")[0];

        blog.forEach((element) => {
            let card = document.createElement("div");
            card.className = "cards";
            card.innerHTML = `<p>${element.id}</p>`;
            let cat = element.category || "";
            switch (cat) {
                case "Business":
                    card.innerHTML += `<img src = './images/business.png' alt='image' height='200px' width='300px'></img>`;
                    break;
                case "Programming":
                    card.innerHTML += `<img src = './images/code.png' alt='image' height='200px' width='300px'></img>`;
                    break;
                case "Culture":
                    card.innerHTML += `<img src = './images/culture.jpg' alt='image' height='200px' width='300px'></img>`;
                    break;
                case "Design":
                    card.innerHTML += `<img src = './images/design.jpg' alt='image' height='200px' width='300px'></img>`;
                    break;
                case "Education":
                    card.innerHTML += `<img src = './images/ed.png' alt='image' height='200px' width='300px'></img>`;
                    break;
                case "Environment":
                    card.innerHTML += `<img src = './images/envi.png' alt='image' height='200px' width='300px'></img>`;
                    break;
                case "Health":
                    card.innerHTML += `<img src = './images/health.png' alt='image' height='200px' width='300px'></img>`;
                    break;
                case "Lifestyle":
                    card.innerHTML += `<img src = './images/lifestyle.png' alt='image' height='200px' width='300px'></img>`;
                    break;
                case "Science":
                    card.innerHTML += `<img src = './images/science.png' alt='image' height='200px' width='300px'></img>`;
                    break;
                case "Technology":
                    card.innerHTML += `<img src = './images/technology.png' alt='image' height='200px' width='300px'></img>`;
                    break;
                case "Travel":
                    card.innerHTML += `<img src = './images/travel.png' alt='image' height='200px' width='300px'></img>`;
                    break;
            }
            card.innerHTML += `<h1>${element.title}</h1>`;
            container.appendChild(card);
        });
    } catch (error) {
        console.error(error.message);
    }
}

load();
