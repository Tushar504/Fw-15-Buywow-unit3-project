var data = [
    {
     
      price:
        "Onion Hair Oil With Black Seed Oil Extracts Helps Control Hair Fall ",
      name: "from ₹399.00 ₹429.00 ",
      image:
        "https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-hair-oil-1_375x.jpg?v=1643119805&w=200&h=200",
      rate: "★ ★ ★ ★ ★",
      role: "ADD TO CART",
    },
    {
    
      price:
        "Apple Cider Vinegar Foaming Face Wash with Built-In Foaming Face Brush for Deep",
      name: "₹249",
      image:
        "https://cdn.shopify.com/s/files/1/1375/4957/products/ACV-FW_375x.jpg?v=1643119836&w=200&h=200",
      rate: "★ ★ ★ ★ ★",
      role: "ADD TO CART",
    },
    {
      
      price:
        "Onion Shampoo for Hair Growth and Hair Fall Control ",
      name: "₹277",
      image:
        "https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-shampoo-1_375x.jpg?v=1643119924&w=200&h=200",
      rate: "★ ★ ★ ★ ★",
      role: "ADD TO CART",
    },
    {
      
      price:
        "Onion Shampoo for Hair Growth and Hair Fall Control ",
      name: "₹277",
      image:
        "https://cdn.shopify.com/s/files/1/1375/4957/products/Onion-shampoo-1_375x.jpg?v=1643119924&w=200&h=200",
      rate: "★ ★ ★ ★ ★",
      role: "ADD TO CART",
    },
  ];
  
var cart=[]
data.map(function (ndata) {
  var cont=document.getElementById("Container2")

    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");

    var image = document.createElement("img");
    image.setAttribute('id','image1')
    image.setAttribute(  "src", ndata.image);


    var product = document.createElement("p");
    product.textContent = ndata.price;

    var rating = document.createElement("p");
    rating.setAttribute("id","Prate")
    rating.textContent = ndata.rate;
    

    var name = document.createElement("p");
    name.textContent = ndata.name;

    var designation = document.createElement("button");
    designation.setAttribute("id","Pbut")
    designation.textContent = ndata.role;
    designation.addEventListener("click",function(){
      addTocart(ndata)
    })
   
    div2.append( image,product,name,rating,designation);


    document.querySelector("#Container2").append(div2);
    
    function addTocart(ndata){
      console.log(ndata)
      cart.push(ndata)
      localStorage.setItem("product",JSON.stringify(cart))
    }
    

  });
  var Button2= document.createElement("button")
  Button2.setAttribute("id","Showmore")
   Button2.innerHTML="SHOWMORE"
   document.querySelector("#MainCont").append(Button2)

// /______________________Best Selling Nutrition & Health
var data2 = [
  {
   
    price:
      "Aloe Vera Gel For Skin And Hair",
    name: "from ₹99.00 ₹429.00 ",
    image:
      "https://cdn.shopify.com/s/files/1/1375/4957/products/apple-cider-vinegar-bottel_1280x.jpg?v=1627897442",
    rate: "★ ★ ★ ★ ★",
    role: "ADD TO CART",
  },
  {
  
    price:
      "Sunscreen Matte Finish - SPF 35 PA++ - Daily Broad Spectrum - UVA &UVB",
    name: "₹375",
    image:
      "https://cdn.shopify.com/s/files/1/1375/4957/products/omega-3-capsules_375x.jpg?v=1625757030",
    rate: "★ ★ ★ ★ ★",
    role: "ADD TO CART",
  },
  {
    
    price:
      "Aloe Vera Face Wash With Hyaluronic Acid And Pro Vitamin B5 - No Parabens, Silicones ",
    name: "₹249",
    image:
      "https://cdn.shopify.com/s/files/1/1375/4957/products/extra-virgin-coconut-oil-bottel_375x.jpg?v=1629268984",
    rate: "★ ★ ★ ★ ★",
    role: "ADD TO CART",
  },
  {
    
    price:
      "Foaming Aloe Vera Face Wash With Built-In Face Brush For Deep Cleansing",
    name: "₹399",
    image:
      "https://cdn.shopify.com/s/files/1/1375/4957/products/probiotics-capsules_375x.jpg?v=1638521199",
    rate: "★ ★ ★ ★ ★",
    role: "ADD TO CART",
  },
];

data2.map(function (ndata) {
  var cont1=document.getElementById("P")

    var divT = document.createElement("div");
    divT.setAttribute("id", "flex");

    var image = document.createElement("img");
    image.setAttribute('id','image1')
    image.setAttribute(  "src", ndata.image);


    var product = document.createElement("p");
    product.textContent = ndata.price;

    var rating = document.createElement("p");
    rating.setAttribute("id","Prate")
    rating.textContent = ndata.rate;
    

    var name = document.createElement("p");
    name.textContent = ndata.name;

    var designation = document.createElement("button");
    designation.setAttribute("id","Pbut")
    designation.textContent = ndata.role;
    designation.addEventListener("click",function(){
      addTocart(ndata)
    })
   
    divT.append( image,product,name,rating,designation);
document.querySelector("#P").append(divT)


function addTocart(ndata){
  console.log(ndata)
  cart.push(ndata)
  localStorage.setItem("product",JSON.stringify(cart))
}

  });
  
  var Button3= document.createElement("button")
  Button3.setAttribute("id","Showmore")
   Button3.innerHTML="SHOWMORE"
   document.querySelector("#M").append(Button3)

  //  """""""""""""""""""""""""""""""""Summer essentials
  var data2 = [
    {
     
      price:
        "Organic Apple Cider Vinegar",
      name: "from ₹99.00 ₹429.00 ",
      image:
        "https://cdn.shopify.com/s/files/1/1375/4957/products/aloe-vera-gel-bottle_375x.jpg?v=1626425687",
      rate: "★ ★ ★ ★ ★",
      role: "ADD TO CART",
    },
    {
    
      price:
        "Omega 3 Capsules with Fish oil - 1000mg Triple Strength",
      name: "₹375",
      image:
        "https://cdn.shopify.com/s/files/1/1375/4957/products/Sunscreen-35-d-shape-100-1_375x.jpg?v=1612964500",
      rate: "★ ★ ★ ★ ★",
      role: "ADD TO CART",
    },
    {
      
      price:
        "Cold Pressed Extra Virgin Coconut Oil - 400 Ml ",
      name: "₹277",
      image:
        "https://cdn.shopify.com/s/files/1/1375/4957/products/aloe-vera-face-wash-tube_375x.jpg?v=1626934537",
      rate: "★ ★ ★ ★ ★",
      role: "ADD TO CART",
    },
    {
      
      price:
        "Probiotics 20 Billion CFU (14 Probiotic Strains) 500 Mg -",
      name: "₹277",
      image:
        "https://cdn.shopify.com/s/files/1/1375/4957/products/Aloe-FW-150-1_375x.jpg?v=1635146443",
      rate: "★ ★ ★ ★ ★",
      role: "ADD TO CART",
    },
  ];
  
  data2.map(function (ndata) {
    var cont1=document.getElementById("pcont")
  
      var divTw = document.createElement("div");
      divTw.setAttribute("id", "flex");
  
      var image = document.createElement("img");
      image.setAttribute('id','image1')
      image.setAttribute(  "src", ndata.image);
  
  
      var product = document.createElement("p");
      product.textContent = ndata.price;
  
      var rating = document.createElement("p");
      rating.setAttribute("id","Prate")
      rating.textContent = ndata.rate;
      
  
      var name = document.createElement("p");
      name.textContent = ndata.name;
  
      var designation = document.createElement("button");
      designation.setAttribute("id","Pbut")
      designation.textContent = ndata.role;
      designation.addEventListener("click",function(){
        addTocart(ndata)
      })
     
      divTw.append( image,product,name,rating,designation);
  document.querySelector("#p").append(divTw)
  
  function addTocart(ndata){
    console.log(ndata)
    cart.push(ndata)
    localStorage.setItem("product",JSON.stringify(cart))
  }
 
    });
    
    var Button4= document.createElement("button")
    Button4.setAttribute("id","Showmore")
     Button4.innerHTML="SHOWMORE"
     document.querySelector("#m").append(Button4)
// *****************Body Cupid Range
var data = [
  {
   
    price:
      "Cherrylicious Body Polish By Body Cupid - 200 Ml",
    name: "from ₹99.00 ₹429.00 ",
    image:
      "https://cdn.shopify.com/s/files/1/1375/4957/products/Cherrybodypolish1_375x.jpg?v=1637660566",
    rate: "★ ★ ★ ★ ★",
    role: "ADD TO CART",
  },
  {
  
    price:
      "Nargis Body Mist By Body Cupid - 100 Ml",
    name: "₹375",
    image:
      "https://cdn.shopify.com/s/files/1/1375/4957/products/Nargisbodymist1001_375x.jpg?v=1637664157",
    rate: "★ ★ ★ ★ ★",
    role: "ADD TO CART",
  },
  {
    
    price:
      "Vitamin C Brightening Foaming Face Wash (With Built-In-Brush) By Body ",
    name: "₹277",
    image:
      "https://cdn.shopify.com/s/files/1/1375/4957/products/VitCFW1_375x.jpg?v=1638884779",
    rate: "★ ★ ★ ★ ★",
    role: "ADD TO CART",
  },
  {
    
    price:
      "Lavender Body Mist By Body Cupid - 100 Ml",
    name: "₹277",
    image:
      "https://cdn.shopify.com/s/files/1/1375/4957/products/Lavender1_375x.jpg?v=1638950790",
    rate: "★ ★ ★ ★ ★",
    role: "ADD TO CART",
  },
];

data.map(function (ndata) {
  var cont1=document.getElementById("t")

    var divTwt = document.createElement("div");
    divTwt.setAttribute("id", "flex");

    var image = document.createElement("img");
    image.setAttribute('id','image1')
    image.setAttribute(  "src", ndata.image);


    var product = document.createElement("p");
    product.textContent = ndata.price;

    var rating = document.createElement("p");
    rating.setAttribute("id","Prate")
    rating.textContent = ndata.rate;
    

    var name = document.createElement("p");
    name.textContent = ndata.name;

    var designation = document.createElement("button");
    designation.setAttribute("id","Pbut")
    designation.textContent = ndata.role;
    designation.addEventListener("click",function(){
      addTocart(ndata)
    })
   
    divTwt.append( image,product,name,rating,designation);
document.querySelector("#t").append(divTwt)
function addTocart(ndata){
  console.log(ndata)
  cart.push(ndata)
  localStorage.setItem("product",JSON.stringify(cart))
}


  
  });
  
  var Button5= document.createElement("button")
  Button5.setAttribute("id","Showmore")
   Button5.innerHTML="SHOWMORE"
   document.querySelector("#u").append(Button5)



// ????????

document.getElementById("Showmore").onclick=function(){
  location.href="https://www.buywow.in/"
}


// >>>>>>>>>>>>>>>>>>.LOCALSTORAGE


