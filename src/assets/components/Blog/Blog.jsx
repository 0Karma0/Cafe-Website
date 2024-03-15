import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog }) => {
    const {title, cover, author, author_img, reading_time, date, hashtags} = blog;
    return (
        <div>
            <img className="w-full mb-8 rounded-xl" src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="mb-20">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-7">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-red-600 text-xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


export default Blog;