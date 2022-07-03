const ExperienceCard = ({ role, company, period, description }) => {
    return (
        <div className="experience__card text-left p-5 mb-2 md:m-3 shadow-md rounded border-t-[6px] border-blue-600 md:border-none">
            <h3 className="font-bold">{ role }</h3>
            <p>{ company }</p>
            <p className="text-gray-400 transition-all text-xs mb-2">{period}</p>
            <p className="text-gray-500 text-sm transition-all anima">{description}</p>
        </div>
    )
}

export default ExperienceCard;