import React, {useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import "./Products.css";

const Products = ({category}) => {
  const [products, setProducts] = useState([]);

  const getProductsByCategory = async () => {
    try {
      const { data } = await axios.get(`/api/products/category/${category}`);
      setProducts(data);
    } catch (error) {
      
    }
  }

  useEffect(()=>{
      getProductsByCategory();
  }, [category])
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center mt-5">
          <div className="productCategory">
            <span className="categoryName">{category}</span>
          </div>
        </Row>
        <Row>
          { products && products.map((product)=>(
          <Col md={4} key={product._id}>
            <div className="productBox mb-5">
              <Row>
                <img
                  className="productImage"
                  src={product.image}
                  alt="product"
                ></img>
              </Row>
              <Row className="d-flex align-items-center justify-content-between">
                <Col sm={6}>
                  <Row className="productName">{product.name}</Row>
                  <Row className="productQuantity">{product.quantity}</Row>
                </Col>
                <Col className="productPrice" sm={2}>
                  {product.price}
                </Col>
              </Row>
            </div>
          </Col>
          )) }
        </Row>
      </Container>
    </div>
  );
};

export default Products;
