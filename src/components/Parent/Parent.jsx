import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
  state = {
    // product: {
    //   name: "samsung",
    //   price: 5000,
    //   category: "mobile",
    // },
    allProducts: [
      {
        id: 1,
        count: 5,
        onSale: true,
        name: "samsung",
        price: 5000,
        category: "mobile",
      },
      {
        id: 2,
        count: 1,
        onSale: false,
        name: "hawawi",
        price: 3000,
        category: "mobile",
      },
      {
        id: 3,
        count: 10,
        onSale: false,
        name: "iphone",
        price: 30000,
        category: "mobile",
      },
      {
        id: 4,
        count: 2,
        onSale: true,
        name: "toushipa",
        price: 10000,
        category: "mobile",
      },
      {
        id: 5,
        count: 7,
        onSale: false,
        name: "oppo",
        price: 7000,
        category: "mobile",
      },
      {
        id: 6,
        count: 0,
        onSale: true,
        name: "vivo",
        price: 7000,
        category: "mobile",
      },
    ],
  };
  addcount = (obj) => {
    let idx = this.state.allProducts.indexOf(obj);
    const arrnew = [...this.state.allProducts];
    arrnew[idx].count++;
    this.setState({ allProducts: arrnew });
    // for (let i = 0; i < arrnew.length; i++) {
    //   if (arrnew[i].id === id) {
    //     arrnew[i].count++;
    //   }
    // }
  };
  supcount = (obj) => {
    let idx = this.state.allProducts.indexOf(obj);
    const arrnew = [...this.state.allProducts];
    arrnew[idx].count--;
    this.setState({ allProducts: arrnew });
    // for (let i = 0; i < arrnew.length; i++) {
    //   if (arrnew[i].id === id) {
    //     arrnew[i].count++;
    //   }
    // }
  };
  deleteElement = (id) => {
    const arrnew = [...this.state.allProducts];
    const res = arrnew.filter(function (prodect) {
      return prodect.id !== id;
    });
    this.setState({ allProducts: res });
  };
  render() {
    return (
      <div>
        <h2 className="bg-info p-3 text-center w-50 m-auto mt-2 rounded-3">
          Parent Component
        </h2>
        <div className="row p-4">
          {this.state.allProducts.map((product, idx) => {
            return (
              <Child
                del={this.deleteElement}
                up={this.addcount}
                down={this.supcount}
                key={idx}
                pro={product}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
