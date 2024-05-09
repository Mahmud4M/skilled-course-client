import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";


const UpdateMyBid = () => {
    const [startDate, setStartDate] = useState(new Date());
    const bids = useLoaderData();
    const { _id, price, deadline, clientEmail, comment } = bids;


    const handleSubmit = async event => {
        event.preventDefault();

        const form = event.target;
        const clientEmail = form.email.value;
        const deadline = startDate;
        const comment = form.comment.value;
        const price = parseFloat(form.price.value);
        const bidData = { clientEmail, deadline, price, comment };

        // Update data in Database
        try {
            const { data } = await axios.put(`http://localhost:5000/bids/${_id}`, bidData)
            if (data) {
                Swal.fire({
                    title: "Success!",
                    text: 'Bid Updated Successfullay.',
                    icon: "success"
                });
            }
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <div>
            <div>
                <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 font-roboto mt-10">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update A Bid</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Price</label>
                                <input id="username" type="number" name="price" defaultValue={price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Email Address</label>
                                <input id="emailAddress" type="email" name="email" defaultValue={clientEmail} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Comment</label>
                                <input id="password" type="text" name="comment" defaultValue={comment} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="flex flex-col gap-2 ">
                                <label className="text-gray-700 dark:text-gray-200">Deadine</label>
                                <DatePicker className="p-2 rounded-md" defaultValue={deadline} selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Bid</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateMyBid;