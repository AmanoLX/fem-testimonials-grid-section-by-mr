import { useState } from 'react';
import Articles from './Articles';
import './index.css';
import articlesData from './data';

function App() {
  const [articles, setArticles] = useState(articlesData);
  return (
    <main>
      <Articles articles={articles} />
    </main>
  );
}

export default App;
