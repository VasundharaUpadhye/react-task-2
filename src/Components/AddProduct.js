import { Box, Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import uniqid from "uniqid";

const AddProduct = ({
  input,
  setInput,
  products,
  setProducts,
  editProduct,
  setEditProduct,
}) => {
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const updateProduct = (title, id, completed) => {
    const newProduct = products.map((product) =>
      product.id === id ? { title, id, completed } : product
    );
    setProducts(newProduct);
    setEditProduct("");
  };

  useEffect(() => {
    if (editProduct) {
      setInput(editProduct.title);
    } else {
      setInput("");
    }
  }, [setInput, editProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editProduct) {
      setProducts([
        ...products,
        { id: uniqid(), title: input, completed: false },
      ]);
      setInput("");
    } else {
      updateProduct(input, editProduct.id, editProduct.completed);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <TextField
              id="outlined-basic"
              color="success"
              placeholder="Add a Product"
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              value={input}
            />
          </Box>
          <Button
            sx={{ px: "30px" }}
            disabled={input.length > 0 ? false : true}
            color="success"
            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            {" "}
            Add
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
