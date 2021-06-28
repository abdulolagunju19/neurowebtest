import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import SimpleStatsLayout from '../../layouts/blog'
import MDXComponents from '../../components/MDXComponents'

export default function SimpleStats({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return <SimpleStatsLayout frontMatter={frontMatter}>{content}</SimpleStatsLayout>
}

export async function getStaticPaths() {
    const posts = await getFiles('blog')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug('blog', params.slug)

    return { props: post }
}
