import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Link
      href={`/posts/${slug}`}
      passHref
      legacyBehavior
    >
      <div className="card glass cursor-pointer">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
        <div className="card-body">
          <h2 className="card-title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="text-lg mb-4">
            <Date dateString={date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Avatar author={author} />
        </div>
      </div>
    </Link>

    // <div>
    //   <div className="mb-5">
    //     {coverImage && (
    //       <CoverImage title={title} coverImage={coverImage} slug={slug} />
    //     )}
    //   </div>
    //   <h3 className="text-3xl mb-3 leading-snug">
    //     <Link
    //       href={`/posts/${slug}`}
    //       className="hover:underline"
    //       dangerouslySetInnerHTML={{ __html: title }}
    //     ></Link>
    //   </h3>
    //   <div className="text-lg mb-4">
    //     <Date dateString={date} />
    //   </div>
    //   <div
    //     className="text-lg leading-relaxed mb-4"
    //     dangerouslySetInnerHTML={{ __html: excerpt }}
    //   />
    //   <Avatar author={author} />
    // </div>
  )
}
