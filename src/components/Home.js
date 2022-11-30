import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import './Home.css'
const Home = () => {
  const [postLists, setPostList] = useState([])
  const [currentUserId, setCurrentUserId] = useState([false])
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'))
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setCurrentUserId(auth.currentUser.uid)
    }
    getPosts()
  }, [])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id))
    window.location.href = '/'
  }

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>

            <div className="postTextContainer">{post.postsText}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {post.author.id === currentUserId && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Home
