import React, { Suspense, lazy } from 'react';
import styles from './Home.module.css';

const SearchBar = lazy(() => import('../Components/SearchBar'));
const SearchResults = lazy(() => import('../Components/SearchResults'));

const Home: React.FC = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Hacker News Search</h1>
    <Suspense fallback={<div>Loading SearchBar...</div>}>
      <SearchBar />
    </Suspense>
    <Suspense fallback={<div>Loading SearchResults...</div>}>
      <SearchResults />
    </Suspense>
  </div>
);

export default Home;
