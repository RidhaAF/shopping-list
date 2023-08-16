import { GroceryItem } from "../interfaces/app_interfaces";

interface ItemProps {
  item: GroceryItem;
  onToggleItem: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ item, onToggleItem }) => {
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
      <button>&times;</button>
    </li>
  );
};

export default Item;
