import React, { useState, useEffect } from 'react';
import '../styles/Read.css'
import TheNav from '../components/TheNav'


const Read = () => {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('hurricane');

    useEffect(() => {
        const apiKey = "7eb5b6bfac9944098d513ef626b3648e";
        const url =
            `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=15&apiKey=${apiKey}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setNews(data.articles);
            });
    }, [searchQuery]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Update the searchQuery state with the value of the input field
        setSearchQuery(event.target.elements.search.value);
    }

    return (
        <div>
            <TheNav />
            <div className="bodyread">
                <h1>Latest Natural Disaster News</h1>
                <div className="sectionsearch">
                    <form className="readForm" onSubmit={handleSubmit}>
                        <label className="searchread">Search:</label>
                        <input type="text" id="search" name="search" defaultValue={searchQuery} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="mainread">
                    <div className="cardsread">
                        {news.map((article) => (
                            <div className='minicardread' key={article.url}>
                                <a className="title_apiread" href={article.url} target="_blank" rel="noreferrer">
                                    <h3>
                                        {article.title}
                                    </h3>
                                    <img className="card_imgread" src={article.urlToImage} alt="article thumbnail" />
                                </a>
                                <p>{article.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Read;