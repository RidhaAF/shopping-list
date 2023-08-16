import { GroceryItem } from "../interfaces/app_interfaces";

interface ItemProps {
  item: GroceryItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.checked} />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button>&times;</button>
    </li>
  );
};

export default Item;
