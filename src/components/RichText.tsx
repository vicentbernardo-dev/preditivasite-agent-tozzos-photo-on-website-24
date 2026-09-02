'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'

type PortableTextBlockProps = {
  value: any
}

// Custom components for rendering Portable Text blocks
const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 mt-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mb-3 mt-4">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-4 italic text-gray-700 bg-gray-50 py-4 px-4">
        {children}
      </blockquote>
    ),
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) return null
      return (
        <figure className="my-8">
          <img
            src={value.asset.url}
            alt={value.alt || 'Blog image'}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },

  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-red-600 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value?.href} rel={rel} className="text-blue-600 underline hover:text-blue-800">
          {children}
        </a>
      )
    },
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside ml-4 mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
}

export function RichText({ value }: PortableTextBlockProps) {
  if (!value) return null

  return (
    <div className="prose prose-sm max-w-none">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  )
}
