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
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
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
        <select>
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
