import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/dashboard";
import Table from "../../components/table/table";
import TableBody from "../../components/table/table-body";
import TableHader from "../../components/table/table-header";
import "./product.css";
import "../../components/table/table.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [prize, setPrize] = useState("");
  const [description, setDescription] = useState("");
  const [upload, setUpload] = useState({ img_products: "" });
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [dropdown, setDropdown] = useState("Elegir Una");
  const thead = ["Id", "Nombre", "Precio", "Descripción","Acciones"];
  const addProduct = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", prize);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("myFile", upload.img_products);

    Axios.post("https://host-bodegoon.herokuapp.com/product", formData, {}).then(
      (response) => {
        if (response.data.result) {
          window.location.href = "./products";
        }
      }
    );
  };

  const deleteProduct = (value, filename) => {
    const deleteproduct = products.filter((item) => item._id !== value);

    setProducts(deleteproduct);

    console.log(products);

    Axios.delete(`https://host-bodegoon.herokuapp.com/product/${value}/${filename}`).then(
      (response) => {}
    );
  };

  const onFileChange = (e) => {
    setUpload({ img_products: e.target.files[0] });
  };

  const changeCategory = (e) => {
    setCategory(e.target.id);
    setDropdown(e.target.innerHTML);
  };

  useEffect(() => {
    Axios.get("https://host-bodegoon.herokuapp.com/product/categories").then((response) => {
      setCategories(response.data.categories);
    });
    Axios.get("https://host-bodegoon.herokuapp.com/product").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <Dashboard>
      <button
        className="button_add btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ADD +
      </button>

      <Table>
        <TableHader header={thead}></TableHader>
        <tbody className="table__tbody">
          {products.map((value, index) => {
            return (
              <TableBody
                index={index + 1}
                body={[value.name, value.price, value.description]}
                key={index}
              >
                <td className="table__tbody-actions">
                  <button className="btn btn-primary">
                    <i className="fas fa-arrows-rotate"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => deleteProduct(value._id, value.file_img)}
                  >
                    <i className="fas fa-trash-can"></i>
                  </button>
                </td>
              </TableBody>
            );
          })}
        </tbody>
      </Table>

      <div
        className="modal_addproduct modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                AÑADIR PRODUCTO
              </h5>
              <button
                type="button"
                className="modalclose btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form__div-input">
                  <label className="form-label">Nombre</label>
                  <input
                    className="form-control"
                    placeholder="Nombre"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form__div-input dropdown">
                  <label className="form-label">Categoria</label>
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {dropdown}
                  </button>
                  <ul className="form-control dropdown-menu">
                    {categories.map((value) => {
                      return (
                        <li>
                          <a
                            className="dropdown-item"
                            id={value._id}
                            onClick={changeCategory}
                          >
                            {value.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="form__div-input">
                  <label className="form-label">Precio</label>
                  <input
                    className="form-control"
                    placeholder="Precio"
                    required
                    onChange={(e) => setPrize(e.target.value)}
                  />
                </div>
                <div className="form__div-input">
                  <label className="form-label">Imagen</label>
                  <input
                    className="form-control"
                    type="file"
                    required
                    onChange={onFileChange}
                  />
                </div>

                <div className="form__div-input">
                  <label className="form-label">Descripcion</label>
                  <textarea
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                cerrar
              </button>
              <button
                type="button"
                onClick={addProduct}
                className="btn btn-primary"
              >
                guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Products;
