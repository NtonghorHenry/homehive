import Image from "next/image"
import { MdLogout } from "react-icons/md";

export default function profile () {
    return (
        <main className="min-h-screen flex justify-center py-10 px-5">
            <div className="w-full md:w-90 md:max-h-140 rounded shadow-md px-5 py-4">
                <h1 className="text-center font-semibold text-xl">Profile Details</h1>
                <div className="flex justify-center">
                    <Image
                    src="/homehivebg.webp"
                    alt="profile-image"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full"
                    />
                </div>
                <div className="px-5 py-5 flex flex-col gap-4 mt-8 w-80 h-60 rounded-md shadow-md">
                    <div className="flex justify-between itemscenter ">
                        <p className="font-semibold">Full Name</p>
                        <p className="text-gray-600 text-xs">Praise Henry</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600 text-xs">Praise@gmail.com</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Phone Number</p>
                        <p className="text-gray-600 text-xs">+234 701 7146 177 </p> 
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Address</p>
                        <p className="text-gray-600 text-xs">Lape Estate, Karu</p> 
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Gender</p>
                        <p className="text-gray-600 text-xs">Male</p> 
                    </div>
                </div>
                <form className="mt-5">
                    <button type="submit" className="bg-red-500 text-white w-30 h-10 cursor-pointer rounded flex justify-center items-center">
                        <MdLogout className="text-2xl"/>
                        <span className="ml-1">Logout</span>
                    </button>
                </form>
            </div>
        </main>
    )
}