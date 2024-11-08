import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <>
            <div className="bg-[#9538E2] pb-16 rounded-b-[24px] relative w-11/12 mx-auto py-4 px-6 md:pr-0 md:pb-32">
                <div className="text-center">
                    <div className="text-white flex flex-col w-full">
                        <div className="w-11/12 mx-auto md:w-8/12">
                            <h1 className="text-2xl md:text-4xl font-bold">
                                Upgrade your tech accessories with <br className="hidden md:block" /> Gadget Heaven accessories
                            </h1>
                            <p className="py-2 text-sm md:text-base">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="hidden md:block" /> the coolest accessories, we have it all.
                            </p>
                            <Link to='/dashboard'>
                                <button className="btn bg-white rounded-3xl text-[#9538E2] font-bold mt-4 md:mb-10">Shop now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8 md:relative md:bottom-40">
                <div className="w-3/4 md:w-1/2 h-auto bg-cover border-2 border-white p-2 md:p-4 rounded-[24px]">
                    <img className="w-full rounded-[24px]" src={banner} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;
