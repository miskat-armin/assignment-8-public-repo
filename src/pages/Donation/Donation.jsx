import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [donation, setDonation] = useState([]);

    const [noDonationFound, setNoDonationFound] = useState(false);

    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donatedCategories = JSON.parse(localStorage.getItem('donation'));

        if (donatedCategories) {
            setDonation(donatedCategories);
            setNoDonationFound(false);
        }
        else {
            setNoDonationFound(true);
        }
    }, [])

    const handleDeleteDonation = () => {
        localStorage.clear();
        setDonation([]);
        setNoDonationFound(true);
    }

    return (
        <div className="flex justify-center items-center">
            {noDonationFound ?
                <p className="h-[80vh] flex justify-center items-center">No Donation Found</p>
                :
                <div>
                    {
                        donation.length > 0
                        &&
                        <button onClick={handleDeleteDonation} className="px-5 text-white bg-red-400 block mx-auto mb-6">Delete all donation</button>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            isShow ?
                                donation.map(category => <DonationCard key={category.id} category={category}></DonationCard>)
                                :
                                donation.slice(0, 4).map(category => <DonationCard key={category.id} category={category}></DonationCard>)
                        }
                    </div>

                    {donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className="px-3 py-2 my-6 rounded-md bg-[#009444] block mx-auto text-white">
                        {isShow ? "See Less" : "See All"}
                    </button>
                    }
                </div>
            }
        </div>
    );
};

export default Donation;