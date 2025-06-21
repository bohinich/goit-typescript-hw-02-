import { FormEvent, useState } from 'react';
import css from './Searchbar.module.css';

interface SearchbarProps {
  onSubmit: (query: string) => void;
}

export const Searchbar = ({ onSubmit }: SearchbarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSubmit(searchQuery.trim());
      setSearchQuery('');
    }
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
