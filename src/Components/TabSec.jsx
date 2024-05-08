import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabSec = ({ job }) => {

    return (
        <>
            <div className='flex items-center justify-center text-lg font-roboto'></div>

            <div className='mt-10'>
                <Tabs>
                    <div className='mb-5 text-center space-y-3'>
                        <h1 className='text-3xl font-medium font-roboto'>Brows Jobs By Categoris</h1>
                        <p className='w-2/3 mx-auto text-lg font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt corporis quis nihil ipsum animi iste cumque architecto blanditiis possimus iste cumque architecto blan architecto blanditiis possimus.</p>
                    </div>
                    <div className='flex items-center justify-center text-lg font-roboto'>
                        <TabList>
                            <Tab>Web Develoment</Tab>
                            <Tab>Graphic Design</Tab>
                            <Tab>Digital Marketing</Tab>
                        </TabList>
                    </div>
                    <div className='mt-10'>
                        <TabPanel>
                            <div className='grid grid-cols-2 md: lg:grid-cols-3 gap-5'>
                                {
                                    job.filter(j => j.category === 'Web DeveLopment')
                                        .map(job =>
                                            <JobCard
                                                key={job._id}
                                                job={job}
                                            ></JobCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 md: lg:grid-cols-3 gap-5'>
                                {
                                    job.filter(j => j.category === 'Graphic Design')
                                        .map(job =>
                                            <JobCard
                                                key={job._id}
                                                job={job}
                                            ></JobCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 md: lg:grid-cols-3 gap-5'>
                                {
                                    job.filter(j => j.category === 'Digital Marketing')
                                        .map(job =>
                                            <JobCard
                                                key={job._id}
                                                job={job}
                                            ></JobCard>)
                                }
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </>
    );
};

export default TabSec;