import React from 'react'
import "./article.css";

const Article = ({image, date, title, link}) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-pic'>
        <img src={image} alt="image" />
      </div>
      <div className='gpt3__article-content'>
        <div className='gpt3__article-content__top' >
          <p>{date}</p>
          <p>{title}</p>
        </div>
        <div className='gpt3__article-content__bottom' >
          <p><a href="#">{link}</a></p>
        </div>
      </div>
    </div>
  )
}

export default Article