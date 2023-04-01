import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QusAns from './components/QusAns/QusAns'

function App() {
  const [blogs, setBlogs] = useState('');
  const [SingleCart, setSingleCart] = useState([]);

  const handleBlogs = (readTime) => {
    // console.log('hoitese kaj')
    const previousReadBlogs = JSON.parse(localStorage.getItem('blogsList'));

    if (previousReadBlogs) {
      const add = previousReadBlogs + readTime;
      localStorage.setItem('blogsList', add)
      setBlogs(add)
    }
    else {
      localStorage.setItem('blogsList', readTime)
      setBlogs(readTime)
    }

    // const [blogTitle,setBlogTitle]=useState([]);
    // const handleBlogTitleCart=()=>{
    //   console.log('kaj hocche')
    //   setBlogTitle(title);
    //   const newBlogTitle=[...blogTitle,title];
    //   setBlogTitle(newBlogTitle)
    // }
  }

  const handleBlogTitleCart = (title) => {
    // console.log('kaj hocche'); 
    //   console.log(title);
    toast("Wow so easy !");
    const previousReadBlogsTitle = JSON.parse(localStorage.getItem('blogsTitleList'));
    if (previousReadBlogsTitle) {
      // console.log('kaj hocche');
      const add = previousReadBlogsTitle + title;
      // console.log(add)
      localStorage.setItem('blogsTitleList', add)
      setSingleCart(add)
    }
    else {
      localStorage.setItem('blogsTitleList', title)
      setSingleCart(title)
    }

  }

  return (
    <div className="App">
      <Header></Header>
      <Home handleBlogs={handleBlogs} blogs={blogs} handleBlogTitleCart={handleBlogTitleCart} ></Home>
      <QusAns></QusAns>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
