"use client"

import { Card } from "./Card"
import { cardDetails } from "./constant"
import { CurrencyNgnIcon, ShieldCheckIcon, UsersThreeIcon } from "@phosphor-icons/react"

const iconMap = {
    currency: CurrencyNgnIcon,
    shield: ShieldCheckIcon,
    users: UsersThreeIcon,
}

export const CardStack = () => {  
    return(
        <div className="grid place-items-center grid-cols-1  md:grid-cols-3 max-w-6xl bg-neutral-950 gap-5 pb-10 mx-auto ">
            {
                cardDetails.map(detail => (
                    <Card 
                        key={detail.title}
                        title={detail.title} 
                        text={detail.text}
                        icon={iconMap[detail.icon as keyof typeof iconMap]}
                    />
                ))
            }
        </div>
    )
}