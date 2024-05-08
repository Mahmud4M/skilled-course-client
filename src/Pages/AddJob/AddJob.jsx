import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const AddJob = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const email = user?.email;
        const deadline = startDate;
        const category = form.category.value;
        const minimumPrice = parseFloat(form.minimumPrice.value);
        const maximumPrice = parseFloat(form.maximumPrice.value);
        const description = form.description.value;
        const jobData = { title, email, deadline, category, minimumPrice, maximumPrice, description };

        // Push in dataBase with axious
        try {
            const { data } = await axios.post('http://localhost:5000/job', jobData)
            console.log(data)
            if (data) {
                Swal.fire({
                    title: "Success!",
                    text: 'Added Job Successfullay.',
                    icon: "success"
                });
            }
        } catch (error) {
            console.log(error)
        }


    }


    return (
        <>


            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Post A Job</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 font-roboto">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Job Title</label>
                            <input id="username" type="text" name="title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Email Address</label>
                            <input id="emailAddress" type="email" name="email" defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 dark:text-gray-200">Deadline</label>
                            <DatePicker className="p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 dark:text-gray-200">Category</label>
                            <select name="category" id="category" className="border p-2 rounded-md">
                                <option value="Web DeveLopment">Web DeveLopment</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Minimum Price</label>
                            <input id="username" type="number" name="minimumPrice" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Maximum Price</label>
                            <input id="password" type="number" name="maximumPrice" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                    </div>

                    <div className="mt-2">
                        <label className="text-gray-700 dark:text-gray-200" >Description</label>
                        <input id="passwordConfirmation" type="text" name="description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>


        </>
    );
};

export default AddJob;