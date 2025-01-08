import React from 'react'

interface ICardTeam {
    icon: React.ReactElement
    title: string;
    description: string;
}

const Card = ({ description, icon, title }: ICardTeam) => {
    return (
        <div>
            <div>
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card