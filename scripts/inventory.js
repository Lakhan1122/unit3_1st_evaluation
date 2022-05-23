append();

function append(){
    let data=JSON.parse(localStorage.getItem("products"));
    let all_products=document.getElementById("all_products");
    all_products.innerHTML=null;

    data.forEach(function(el,index){

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let p1=document.createElement("p");
         p1.innerText=el.type;

         let p2=document.createElement("p");
         p2.innerText=el.desc;

         let p3=document.createElement("p");
         p3.innerText=el.price;
        let btn=document.createElement("button");
        btn.innerText="Remove Product";
        btn.style.color="red";
        btn.setAttribute("id","remove_product");

        btn.addEventListener("click",function(){
            remove(el,index)
        });

         div.append(img,p1,p2,p3,btn)
         all_products.append(div);

        
         
    })
    function remove(el,index){
       data.splice(index,1)
       localStorage.setItem("products",JSON.stringify(data))
        window.location.reload();
    }
   
}
function validate(){
    window.location.href="index.html";
}

document.querySelector("body").append(all_products)