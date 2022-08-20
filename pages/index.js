import Link from "next/link"


export default function Home({ avatars }) {
  return (
    <div>
      <h1>Avatar</h1>
      <ul>
        {
          avatars.map(avatar => {
            return (
              <li key={avatar._id}>
                <Link href={`blog/${avatar._id}`}>
                  {avatar.name}
                </Link>
              </li>
            )
          })
        }

      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  let data = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar')
  let avatars = await data.json()

  return {
    props: { avatars }
  }

}
