// @flow strict

import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug: string) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

type ParamsType = {
  slug: string,
};

export default async function BlogDetails({ params }: { params: ParamsType }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
}
