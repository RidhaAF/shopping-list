import { GroceryItem } from "../interfaces/app_interfaces";

interface FooterProps {
  items: GroceryItem[];
}

const Footer: React.FC<FooterProps> = ({ items }) => {
  if (items.length === 0)
    return <footer className="stats">Daftar belanjaan masih kosong!</footer>;

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percentage}%)
    </footer>
  );
};

export default Footer;
