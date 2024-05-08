import { useLoaderData } from "react-router-dom";


const PostedJob = () => {

    const job = useLoaderData();
    // const { title, deadline, category, minimumPrice, maximumPrice, description } = job;

    return (
        <div className="grid grid-cols-2 md: lg:grid-cols-3 gap-5 mt-10">
            {
                job.map(job => <div key={job._id} >
                    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800 font-roboto">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                                {new Date(job.deadline).toLocaleString()}
                            </span>
                            <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                                {job.category}
                            </span>
                        </div>

                        <div>
                            <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                                {job.title}
                            </h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                {job.description.slice(0, 90)}
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                                <span>Range:</span>
                                <p className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline">${job.minimumPrice} - ${job.maximumPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PostedJob;