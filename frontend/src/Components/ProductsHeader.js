import React, { useEffect } from "react";
import { Dropdown, DropdownButton, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./ProductsHeader.css";
import { createProduct } from "../Actions/ProductActions";
import { PRODUCT_CREATE_RESET } from "../Constants/ProductConstants";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const ProductsHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productCreate = useSelector((state) => state.productCreate);
  const {
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (successCreate) {
      navigate(`/${createdProduct._id}/edit`);
    }
  }, [dispatch, navigate, successCreate, createdProduct]);

  const createProductHandler = () => {
    dispatch(createProduct());
  };
  return (
    <div>
      <div className="productHeadingDiv">
        <Row>
          <span className="productHeading">Products</span>
        </Row>
        <Row>
          <DropdownButton
            id="dropdown-basic-button"
            title="Manage products"
            variant="info"
          >
            <Dropdown.Item href="" onClick={createProductHandler}>
              Add Product
            </Dropdown.Item>
            <LinkContainer to="/productlist">
              <Dropdown.Item>Manage Product</Dropdown.Item>
            </LinkContainer>
          </DropdownButton>
        </Row>
      </div>
    </div>
  );
};

export default ProductsHeader;
