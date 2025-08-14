import './App.css';
import article from './assets/illustration-article.svg';
import avatar from './assets/image-avatar.webp';

function App() {
  return (
    <div className="blog-card">
      <img className="article-img" src={article} alt="Article Illustration" />
      <div className="blog-content">
        <h4 className="category">Learning</h4>
        <h3>Published 21 Dec 2023</h3>
        <h1>HTML & CSS foundations</h1>
        <h2>
          These languages are the backbone of every website, defining structure,
          content and presentation.
        </h2>
      </div>
      <div className="author">
        <img className="avatar" src={avatar} alt="Profile Avatar" />
        <h4>Greg Hooper</h4>
      </div>
    </div>
  );
}

export default App;
