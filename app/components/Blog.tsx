
import Link from 'next/link';
import { useSearchProvider } from '../context/SearchProvider';

type PropType = {
    article: Article
    blogIdx: number
}

const Blog = ({ article, blogIdx }: PropType): JSX.Element => {
    const title: string = article.title;
    const description: string = article.description;
    const imgUrl: string = article.urlToImage;
    const source: string = article.source.name;
    const { searchItem }: {searchItem: SearchItem} = useSearchProvider();

    const getDate = (): string => {
        const date: Date = new Date(article.publishedAt);

        const options = {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        } as const;

        return date.toLocaleDateString('en-US', options);
    };

    return (
        <article className="flex flex-col bg-gray-50">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={imgUrl} />
            </a>
            <div className="flex flex-col p-6 h-full justify-start">
                <Link href={`/${searchItem}/${blogIdx}`} className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{source}</Link>
                <h3 className="py-2 text-lg font-semibold leading-snug">{title}</h3>
                <p>{description}</p>
                <div className="flex flex-wrap mt-auto justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>{getDate()}</span>
                    <span>2.1K views</span>
                </div>
            </div>
        </article>
    );
};

export default Blog
