import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, InputGroup } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.id) };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.item.id ? action.item : item)),
      };
    case "SET_SORT":
      return { ...state, sortBy: action.sortBy };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  sortBy: "asc", // ascending
  filter: "",
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  
  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };
  
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setNewItemName(item.name);
  };

  const handleUpdateItem = () => {
    if (editingItem) {
      dispatch({ type: "EDIT_ITEM", item: { ...editingItem, name: newItemName } });
      setNewItemName("");
      setEditingItem(null);
    }
  };

  const handleSort = () => {
    dispatch({ type: "SET_SORT", sortBy: state.sortBy === "asc" ? "desc" : "asc" });
  };

  const handleFilterChange = (e) => {
    dispatch({ type: "SET_FILTER", filter: e.target.value });
  };

  const sortedItems = [...state.items].sort((a, b) => {
    return state.sortBy === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });

  const filteredItems = sortedItems.filter((item) => item.name.toLowerCase().includes(state.filter.toLowerCase()));

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </Form.Group>
            {editingItem ? (
              <Button variant="warning" onClick={handleUpdateItem} className="me-2">
                Update Item
              </Button>
            ) : (
              <Button variant="primary" onClick={handleAddItem}>
                Add Item
              </Button>
            )}
          </Form>

          <InputGroup className="mt-3">
            <Form.Control
              type="text"
              placeholder="Search item..."
              value={state.filter}
              onChange={handleFilterChange}
            />
            <Button variant="secondary" onClick={handleSort}>
              Sort ({state.sortBy})
            </Button>
          </InputGroup>

          <h3 className="mt-4">Item List:</h3>
          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                {item.name}
                <div>
                  <Button variant="info" size="sm" className="me-2" onClick={() => handleEditItem(item)}>
                    Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
