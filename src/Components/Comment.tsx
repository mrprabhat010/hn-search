// src/components/Comment.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Comment.module.css';
import { timeElapsed } from '../utils';

interface CommentProps {
  author: string;
  createdAt: string;
  text: string;
}

const Comment: React.FC<CommentProps> = ({ author, createdAt, text }) => {
  const getInitials = (name: string) => {
    const initials = name.match(/\b\w/g) || [];
    return (initials.shift() || '').toUpperCase() + (initials.pop() || '').toUpperCase();
  };

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const renderCommentText = () => {
    if (text.length > 200 && !showFullText) {
      return (
        <>
          <p dangerouslySetInnerHTML={{ __html:text }}></p>
          <span className={styles.readMore} onClick={toggleShowFullText}>
            Read more
          </span>
        </>
      );
    } else {
      return <p dangerouslySetInnerHTML={{ __html:text }}></p>;
    }
  };
const timePassed = timeElapsed(createdAt)
  return (
    <motion.div
      className={styles.comment}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.circle}>{getInitials(author)}</div>
      <div className={styles.content}>
        <div className={styles.author}>{author}</div>
        <div className={styles.createdAt}>{timePassed}</div>
        <div className={styles.text}>{renderCommentText()}</div>
      </div>
    </motion.div>
  );
};

export default Comment;
