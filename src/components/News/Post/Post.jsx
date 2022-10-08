import React, { useEffect, useState } from 'react'
import ControllPanel from '../ControllPanel/ControllPanel';
import './Post.style.scss'

const Post = (props) => {
    const [image, setImage] = useState(0);

    useEffect(()=>{
        console.log(`image ${image}`)
    }, [image])

    const renderContent = (post) => {
        if (post.typeContent=='image'){
            return <>
                <img src={post.content.image[image]} className='contentImage' alt="image" />
                {post.content.image.length>1 ?
                    <ControllPanel length={post.content.image} setImage={setImage}></ControllPanel>
                    : <></>
                }
            </>
        }
    }

    const renderPost = (post) => {
        let width = post.content.width;
        console.log(width)
        return (<>
            <h5 className="date">{post.date}</h5>
            <h1 className="title">{post.title}</h1>
            <div className="pc_content">
                <div className="content" style={{width: `${post.content.width}`}}>
                    {renderContent(post)}
                </div>
            </div>
            <div className="mobile_content">
                <div className="content" style={{width: `100%`}}>
                    {renderContent(post)}
                </div>
            </div>
            {post.text}
        </>)
    }

  return (
    <div className="post">
        {renderPost(props.post)}
    </div>
  )
}

export default Post
