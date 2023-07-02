import Container from '../../../components/container'
import PostBody from '../../../components/post-body'
import MoreStories from '../../../components/more-stories'
import Header from '../../../components/header'
import PostHeader from '../../../components/post-header'
import SectionSeparator from '../../../components/section-separator'
import Layout from '../../../components/layout'
import Tags from '../../../components/tags'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../../lib/api'
import { CMS_NAME } from '../../../lib/constants'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getPostAndMorePosts(params?.slug, false, null)
 
  return {
    title: `${data.post.title} | Next.js Blog Example with ${CMS_NAME}`,
    openGraph: {
      images: [data.post.featuredImage?.node.sourceUrl],
    },
  }
}
 

export default async function Post({ params }: { params: { slug: string } }) {

  const data = await getPostAndMorePosts(params?.slug, false, null)
  const post = data.post
  const posts = data.posts

  const morePosts = posts?.edges

  if (!post?.slug) {
    return null
  }

  return (
    <Layout preview={false}>
      <Container>
        <Header />
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export async function generateStaticParams() {
  const allPosts = await getAllPostsWithSlug()

  return allPosts.edges.map(({ node }) => ({
    slug: node.slug,
  }))
}
