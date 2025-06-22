import React, { FC, useState, FormEvent } from "react";

interface SearchbarProps {
  onSubmit: (query: string) => void;
}

const Searchbar: FC<SearchbarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      onSubmit(trimmed);
    }
  };

  return (
    <header style={{ padding: "20px", backgroundColor: "#eee" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Пошук зображень..."
        />
        <button type="submit">Пошук</button>
      </form>
    </header>
  );
};

export default Searchbar;
