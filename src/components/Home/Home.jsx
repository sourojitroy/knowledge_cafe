import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleCard from '../SingleCard/SingleCard';
import SingleCart from '../SingleCart/SingleCart';

const Home = ({handleBlogs, blogs,handleBlogTitleCart}) => {
    const [cards, setCards] = useState([]);
    

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div  className='lg:flex gap-8'>
            <div>
                {
                    cards.map(card => <SingleCard
                        key={card.id}
                        card={card}
                        handleBlogs={handleBlogs}
                        handleBlogTitleCart={handleBlogTitleCart}
                    ></SingleCard>)
                }
            </div>
            <div>
                <Cart blogs={blogs}></Cart>
                {
                    cards.map(cart => <SingleCart 
                        cart={cart}
                        >
                        </SingleCart>)
                }
            </div>
        </div>
    );
};

export default Home;