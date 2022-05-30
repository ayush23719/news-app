import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

  constructor() {
    super();
    console.log("constructor run!");
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b0f413a375e945af89a584c42b7a78ae";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles })
  }
  render() {
    return (
      <>
        <div className="container my-3 me-4">
          <h2 className="my-4">NewsSaurus - Get Top Headlines</h2>

          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-lg-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}

          </div>
        </div>
      </>
    )
  }
}

export default News