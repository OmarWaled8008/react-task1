import React, { Component } from "react";

export default class Child extends Component {
  // deleteElement() {
  //   console.log("object");
  // }
  render() {
    // console.log(this.props);
    const { name, price, category, onSale, id, count } = this.props.pro;
    const deletecom = this.props.del;
    const update1 = this.props.up;
    const update2 = this.props.down;
    return (
      <div className="col-lg-4 col-md-6 col-12  gy-4">
        <div className="bg-warning p-5 rounded-3 w-100 h-100 position-relative">
          <h5>id : {id}</h5>
          <h2 className=" m-auto w-50 p-5 rounded-3 text-center">{name}</h2>
          <h5>price: {price}</h5>
          <h5>category: {category}</h5>
          <h5>count: {count}</h5>
          {onSale === true ? (
            <div className="bg-danger me-2 mt-2 rounded-2 position-absolute top-0 end-0 w-25 text-center">
              sale
            </div>
          ) : (
            ""
          )}
          <button
            onClick={function () {
              deletecom(id);
            }}
            id="btn"
            className="btn btn-outline-danger w-100"
          >
            Delete
          </button>
          <button
            onClick={() => {
              update1(this.props.pro);
            }}
            id="btn"
            className="btn btn-outline-info w-100 mt-2"
          >
            +
          </button>
          <button
            onClick={() => {
              update2(this.props.pro);
            }}
            id="btn"
            className="btn btn-outline-success w-100 mt-2"
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
