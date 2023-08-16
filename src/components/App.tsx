import { useState } from "react";
import { GroceryItem } from "../interfaces/app_interfaces";
import Footer from "./Footer";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Header from "./Header";

const groceryItems: GroceryItem[] = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

const App: React.FC = () => {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item: GroceryItem) {
    setItems([...items, item]);
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onToggleItem={handleToggleItem} />
      <Footer />
    </div>
  );
};

export default App;
