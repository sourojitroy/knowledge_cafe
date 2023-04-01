import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const SingleCard = ({ card, handleBlogs, handleBlogTitleCart }) => {
    return (
        <div className='grid grid-rows-1'>
            <div className="card w-50% bg-base-100 shadow-xl">
                <figure><img src={card.bgImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center gap-6'>
                        <div className="w-10 rounded-full">
                            <img src={card.pImage} />
                        </div>
                        <div>
                            <h2 className="card-title">{card.name}</h2>
                            <p>{card.publishDate}</p>
                        </div>
                        </div>
                        <div className='flex justify-between items-center gap-6'>
                            <h4 >{card.readTime}min read
                            </h4>
                            <FontAwesomeIcon onClick={() => handleBlogTitleCart(card.title)} icon={faBookmark} />
                        </div>
                    </div>
                    <h3 className='font-semibold text-2xl text-left'>{card.title}</h3>
                    <a onClick={() => handleBlogs(card.readTime)} className='text-left' href="">Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;

// onClick={()=>handleBlogTitleCart(card.title)}

// onClick={()=>handleBlogs(card.readTime)}