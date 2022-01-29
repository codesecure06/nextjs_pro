import { CogIcon, PlusIcon, QuestionMarkCircleIcon, UserCircleIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import { getUrl, getUser } from "../apis"
import ProfileMenuItem from "../ProfileMenuItem"

function ProfileMenu(){
    const [user, setUser] = useState(null)

    useEffect(async ()  => {
        let userData = await null
        setUser(await userData)
    }, [])
    let is_seller = user != null && user.is_seller == "1" ? true : false
    return (
        <div>
            <ProfileMenuItem Icon="/dashboard/images/icons/dashboard/profile.svg" title="Home" link={`https://www.${getUrl()}`}/>
            {
                is_seller ? (
                    <ProfileMenuItem Icon="/dashboard/images/icons/dashboard/wallet.svg" title="Wallet" link="/wallet"/>
                ) : (
                    <ProfileMenuItem Icon="/dashboard/images/icons/dashboard/purchases.svg" title="Purchases" link="/purchases"/>
                )
            }
            {
                is_seller ? (
                    <ProfileMenuItem Icon="/dashboard/images/icons/dashboard/leads.svg" title="New Leads" link="/lead-management"/>
                ) : null
            }
            <ProfileMenuItem Icon="/dashboard/images/icons/dashboard/reviews-ratings.svg" title="Reviews ratings" link="/reviews-ratings"/>
            {
                is_seller ? null : (
                    (
                        <ProfileMenuItem Icon="/dashboard/images/icons/dashboard/profile.svg" title="Become a seller" link="/company-profile"/>
                    )
                )
            }
            {/* <ProfileMenuItem Icon="help.svg" title="Help"/>
            <ProfileMenuItem Icon="more.svg" title="More"/> */}
        </div>
    )
}

export default ProfileMenu