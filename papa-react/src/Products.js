import React from "react";
import ItemDescription from "./ItemDescription";
import style from "./Product.modules.css"

function Product({name, description, price }){
    return( 
        <div className={styles.product}>
            <ItemDescription name={name} description={description} />
            <h2 className="style.error">Ocorreu um erro</h2>
            <h3 className="style.price">${price}</h3>
        </div>
        
    );
}

export default Product;