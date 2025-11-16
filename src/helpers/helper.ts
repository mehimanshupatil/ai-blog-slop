import { getCollection } from 'astro:content';

export const getAllPostSorted = async () => {
    const allPosts = (await getCollection("blog")).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    );
    return allPosts
}