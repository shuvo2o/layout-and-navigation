import Link from 'next/link';
import React from 'react'
const allPosts = [
  { id: 1, title: 'Learn Next Js', slug: 'learn-next-js', from: "homepage" },
    { id: 2, title: 'Learn React Js', slug: 'learn-react-js', from: "newsletter" },
    { id: 3, title: 'Learn Vue Js', slug: 'learn-vue-js', from: "twitter" },
    { id: 4, title: 'Learn Angular Js', slug: 'learn-angular-js', from: "homepage" },
];
const Newspage = () => {
  return (
    <div>
      <h1> All Posts</h1>
      <ul>
        {allPosts.map(post => (
          <li key={post.id}>
            <Link href={`/news/${post.slug}`}>
            {post.title} - from: {post.from}</Link>
          </li>
        ))}
      </ul> 
    </div>
  )
}

export default Newspage
