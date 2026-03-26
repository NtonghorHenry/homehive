"use client"
import { db } from "@/config/firebase.config"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Apartments () {
    const {data: session} = useSession();
    const [houses,setHouses] = useState([]);

    useEffect(()=>{
        const fetchHouses = async ()=>{
            try{
            const houseRef = query(collection(db,"houses"),where("user","==",session?.user?.id));
            const snapShot = await getDocs(houseRef)
            const compiledHouse = [];
            snapShot.docs.forEach((doc)=>{
                compiledHouse.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });
            setHouses(compiledHouse);
            console.log(compiledHouse);
            }
            catch(error){
                console.error("Error fetching Houses;", error)
            }
        }
            if (session){
                fetchHouses()
            }
    },[session]);

    return (
        <main className="min-h-screen my-5 p-4">
            <h1 className="text-4xl font-bold text-center text-blue-500">Our Apartments</h1>
            <div className="px-5 py-3 grid grid-col-1 md:frid-cols-2 lg:grid-cols-4">
                {houses.map(house =>
              <div Key={house.id} className="w-80 h-100 rounded shadow-md relative">
                    <Image
                    src="/House6.webp"
                    alt="House"
                    width={200}
                    height={200}
                    className="w-80 h-45 rounded-t"
                    />
                <div className="px-5 py-3">
                <p className="text-xl font-semibold text-gray-800">{house.data.title}</p>
                <p className="mt-1 text-xs text-green-500">{house.data.price}</p>
                <p className="mt-1 text-sm">{house.data.location}</p>
                <p className="mt-3 text-gray-800 text-sm">{house.data.description}</p>
                </div>
                 <div className="absolute top-2 right-2 w-25 h-8 flex justify-center items-center text-white bg-red-300">
                <p>-10% off</p>
            </div>
              </div>
              )}
            </div>
        </main>
    )
}