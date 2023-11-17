const apiUrl = "http://localhost:3000/LatestProducts";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => 
  {
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "cardMain");

    for (let i = 0; i < 6; i++) {

      var dyndiv = document.createElement("div");
      dyndiv.setAttribute("class", "card");

      var dynImage = document.createElement("img");
      dynImage.setAttribute("src", "https://via.placeholder.com/300");
      dynImage.setAttribute("alt", "Loading Image");

      var dyndivCardContent = document.createElement("div");
      dyndivCardContent.setAttribute("class", "card-content");

      var dynProductHeading = document.createElement("h3");
      dynProductHeading.innerText = data[i].ProductTitle;

      var dynProductPrice = document.createElement("h5");
      dynProductPrice.innerText = "Rs:" + data[i].Price;

      var dynProductDesc = document.createElement("p");
      dynProductDesc.innerText = data[i].ProductDescription;

      var dynDivCardButtons = document.createElement("div");
      dynDivCardButtons.setAttribute("class", "card-buttons");

      var dynButton = document.createElement("a");
      dynButton.setAttribute("class", "button add-to-cart anchorcss");
      dynButton.setAttribute("id", "acart" + data[i].id);
      dynButton.innerText = "Add Cart";

      document.body.addEventListener("click", function(event) 
      {
        if (event.target.id === "acart" + data[i].id) 
        {
            AddToCart(event.target.id,event.target.innerText);
        }
    });
    
    function AddToCart(id,btnText) 
    { 
        if(btnText == "Remove Cart")
        {
            let Cart =+ document.getElementById("bdg").innerText;
            Cart = Cart - 1;
            document.getElementById("bdg").innerText = Cart;
            document.getElementById(id).innerText = "Add Cart"
        }
        else
        {
            let Cart =+ document.getElementById("bdg").innerText;
            Cart = Cart + 1;
            document.getElementById("bdg").innerText = Cart;
            document.getElementById(id).innerText = "Remove Cart"

            const apiUrl = "http://localhost:3000/LatestProducts/" + id.substring(5);

            fetch(apiUrl)
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
              })
              .then((data) => 
              {  
                const apiUrl = 'http://localhost:3000/SaveCarts';

                const postData = 
                {
                    ProductId:data.id,
                    ProductTitle: data.ProductTitle,
                    ProductDescription: data.ProductDescription,
                    Price:data.Price
                };
                
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postData)
                };
                
                fetch(apiUrl, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Data received:', data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
              })
              .catch((error) => {
                console.error("Fetch error:", error);
              });
        }
    }

      var dynButtonBuy = document.createElement("a");
      dynButtonBuy.setAttribute("href", "#");
      dynButtonBuy.setAttribute("class", "button buy anchorcss");
      dynButtonBuy.setAttribute("id", "abuy");
      dynButtonBuy.innerText = "Buy";
        
      dyndiv.appendChild(dynImage);
      dyndiv.appendChild(dyndivCardContent);
      dyndivCardContent.appendChild(dynProductHeading);
      dyndivCardContent.appendChild(dynProductDesc);
      dyndivCardContent.appendChild(dynProductPrice);
      dyndivCardContent.appendChild(dynDivCardButtons);
      dynDivCardButtons.appendChild(dynButton);
      dynDivCardButtons.appendChild(dynButtonBuy);
      mainDiv.appendChild(dyndiv);
      document.body.append(mainDiv);
    }

      var btn = document.createElement("button")
      btn.setAttribute("id","DynamicBtnCss");
      btn.innerText = "Show All";

      var heading = document.createElement("h3")
      heading.setAttribute("id","headlp");
      heading.innerText = "For You";

      document.body.append(btn)
      document.body.append(heading)
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

  function openForm() 
  {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() 
  {
    document.getElementById("myForm").style.display = "none";
  }