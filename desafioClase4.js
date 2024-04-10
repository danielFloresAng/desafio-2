// ------------ Inicia código de desafio ------------
import fs from "fs";

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./files/itemList.json";
  }

  addProduts(item) {
    let itemsList = this.products;
    let itemListPath = this.path;
    let generateID = itemsList.reduce((sum, elem) => 1 + elem.id, 1);
    let findCode = itemsList.find((elem) => elem.code === item.code);

    !findCode
      ? itemsList.push({ ...item, id: generateID })
      : console.error(`El producto con código "${elem.code}" ya existe`);

    let listJSON = JSON.stringify(itemsList);

    const itemsListWriteFile = async () => {
      await fs.promises.writeFile(itemListPath, listJSON);
    };
    itemsListWriteFile();
  }

  getProducts() {
    const getList = async () => {
      let readItems = await fs.promises.readFile(this.path, "utf-8");
      console.log(JSON.parse(readItems));
    };
    getList();
  }
  getProductsById(itemID) {
    const getById = async () => {
      let readItems = await fs.promises.readFile(this.path, "utf-8");
      let list = await JSON.parse(readItems);
      let getItem = list.find((item) => item.id === itemID);
      return getItem
        ? console.log(getItem)
        : console.error(`No se encotró el producto con ID: "${itemID}"`);
    };
    getById();
  }
  updateProduct(productID, property) {
    const findAndModify = async () => {
      // let readItems = await fs.promises.readFile(this.path, "utf-8");
      // let listParse = await JSON.parse(readItems);
      const getItems = getProducts()
      
      
      
      
      // let getItem = listParse.find((item) => item.id === productID);

      // let modfyItem = { ...getItem, property };
      // getItem = { ...getItem, property };

      // await fs.promises.writeFile(this.path,)
    };
    findAndModify();

    // debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID
  }
  deleteProduct() {
    //Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.
  }
}
// ------------ Finaliza código de desafio ------------

// ---------- PROCESO DE TESTING ----------
/* ✓ Se creará una instancia de la clase “ProductManager” */
let manager = new ProductManager();

/* ✓ Se llamará “getProductss” recién creada la instancia, debe devolver un arreglo vacío [] */
// console.log(manager.getProducts());
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
  title: "producto prueba”",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 2,
});
manager.addProduts({
  title: "producto prueba B",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abcddd123",
  stock: 3,
});
manager.addProduts({
  title: "producto prusdfeba B",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abcddddsf123",
  stock: 3,
});
manager.addProduts({
  title: "D",
  description: "Este es un producto prueba",
  price: 20210,
  thumbnail: "Sin imagen",
  code: "abcddddsfsdf123",
  stock: 4,
});

/* ✓ Se llamará el método “getProductss” nuevamente, esta vez debe aparecer el producto recién agregado */
// console.log(manager.getProducts());
console.log("--------------------------------------------------------"); // separación de puntos de testing

/* ✓ Se llamará al método “getProductsById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.*/
// manager.getProductsById(34);
/* ✓ */
/* ✓ */
/* ✓ */
/*
DESAFÍO ENTREGABLE - PROCESO DE TESTING
Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
*/
// manager.getProducts();
manager.getProductsById(1);
