

let xhd = new XMLHttpRequest
let url = "https://66e5ad0f5cc7f9b6273e0ca9.mockapi.io/f16";

xhd.onload = function(){

    try{
        let data = JSON.parse(this.responseText);
        console.log(data);
        let products = document.getElementById("products");

        data.map((item) =>{
            products.innerHTML += `
            <div class="product">
            <h5 class="type">${item.type}</h5>
            <img class="img" src="${item.img}">
            <h2 class="name">${item.name}</h2>
            <h4 class="price">${item.price} so'm</h4>
            <h3 class="description">${item.description}</p>
            <button class="btn">Buyurtma berish</button>
            </div>

            `
        })

        
    }catch(e){
        console.log("Error" .e);
    }
    
}

xhd.open('GET',url);
xhd.send();