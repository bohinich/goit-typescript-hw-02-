import React, { FC, useState, ChangeEvent, FormEvent } from "react";

interface SearchbarProps {
  onSubmit: (query: string) => void;
}

const Searchbar: FC<SearchbarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onSubmit(inputValue.trim());
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Пошук зображень"
        />
        <button type="submit">Пошук</button>
      </form>
    </header>
  );
};

export default Searchbar;
