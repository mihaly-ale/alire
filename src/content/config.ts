import {z, defineCollection} from 'astro:content';

const blogCollection = defineCollection ({
  schema: ({image}) => z.object(
    {
      title: z.string(),
      subtitle: z.string(),
      author: z.string(),
      isDraft : z.boolean(),
      publishedDate : z.date(),
      categories: z.array(z.string()),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      canonicalURL: z.string().url(),
    })
})
const alireBlogs = defineCollection(blogCollection)

export const collections = {
  blog: alireBlogs
}
