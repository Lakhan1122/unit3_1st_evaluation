//store the products array in localstorage as "products"



function storeData(e){
  e.preventDefault();
 let form=document.getElementById("products")
  let type=form.type.value;
  let desc=form.desc.value;
  let price=form.price.value;
  let image=form.image.value;

let product=new Products(type,desc,price,image);
let data=JSON.parse(localStorage.getItem("products")) || []
data.push(product);

localStorage.setItem("products",JSON.stringify(data))
 console.log(data)
}

function Products(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function validate(){
    window.location.href="inventory.html";
}