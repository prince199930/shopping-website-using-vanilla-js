var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
        1,
        1,
        0,
        1,
        0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}
// root Node
var root = document.getElementById("root");

var t = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
// First div child of root

var preview = document.createElement("div");
preview.style.width = "40%"
var child_preview = document.createElement("img");
child_preview.style.width = "100%";
const changePreview = (change) => {
    child_preview.src = change;
}
changePreview(t);
preview.appendChild(child_preview);
root.appendChild(preview);



// Second div child of root
var details = document.createElement("div");
details.style.width = "56%";
var detail_div1 = document.createElement("div");
detail_div1.style.lineHeight = "30px";
var head = document.createElement("h1")
head.appendChild(document.createTextNode(productData.name));

var tittle = document.createElement("p")
tittle.appendChild(document.createTextNode(productData.brand));
tittle.style.color ="#888888";
var price = document.createElement("p")
price.appendChild(document.createTextNode("Price :" + " " + productData.price));
price.style.color ="#888888";
var desc = document.createElement("p")
desc.appendChild(document.createTextNode("Description"));
desc.style.color ="#888888";
var about = document.createElement("p")
about.appendChild(document.createTextNode(productData.description));
about.style.color ="#888888";
var product = document.createElement("p")
product.appendChild(document.createTextNode("Product Preview"));
product.style.color ="#888888";
detail_div1.appendChild(head);
detail_div1.appendChild(tittle);
detail_div1.appendChild(price);
detail_div1.appendChild(desc);
detail_div1.appendChild(about);
detail_div1.appendChild(product);
details.appendChild(detail_div1);
var details_div2 = document.createElement("div");
details_div2.style.marginTop = '10px';
details_div2.style.display = "flex"
details_div2.style.columnGap = "3%"
var flag = true;
for (var i in productData["photos"]) {
    var preview_div = document.createElement("div");
    if (flag) {
        preview_div.style.border = "2px solid green";
        flag = false;
    }
    preview_div.onclick = (e) => func(e);
    preview_div.style.width = "17%";
    var pri_img = document.createElement("img");
    pri_img.src = productData["photos"][i];
    pri_img.style.width = "100%";
    preview_div.appendChild(pri_img)
    details_div2.appendChild(preview_div)
}
var addbtn = document.createElement("button");
addbtn.style.backgroundColor = "#009688"
addbtn.style.borderRadius = "4px";
addbtn.style.padding = "7px"
addbtn.style.border = "none";
addbtn.appendChild(document.createTextNode("ADD TO CART"));
details.appendChild(addbtn);
details.appendChild(details_div2);
root.appendChild(details);

// function for image onclick
function func(e) {
    e.target.parentNode.style.border = "2px solid green";
    e.target.parentNode.style.borderRadius = "4px";
    e.target.parentNode.style.padding = "2px"
    var change = e.target.getAttribute('src');
    changePreview(change)
    removeBorder(e.target);
}

var removeBorder = function (elem) {
    var all = elem.parentNode.parentNode.children;

    for (var j in all) {
        var x = all[j]
        if (x != elem.parentNode) {
            x.style.border = 'none';
        }
    }
};