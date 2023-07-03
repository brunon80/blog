import cn from 'classnames'
import Image, { ImageLoader, ImageLoaderProps } from "next/image"
import Link from 'next/link'

interface Props {
  title: string
  coverImage: {
    node: {
      sourceUrl: string
    }
  }
  slug?: string
}

const contentfulImageLoader: ImageLoader = ({ src, width }: ImageLoaderProps) => {
  return `${src}?w=${width}`
}


export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          <figure> 
            {image}
          </figure>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
