import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
  render() {
    return (
      <>
      <div className="container my-3 me-4">
        <h2 className="my-4">NewsSaurus - Get Top Headlines</h2>
        <div className="row">
          <div className="col-lg-4">
      <NewsItem title = "mytitle" description = "mydesc" imageUrl = "https://images.axios.com/sSyYcfBEvPFsJfcSP4qtmUia6SQ=/0x0:1920x1080/1366x768/2022/03/28/1648479404445.jpg" />
      </div>
      <div className="col-lg-4">
      <NewsItem title = "mytitle" description = "mydesc" imageUrl = "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
      </div>
      <div className="col-lg-4">
      <NewsItem title = "mytitle" description = "mydesc" imageUrl = "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/05/1408/814/05.13.22_Behind-the-scenes-on-the-creation-of-the-NFL-schedule_16x9.jpg?ve=1&tl=1" />
      </div>
      </div>
      </div>
      </>
    )
  }
}

export default News