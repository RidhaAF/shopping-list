import { useState } from "react";
import { GroceryItem } from "../interfaces/app_interfaces";
import Item from "./Item";

interface GroceryListProps {
  items: GroceryItem[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearItems: () => void;
}

const GroceryList: React.FC<GroceryListProps> = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.checked) - Number(b.checked));
      break;
    default:
      sortedItems;
      break;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
        F
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
};

export default GroceryList;
