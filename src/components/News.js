import Items from "../components/Items";
import '../assets/news.css';
import useFetch from "../hooks/useFetch";

const News = () => {
  // Used custom hook useFetch to fetch the data
  const {articles} = useFetch(`/top-headlines?country=in&apiKey=70123fc1a2d542c8911f05f40a131526`);
  
  return (
    <div className="container-fluid">
      <h1 className="headlines">Top Headlines</h1>
      <div className="row row-cols-1 row-cols-md-3 row-eq-height" >
        {articles.map((article) => {
          return (
            <div className="col-sm-4  d-flex align-items-stretch" key={article.id}>
            <Items
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              author={article.author}
              source={article.source.name}z
            />
            </div>
          );
        })}
      </div>
    </div>
  );
  //}
};
export default News;
