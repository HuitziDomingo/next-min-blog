import React from 'react'

const Post = ({dataPost}) => {
  return (
    <div>
      <h2>{dataPost.name}</h2>
    </div>
  )
}

export default Post


export const getAllPostsIds = async () =>  {
    let data = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar')
    let jsonData = await data.json()
    return jsonData.map(item => {
        return {
            params: {
                id: item._id,
            }
        }
    })
}
export const getPostData = async (id) =>  {
    let data = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar')
    let jsonData = await data.json()
    const post = jsonData.find(item => item._id === id)
    return post
}
export const getStaticPaths = async () =>  {
    let posts = await getAllPostsIds()
    return {
        paths: posts,
        fallback: false,
    }
}
export const getStaticProps = async ({params}) =>  {
    let post = await getPostData(params.id)
    return {
        props: {
            dataPost: post
        }
    }
}