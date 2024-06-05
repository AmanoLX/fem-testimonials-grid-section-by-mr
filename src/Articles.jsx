import Article from './Article';

const Articles = ({ articles }) => {
  return (
    <section className="container">
      {articles.map((article) => {
        return <Article key={article.id} {...article} />;
      })}
    </section>
  );
};
export default Articles;
