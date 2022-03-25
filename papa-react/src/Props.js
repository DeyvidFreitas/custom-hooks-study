import React from "react";
import Product from "./Products";

function Props(){
return(
    
<div>
    <Product  name='Mouse gamer' 
    description ='Mouse TOP' 
    price={24} 
    />
    
    <Product  name='Monitor gamer' 
    description ='Tela para ver' 
    price={2.500} 
    />

<Product  name='Cadeira Gamer' 
    description ='Cadeira para sentar' 
    price={3.000} 
    />

    {/* Nome do produto, Descrição, Preço */}
</div>
    
    );
}

export default Props;