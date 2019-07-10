import React from 'react';
import Tags from './commons/cards/Tags';

// Replace tags from what comes from the database
const tags = ['sustainability', 'accountability', 'marketability', 'indigenious', 'parket', 'salivating', 'pussyalization'];

export default function App() {
  return (
    <Tags tags={tags} />
  );
}
