import React, { useState } from "react";

function FoodFilter({ foods, onFilter }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearch(keyword);
    onFilter(keyword); // Gửi keyword về component cha để lọc
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm món ăn..."
        value={search}
        onChange={handleSearch}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
    </div>
  );
}

export default FoodFilter;

