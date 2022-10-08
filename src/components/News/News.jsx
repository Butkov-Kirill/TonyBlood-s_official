import React from 'react'
import {PostsData} from '../../data/PostsData'
import Post from './Post/Post'
import './News.style.scss'

const News = () => {
  return (
    <div className="news">
        <div className="background_page"></div>
        <h1 className="title_page">Новости</h1>
        <div className="post_list">
          {PostsData.map((post, index) => 
            <Post post={post} key={`post_index_${index}`}></Post>
          )}
        </div>
    </div>
  )
}

export default News
