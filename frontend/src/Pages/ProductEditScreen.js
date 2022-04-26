import React, { useState, useEffect } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
import { listProductDetails, updateProduct } from "../Actions/ProductActions";
import { PRODUCT_UPDATE_RESET } from "../Constants/ProductConstants";

const ProductEditScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const productId = params.id;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate("/");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setCategory(product.category);
        setQuantity(product.quantity);
      }
    }
  }, [product, dispatch, productId, navigate, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data", boundary:"something"
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        quantity,
        price,
        category,
        image
      })
    );
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={12} md={6}>
          <Link to="/" className="btn btn-light my-3">
            Go back
          </Link>
          <h1>Edit Product</h1>
          {errorUpdate && <Alert variant="danger">{errorUpdate}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                label="Choose File"
                onChange={uploadFileHandler}
              />
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductEditScreen;
