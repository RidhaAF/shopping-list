import { useState } from "react";
import { GroceryItem } from "../interfaces/app_interfaces";

interface FormProps {
  onAddItem: (item: GroceryItem) => void;
}

const Form: React.FC<FormProps> = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name) return;

    const newItem = {
      id: Date.now(),
      name: name,
      quantity: quantity,
      checked: false,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
  }
  const quantitiNum = [...Array(10)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {quantitiNum}
      </select>
      <input
        type="text"
        placeholder="nama barang..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Tambah</button>
    </form>
  );
};

export default Form;
