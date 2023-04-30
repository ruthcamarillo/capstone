import React, { useState, useEffect } from 'react';
import '../styles/Read.css'


const Read = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const apiKey = "7eb5b6bfac9944098d513ef626b3648e";
        const url =
            "https://newsapi.org/v2/everything?q=hurricane&pageSize=5&apiKey=" +
            apiKey;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setNews(data.articles);
            });
    }, []);

    return (
        <div className="body">
            <h1>Latest Natural Disaster News</h1>
            <div className="main">
                <div className="cards">
                    {news.map((article) => (

                        <div className='minicard' key={article.url}>
                            <a href={article.url} target="_blank" rel="noreferrer">
                                <img className="card_img" src={article.urlToImage} alt="article thumbnail" />
                                <h3>
                                    {article.title}
                                </h3>
                            </a>
                            <p>{article.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Read;