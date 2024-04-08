// ------------ Inicia código de desafio ------------
class ProductManager {
  constructor() {
    this.products = [];
  }
  addProduts(item) {
    let itemsList = this.products;
    let generateID = Math.floor(Math.random() * 10) + 1;

    let findCode = itemsList.find((elem) => elem.code === item.code);

    return findCode
      ? console.error(`El producto con código "${elem.code}" ya existe`)
      : itemsList.push({ ...item, id: generateID });
  }
  getProducts() {
    return this.products;
  }
  getProductsById(itemID) {
    let getItem = this.products.find((item) => item.id === itemID);

    return getItem
      ? getItem
      : console.error(`No se encotró el producto con ID: "${itemID}"`);
  }
}
// ------------ Finaliza código de desafio ------------

// ---------- PROCESO DE TESTING ----------
/* ✓ Se creará una instancia de la clase “ProductManager” */
let manager = new ProductManager();

/* ✓ Se llamará “getProductss” recién creada la instancia, debe devolver un arreglo vacío [] */
console.log(manager.getProducts());
console.log("--------------------------------------------------------"); // separación de puntos de testing

/* ✓ Se llamará al método “addProduct” con los campos:
title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25

El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
*/
manager.addProduts({
  title: " producto prueba”",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

/* ✓ Se llamará el método “getProductss” nuevamente, esta vez debe aparecer el producto recién agregado */
console.log(manager.getProducts());
console.log("--------------------------------------------------------"); // separación de puntos de testing

/* ✓ Se llamará al método “getProductsById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.*/
manager.getProductsById(34);
/* ✓ */
/* ✓ */
/* ✓ */
/*
DESAFÍO ENTREGABLE - PROCESO DE TESTING
Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
*/
