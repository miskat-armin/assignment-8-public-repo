import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [donation, setDonation] = useState([]);

    const [noDonationFound, setNoDonationFound] = useState(false);

    useEffect(() => {
        const donatedCategories = JSON.parse(localStorage.getItem('donation'));

        if (donatedCategories) {
            setDonation(donatedCategories);
        }
        else {
            setNoDonationFound('No Donation Found');
        }
    }, [])

    console.log(donation)

    return (
        <div>
            {noDonationFound ?
                <p className="h-[80vh] flex justify-center items-center">{noDonationFound}</p>
                :
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {donation.map(category => <DonationCard key={category.id} category={category}></DonationCard>)}
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;