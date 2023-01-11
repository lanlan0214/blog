import React from 'react'

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "let's go",
      desc: "ok let's go",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "let's go",
      desc: "ok let's go",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "let's go",
      desc: "ok let's go",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ]

  return (
    <div className='menu'>
      <h1>你可能有其他喜歡的帖子</h1>
      {posts.map((post) => (
        <div className='post' key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>看更多..</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
