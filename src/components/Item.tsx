import { GroceryItem } from "../interfaces/app_interfaces";

interface ItemProps {
  item: GroceryItem;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
};

export default Item;
