import React, { useState, ChangeEvent, FormEvent } from 'react';

interface SearchbarProps {
  onSubmit: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    onSubmit(trimmedQuery);
    setQuery('');
  };

  return (
    <header className="searchbar">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Searchbar;
