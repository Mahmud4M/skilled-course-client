import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Swal from "sweetalert2";


const PlaceBid = () => {
    const job = useLoaderData()
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const { title, deadline, category, minimumPrice, maximumPrice, description } = job;

    const handleSubmit = async event => {
        event.preventDefault();

        // if(user?.email === email) return toast.error('Action Not Permitted !')
        const form = event.target;
        const clientEmail = form.email.value;
        const deadline = startDate;
        const comment = form.comment.value;
        const price = parseFloat(form.price.value);
        if (price < minimumPrice) return toast.error('Increase your money more than minimum money.')
        if (price > maximumPrice) return toast.error('Decrease your money less than maximumum money.')
        const bidData = { clientEmail, deadline, price, comment };
        // console.table(bidData)

        // Push data in Database
        try {
            const { data } = await axios.post('http://localhost:5000/bids', bidData)
            if (data) {
                Swal.fire({
                    title: "Success!",
                    text: 'Added Bid Successfullay.',
                    icon: "success"
                });
            }
        } catch (error) {
            console.log(error.message)
        }



    }

    return (
        <>
            <>
                <div className="flex items-center justify-between">
                    {/* Card */}
                    <div>
                        <div className="max-w-4xl px-10 py-5 bg-white rounded-md dark:bg-gray-800 font-roboto hover:shadow-2xl hover:duration-1000">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                                    {new Date(deadline).toLocaleString()}
                                </span>
                                <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                                    {category}
                                </span>
                            </div>
                            <div className="mt-5">
                                <h1 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white">
                                    {title}
                                </h1>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Name: {description.substring(0, 70)}
                                </p>
                                <div className="flex items-center justify-between mt-5">
                                    <div>
                                        <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">
                                            Buyer Details
                                        </p>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                            Name: {user?.displayName}
                                        </p>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                            Name: {user?.email}
                                        </p>
                                    </div>
                                    <div>
                                        <img className="rounded-full" src={user?.photoURL} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center text-gray-700 dark:text-gray-200 mt-5">
                                    <span>Range:</span>
                                    <p className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline">${minimumPrice} - ${maximumPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bid */}
                    <div>
                        <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 font-roboto">
                            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Place A Bid</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200">Price</label>
                                        <input id="username" type="number" name="price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200">Email Address</label>
                                        <input id="emailAddress" type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200">Comment</label>
                                        <input id="password" type="text" name="comment" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="flex flex-col gap-2 ">
                                        <label className="text-gray-700 dark:text-gray-200">Deadine</label>
                                        <DatePicker className="p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Place Bid</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        </>
    );
};

export default PlaceBid;