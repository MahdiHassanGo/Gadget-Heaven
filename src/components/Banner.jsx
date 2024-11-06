
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';


const Banner = () => {
    return (
        <>
            <div className=" bg-[#9538E2] pb-32 rounded-b-[24px] relative bottom-3 w-11/12 mx-auto py-4">
                <div className=" text-center">
                    <div className=" text-white flex flex-col w-full">
                        {}
                        <div className="w-8/12 mx-auto">
                            <h1 className="text-4xl font-bold">Upgrade your tech accessories with <br /> Gadget Heaven accessories</h1>
                            <p className="py-2">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all.
                            </p>
                            <Link to='/dashboard'><button className="btn bg-white rounded-3xl text-[#9538E2] font-bold mb-10">Shop now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" ">
                <div className="w-1/2 h-auto bg-cover flex mx-auto border-2 border-white p-4 rounded-[24px] relative bottom-40">
                    <img className="w-full rounded-[24px] bg-cover" src={banner} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;