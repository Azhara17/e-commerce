import React from "react";


const ProductItem = props => {
    const { product } = props;
    return (
      <div className=" column is-half">
        <div className="box">
          <div className="media">
            <div className="media-left">
              
                <img style={{height:260, width:220}}
                  src={product.image}
                  alt={product.description}
                />
             
            </div>
            <div className="media-content">
              <b style={{ textTransform: "capitalize"}}>
                {product.name}{" "}  
              </b>
              <div>{product.description}</div>
              {product.countInStock > 0 ? (
                <small>{" Available"}</small>
              ) : (
                <small className="has-text-danger">Out Of Stock</small>
              )}
              <div>
              <span className="tag is-outlined is-white is-medium">${product.price}</span>
              </div>
              <div className="is-clearfix">
                <button
                  className="button is-small is-primary is-pulled-right"
                  onClick={() =>
                    props.addToCart({
                      _id: product.name,
                      product,
                      amount: 1
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductItem;