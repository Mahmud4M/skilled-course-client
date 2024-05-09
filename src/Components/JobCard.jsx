import { Link } from "react-router-dom";




const JobCard = ({job}) => {
    const { _id, title, email, deadline, category, minimumPrice, maximumPrice, description } = job;

    return (
        <div>
            <Link to={`/placeBid/${_id}`}>
            <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md dark:bg-gray-800 font-roboto hover:shadow-2xl hover:duration-1000">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                        {new Date(deadline).toLocaleString()}
                    </span>
                    <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                        {category}
                    </span>
                </div>

                <div>
                    <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                        {title}
                    </h1>
                    <p title={description} className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {description.substring(0, 70)}...
                    </p>
                </div>

                <div>
                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <span>Range:</span>
                        <p className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline">${minimumPrice} - ${maximumPrice}</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default JobCard;