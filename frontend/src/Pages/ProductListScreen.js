import React, { useEffect } from "react";
import { Alert, Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';
import { deleteProduct, listProducts } from "../Actions/ProductActions";

const ProductListScreen = () => {
    const dispatch = useDispatch();
  
    const productList = useSelector((state) => state.productList);
    const { error, products } = productList;

    const productDelete = useSelector((state) => state.productDelete);
    const { error: errorDelete, success: successDelete } = productDelete;

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch, listProducts, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            dispatch(deleteProduct(id));
          }
    }

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
      </Row>
      {errorDelete && <Alert variant="danger">{errorDelete}</Alert>}
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products && products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>₹{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <LinkContainer to={`/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ProductListScreen;
