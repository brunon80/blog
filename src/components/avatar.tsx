import Image from "next/image"

export default function Avatar({ author }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null

  return (
    <div className="flex items-center">
      <div className="avatar mr-4">
        <div className="w-16 rounded-full">
          <Image
            src={author.node.avatar.url}
            className="rounded-full"
            alt={name}
            fill
            sizes="100vw" />
        </div>
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
