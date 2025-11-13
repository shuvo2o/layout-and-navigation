"us"
import React from 'react'
type PageProps = {
    params: Promise<{
        slug: string;

    }>,
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}
const SinglePost = async({ params, searchParams }: PageProps) => {
    const { slug } = await params;
  return (
    <div>
      <h1>Single Blog SinglePost for: {slug}</h1>
      <ul>
        {
            Object.entries(searchParams).map(([key, value]) => (
                <li key={key}>
                    {key}: {Array.isArray(value) ? value.join(", ") : value}
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default SinglePost
