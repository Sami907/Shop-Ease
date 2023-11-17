const apiUrl = "http://localhost:3000/SaveCarts";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  })
  .then((data) => {
    for (i = 0; i < data.length; i++) {
      var dyndiv = document.createElement("div");
      dyndiv.setAttribute("class", "cart-item");

      var dyndivChild = document.createElement("div");
      dyndivChild.setAttribute("class", "product-details");

      var dyndivPName = document.createElement("div");
      dyndivPName.setAttribute("class", "product-name");
      dyndivPName.innerText = data[i].ProductTitle;

      var dyndivPQty = document.createElement("div");
      dyndivPQty.setAttribute("class", "quantity");
      dyndivPQty.innerText = "Quantity : 2";

      var dyndivPPrice = document.createElement("div");
      dyndivPPrice.setAttribute("class", "price");
      dyndivPPrice.innerText = "Rs : " + data[i].Price;

      var dynTempdiv = document.createElement("div");
      var dynbtn = document.createElement("button");
      dynbtn.setAttribute("id", "btnRemove");
      dynbtn.innerText = "Remove";

      var dynImg = document.createElement("img")
      dynImg.setAttribute("src","Img/3225194.png")
      dynImg.setAttribute("class","product-image")

      document.body.append(dyndiv);
      dyndiv.appendChild(dynImg);
      dyndiv.appendChild(dyndivChild);
      dyndivChild.appendChild(dyndivPName);
      dyndivChild.appendChild(dyndivPQty);
      dyndiv.appendChild(dyndivPPrice);
      dyndiv.appendChild(dynTempdiv);
      dynTempdiv.appendChild(dynbtn);
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
