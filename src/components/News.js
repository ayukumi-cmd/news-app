// import React from 'react'
// import Items from "../components/Items";
// import '../assets/news.css';
// import useFetch from "../hooks/useFetch";
// const apiKeys=process.env.REACT_APP_NEWS_API;
// const News = () => {
//   // Used custom hook useFetch to fetch the data
//   const {articles} = useFetch(`/top-headlines?country=in&apiKey=${apiKeys}`);
//   return (
//     <div className="container-fluid">
//       <h1 className="headlines">Top Headlines</h1>
//       <div className="row row-cols-1 row-cols-md-3 row-eq-height" >
//         {articles.map((article) => {
//           return (
//             <div className="col-sm-4  d-flex align-items-stretch" key={article.id}>
//             <Items
//               title={article.title}
//               description={article.description}
//               url={article.url}
//               urlToImage={article.urlToImage}
//               publishedAt={article.publishedAt}
//               author={article.author}
//               source={article.source.name}z
//             />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
//   //}
// };
// export default News;
import React from 'react'
import Items from './Items';
import '../assets/news.css'
import useFetch from '../hooks/useFetch';


const News = () => {
  // Used custom hook useFetch to fetch the data
  const { articles } = useFetch(`https://newsapi.org/v2/top-headlines?country=in&category=business`);
  

  return (
      
    <div className="container-fluid">
        <h1 className="headlines">Top News Headlines</h1>
    <div className="row row-cols-1 row-cols-md-3 row-eq-height" >
        {articles.map((article) => {
          return (
            <div className="col sm-4  d-flex align-items-stretch">
            <Items
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              author={article.author}
              source={article.source.name}
            />
            </div>
          );
          
        })}
      </div>
      </div>

  )
}

export default News;