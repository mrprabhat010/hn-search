import React, { useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './SearchResults.module.css';

const sortResults = (results: any[], sortBy: string) => {
  switch (sortBy) {
    case 'date':
      return results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    case 'relevance':
    default:
      return results;
  }
};

const SearchResults: React.FC = () => {
  const { data, error, isLoading } = useSearch();
  const [sortBy, setSortBy] = useState('relevance');

  if (isLoading) return <div className={styles.loaderContainer}>
    <div className={styles.loader}></div>
  </div>;
  if (error) return <div>Error loading results</div>;
  if(!data) return <div>Enter Value to Search Hacker News.</div>
  if (!data?.hits) return <div>No results found</div>;

  const sortedResults = sortResults([...data.hits], sortBy);

  return (
    <motion.div
      className={styles.resultsContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <select
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
        className={styles.select}
      >
        <option value="relevance">Relevance</option>
        <option value="date">Date</option>
      </select>
      <div className={styles.list}>
      <ul className={styles.list}>
        {sortedResults.map((result: any) => (
          <motion.li
            key={result.objectID}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={styles.listItem}
          >
            <span>
            <Link to={`/post/${result.objectID}`}>{result.title}</Link>
            </span>
          </motion.li>
        ))}
      </ul>
      </div>
    </motion.div>
  );
};

export default SearchResults;
