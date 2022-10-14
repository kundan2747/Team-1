var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cartArr);
var loginUser = JSON.parse(localStorage.getItem("loginUser"));
if (loginUser) document.getElementById("user").innerText = loginUser.firstName;
document.getElementById("user").style.fontSize = "smaller";
document.getElementById("user").style.color = "grey";

var cartproducts = document.querySelector(".cartproducts");
function emptyCartPage() {
  var div = document.createElement("div");
  div.setAttribute("id", "emptyCart");
  var h1 = document.createElement("h1");
  var shopbtn = document.createElement("button");
  shopbtn.setAttribute("onclick", "redirect()");
  h1.innerText = "Your Cart is empty";
  shopbtn.innerText = "Continue Shopping";
  div.append(h1, shopbtn);
  cartproducts.append(div);
  document.getElementById("table").style.display = "none";
  document.getElementById("subtotal").style.display = "none";
}

if (cartArr.length == 0) {
  emptyCartPage();
}
function redirect() {
  window.location.href = "./index.html";
}

display(cartArr);
function display(arr) {
  var ptotal = 0;
  var currPrice = 0;
  document.querySelector("tbody").innerHTML = "";
  document.getElementById("subtotal").innerHTML = "";
  arr.map(function (ele, indx) {
    currPrice = ele.price;

    var quantity = document.createElement("td");
    var price = document.createElement("td");
    price.setAttribute("class", "ptotal");
    var imgtd = document.createElement("td");
    var img = document.createElement("img");
    var tr = document.createElement("tr");
    var td1div = document.createElement("div");
    td1div.setAttribute("class", "prodDes");
    var name = document.createElement("p");
    var productPrice = document.createElement("p");
    name.innerText = ele.name;
    productPrice.innerText = "$" + ele.price;

    img.setAttribute("src", ele.image);
    td1div.append(img, name, productPrice);
    var qntdiv = document.createElement("div");
    var delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.addEventListener("click", function () {
      deleterow(indx);
    });

    var qnt = document.createElement("select");

    qnt.setAttribute("onchange", `updateTotal(${indx})`);
    for (var i = 0; i < 6; i++) {
      var option = document.createElement("option");
      option.innerText = i + 1;
      option.setAttribute("value", i + 1);

      qnt.appendChild(option);
    }
    qntdiv.append(qnt, delbtn);
    quantity.append(qntdiv);

    price.innerText = ele.price;
    ptotal = ptotal + ele.price;
    imgtd.append(td1div);
    tr.append(imgtd, quantity, price);

    document.getElementById("tbody").append(tr);
  });
  var h3 = document.createElement("p");
  h3.innerText = "Subtotal: $ " + ptotal;
  document.getElementById("subtotal").append(h3);
}
function updateTotal(indx) {
  var x = document.querySelectorAll(".ptotal");
  var updatedPrice = cartArr[indx].price * event.target.value;
  x[indx].innerText = updatedPrice;
  var total = 0;

  for (var i = 0; i < cartArr.length; i++) {
    if (i == indx) total = total + updatedPrice;
    else {
      total = cartArr[i].price + total;
    }
  }
  document.getElementById("subtotal").innerText = "Subtotal : $" + total;
}

function deleterow(i) {
  console.log(i);
  cartArr.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  display(JSON.parse(localStorage.getItem("cart")));
  if (cartArr.length == 0) {
    emptyCartPage();
  }
}
