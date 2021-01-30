import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";


const ProductList= props =>{
    const {products} = props.context;
    return (
        <body
        style={{
        display: "flex",
        minHeight: "100vh", 
        flexDirection: "column"
      }}
     
    > 
          <div className=" hero is-small is-light">
            <div className="hero-body container">
              <h4 className="title">Featured Products</h4>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="column columns is-multiline">
              {products && products.length ? (
                products.map((product, index) => (
                  <ProductItem
                    product={product}
                    key={index}
                    addToCart={props.context.addToCart}
                  />
                ))
              ) : (
                <div className="column">
                  <span className="title has-text-grey-light">
                    No products found!
                  </span>
                </div>
              )}
            </div>
          </div>
          <footer class=" hero is-small is-light">
            <div class="hero-body container has-text-centered has-text-grey-light" style={{marginBottom:0}}>
               <p>
               Copyright ⓒ {new Date().getFullYear()} 
                </p>
            </div>
         </footer>
        </body>
      );
    };



export default  withContext(ProductList);