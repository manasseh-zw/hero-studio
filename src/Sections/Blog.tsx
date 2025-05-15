import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <div className="relative bg-black py-20 pb-24 ">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From Our Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            Exploring the intersection of art and engineering
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900/50 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-white/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />

                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white group">
                <a
                  href={post.href}
                  className="bg-gradient-to-r from-pink-100 via-teal-100 to-purple-200 bg-clip-text text-transparent"
                >
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
