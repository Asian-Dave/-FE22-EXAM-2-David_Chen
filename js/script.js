let arrayItems = [];

function Product(itemName, img, description, price, importance, btnColor) {
    this.itemName = itemName;
    this.img = img;
    this.description = description;
    this.price = price;
    this.importance = importance;
    this.btnColor = btnColor;
    arrayItems.push(this);
}
new Product("banana", "https://cdn.pixabay.com/photo/2017/03/31/19/05/banana-bunch-2192181_1280.jpg", "just a banana", 10, 0, "btn-success");
new Product("chocolate", "https://cdn.pixabay.com/photo/2013/09/18/18/24/chocolate-183543_1280.jpg", "just a chocolate", 32, 0, "btn-success");
new Product("popsicle", "https://cdn.pixabay.com/photo/2017/12/05/17/45/picole-2999877_1280.jpg", "just a popsicle", 12, 0, "btn-success");
new Product("Apple", "https://cdn.pixabay.com/photo/2020/05/17/19/43/apple-5183288_1280.jpg", "just an apple", 54, 0, "btn-success");
renderCards();

function renderCards() {
    document.getElementById("insert-card").innerHTML = "";
    arrayItems.forEach(element => {
        createCard(element);
    });
    attachEventListeners();
}

document.getElementById("sort-name").addEventListener("click", function() {
    arrayItems.sort((a, b) => a.itemName.localeCompare(b.itemName));
    console.log(arrayItems);
    renderCards();
    document.getElementById("sorted").innerText = "Sort By: Name:";


});
document.getElementById("sort-price").addEventListener("click", function() {
    arrayItems.sort((a, b) => a.price - b.price);
    console.log(arrayItems);
    renderCards();
    document.getElementById("sorted").innerText = "Sort By: Price:";


});
document.getElementById("sort-importance").addEventListener("click", function() {
    arrayItems.sort((a, b) => b.importance - a.importance);
    console.log(arrayItems);
    renderCards();
    document.getElementById("sorted").innerText = "Sort By: Imp:";


});
document.getElementById("new-item").addEventListener("click", function() {
    new Product(prompt("Product Name"), prompt("url img"), prompt("describe the product"), Number(prompt("price")), 0, "btn-success");
    renderCards();
})

function createCard(object) {
    document.getElementById("insert-card").innerHTML += `
     <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card" style="width: 20rem; padding-left:1rem;padding-right:1rem;padding-top:1vh">
                    <div class="btn-head" style="scale:1.1; padding-bottom:1vh">
                        <button class="btn btn-primary" type="button" style="margin-right:10rem; scale:0.68; ">Search</button>
                        <img src="../icon/ribbon.png" alt="save icon" width="20px">
                        <span style="font-weight: bolder; font-size: 20px; margin:3px;">⋮</span>
                    </div>
                    <img class="card-img-top" src="${object.img}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title" style="text-align:center;">${object.itemName}</h5>
                        <p class="card-text" style="text-align:center">${object.description} ${object.price}€</p>
                        <hr>
                        <p><span>⚠ Priority level:</span> <button class="btn ${object.btnColor} importance" style="scale:0.7;" id="${object.itemName}">${object.importance}</button></p>
                        <p><span>📅 Deadline: 09.06.2024</span></p>
                        <hr>
                        <div style="display: flex; justify-content:end;">
                            <button class="btn btn-danger" type="button" style="scale:0.9">🗑Delete</button>
                            <button class="btn btn-success" type="button" style="scale:0.9">☑Done</button>
                        </div>
                    </div>

                </div>
            </div>`;
}

function attachEventListeners() {
    let impBtn = document.querySelectorAll(".importance");
    impBtn.forEach((element, i) => {
        element.addEventListener("click", function() {

            if (arrayItems[i].importance == 5) {

                arrayItems[i].importance = 0;
            } else {
                arrayItems[i].importance += 1;
                console.log(arrayItems[i].importance);

            }
            document.getElementById(arrayItems[i].itemName).innerText = arrayItems[i].importance;
            if (arrayItems[i].importance >= 0 && arrayItems[i].importance < 1) {
                arrayItems[i].btnColor = "btn-success";
                element.classList.remove("btn-warning");
                element.classList.remove("btn-danger");
                element.classList.add(arrayItems[i].btnColor);
                console.log(arrayItems[i].btnColor);

            } else if (arrayItems[i].importance >= 2 && arrayItems[i].importance < 3) {
                arrayItems[i].btnColor = "btn-warning";
                element.classList.add(arrayItems[i].btnColor);
                element.classList.remove("btn-danger");
                element.classList.remove("btn-success");
                console.log(arrayItems[i].btnColor);

            } else if (arrayItems[i].importance >= 4 && arrayItems[i].importance < 5) {
                arrayItems[i].btnColor = "btn-danger";
                element.classList.remove("btn-warning");
                element.classList.add(arrayItems[i].btnColor);
                element.classList.remove("btn-success");
                console.log(arrayItems[i].btnColor);

            }

        })
    })
};