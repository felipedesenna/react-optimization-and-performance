import React from 'react';
import arrayMove from 'array-move';
import { Feed } from './Feed';

function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then(response => response.json())
      .then(data => { setPosts(data) }
    );
  }, []);

  const handleSortEnd = React.useCallback(({ oldIndex, newIndex }) => {
    setPosts(arrayMove(posts, oldIndex, newIndex));
  }, [posts]);

  return (
    <Feed lockAxis="y" posts={posts} onSortEnd={handleSortEnd} />
  );
}

export default App;
