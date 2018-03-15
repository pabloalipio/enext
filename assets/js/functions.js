function openInfoModal(idProduto){

        xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function(){
                var dadosJSON;
                dadosJSON = JSON.parse(xmlhttp.responseText);

                var div = document.getElementById('modal-container');  

                div.innerHTML = "";
                div.innerHTML = "<div onclick='fecharInfoModal()'' class='modal-close'><i class='fas fa-times'></i></div>"; 
                div.innerHTML += "<div class='col-lg-6'> <div class='product-img'> <img src='assets/products/" + dadosJSON.potions[idProduto]["image"] + "' /> </div> </div>";
                div.innerHTML += "<div class='col-lg-6'> <h3 class='product-name'>" + dadosJSON.potions[idProduto]["name"] 
                + "</h3> <span class='product-effect'> <b> Use/Effect: </b> <br/> " 
                + dadosJSON.potions[idProduto]["effect"] + "</span> <span class='product-ingredients'> <b> Ingredients: </b> <br/> " 
                + dadosJSON.potions[idProduto]["ingredients"] + "</span> <span class='product-price'> Price: <br/> " 
                + dadosJSON.potions[idProduto]["price"] + "</span> </span> <button class='product-add'> Add To Cart </button> </div>";

                var divModal = document.getElementById('modal');
                var offsetHeight = div.offsetHeight / 2;
                div.style.marginTop = Math.abs(offsetHeight) * -1 + "px";
                divModal.style.display = "block";       
        }
        
        xmlhttp.open('GET', 'assets/potions.json', true);
        xmlhttp.setRequestHeader('Content-Type', 'json');
        xmlhttp.send(null);
}

function fecharInfoModal(){
    var div = document.getElementById('modal');
    div.style.display = "none"; 
}