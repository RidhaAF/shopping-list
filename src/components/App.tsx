import Footer from "./Footer";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Header from "./Header";
import { GroceryItem } from "../interfaces/app_interfaces";

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
  return (
    <div className="app">
      <Header />
      <Form />
      <GroceryList items={groceryItems} />
      <Footer />
    </div>
  );
};

export default App;
