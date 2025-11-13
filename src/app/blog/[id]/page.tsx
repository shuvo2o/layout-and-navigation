import { Metadata } from 'next';
import React from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const id = (await params).id;
  return {
    title: `Blog post - ${id}`,
    description: `This is the blog post about ${id}`,
  };
}

const SingleBlog = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div>
      <h1>Single Blog page for: {id}</h1>
    </div>
  );
};

export default SingleBlog;
