import React, {Component} from "react";

import withContext from "../withContext";
import { Redirect } from "react-router-dom";
import axios from 'axios';

const initState = {
  _id: "",
  name: "",
  category: "",
  image: "",
  price: "",
  countInStock: "",
  brand: "",
  rating: "",
  numReviews: "",
  description: ""
};



class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  save = async (event) => {
    event.preventDefault();
    const { name, category, image, price, countInStock, brand, rating, numReviews, description } = this.state;

    if (name && price) {
      const id = Math.random().toString(36).substring(2) + Date.now().toString(36);

      await axios.post(
        'http://localhost:3001/products',
        { name, category, image, price, countInStock, brand, rating, numReviews, description },
      )

      this.props.context.addProduct(
        {
  name,
  category,
  image,
  price,
  countInStock,
  brand,
  rating,
  numReviews,
  description
        },
        () => this.setState(initState)
      );
      this.setState(
        { flash: { status: 'is-success', msg: 'Product created successfully' }}
      );

    } else {
      this.setState(
        { flash: { status: 'is-danger', msg: 'Please enter name and price' }}
      );
    }
  };

  handleChange = event => this.setState({ [event.target.name]: event.target.value, error: "" });

  render() {
    const { name, category, image, price, countInStock, brand, rating, numReviews, description } = this.state;
    const { user } = this.props.context;

    return !(user && user.accessLevel < 1) ? (
      <Redirect to="/" />
    ) : (
      <>
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">Add Product</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.save}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Product Name: </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
                </div>
                <div className="field">
                <label className="media">Product image: </label>
                <input
                  className="media"
                  type="image"
                  alt="text"
                  name="image"
                  value={image}
                  onChange={this.handleChange}
                  required
                />
                </div>
                <div className="field">
                <label className="label">Product category: </label>
                <input
                  className="input"
                  type="text"
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                  required
                />
                </div>
                <div className="field">
                <label className="label">Brand: </label>
                <input
                  className="input"
                  type="text"
                  name="brand"
                  value={brand}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Price: </label>
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={price}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Available in Stock: </label>
                <input
                  className="input"
                  type="number"
                  name="stock"
                  value={countInStock}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Rating: </label>
                <input
                  className="input"
                  type="text"
                  name="rating"
                  value={rating}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Description: </label>
                <textarea
                  className="textarea"
                  type="text"
                  rows="2"
                  style={{ resize: "none" }}
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.flash && (
                <div className={`notification ${this.state.flash.status}`}>
                  {this.state.flash.msg}
                </div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-success is-outlined is-pulled-right"
                  type="submit"
                  onClick={this.save}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}


export default withContext(AddProduct);