import { List, ListItem, ListItemText, Stack } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductList = ({
  products,
  setProducts,
  editProduct,
  setEditProduct,
}) => {
  const handleDelete = ({ id }) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const handleComplete = (product) => {
    setProducts(
      products.map((item) => {
        if (item.id === product.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEditChange = ({ id }) => {
    const findproduct = products.find((item) => item.id === id);
    setEditProduct(findproduct);
  };
  return (
    <div>
      {products.map((item) => (
        <Stack key={item.id} spacing={1}>
          <List>
            <ListItem
              disablePadding
              key={item.id}
              sx={{
                width: "400px",
                padding: "10px",
                border: "1px solid lightgray",
                backgroundColor: "lightgreen",
                borderRadius: "6px",
              }}
            >
              {!item.completed ? (
                <ListItemText
                  primary={item.title}
                  onChange={(e) => e.preventDefault()}
                />
              ) : (
                <ListItemText
                  primary={item.title}
                  onChange={(e) => e.preventDefault()}
                  sx={{ textDecoration: "line-through" }}
                />
              )}
              <button
                style={{
                  marginInline: "4px",
                  border: "none",
                  backgroundColor: "lightgreen",
                }}
                onClick={() => handleComplete(item)}
              >
                {" "}
                <CheckCircleIcon />{" "}
              </button>
              <button
                style={{
                  marginInline: "4px",
                  border: "none",
                  backgroundColor: "lightgreen",
                }}
                onClick={() => handleEditChange(item)}
              >
                <EditIcon />{" "}
              </button>
              <button
                style={{
                  marginInline: "4px",
                  border: "none",
                  backgroundColor: "lightgreen",
                }}
                onClick={() => handleDelete(item)}
              >
                <DeleteIcon />{" "}
              </button>
            </ListItem>
          </List>
        </Stack>
      ))}
    </div>
  );
};

export default ProductList;
