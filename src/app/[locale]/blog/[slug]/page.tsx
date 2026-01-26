import BlogPostClient from './BlogPostClient';

const blogSlugs = ['architectural-drift', 'graphrag-architecture'];

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}
