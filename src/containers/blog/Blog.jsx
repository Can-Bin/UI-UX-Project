import React from 'react'
import "./blog.css"
import Article from "../../components/article/Article"
import blog1 from "../../assets/blog01.png"
import blog2 from "../../assets/blog02.png"
import blog3 from "../../assets/blog03.png"
import blog4 from "../../assets/blog04.png"
import blog5 from "../../assets/blog05.png"

const Blog = () => {
  return (
    <div className='section__margin gpt3__blog'>
      <div className='gpt3__blog-content'>
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-article'>
        <div className='gpt3__blog-article__b1'><Article image={blog1} date="Agu 28,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" link="Read Full Article"/></div>
        <div><Article image={blog2} date="Agu 28,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" link="Read Full Article"/></div>
        <div><Article image={blog3} date="Agu 28,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" link="Read Full Article"/></div>
        <div><Article image={blog4} date="Agu 28,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" link="Read Full Article"/></div>
        <div><Article image={blog5} date="Agu 28,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" link="Read Full Article"/></div>
      
      </div>
    </div>
  )
}

export default Blog