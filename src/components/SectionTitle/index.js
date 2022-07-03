const SectionTitle = ({icon, smallTitle, bigTitle, description}) => {
    return (
        <div className="mb-5 flex flex-col items-center justify-center text-center">
            <img src={icon} alt=" " className="w-16 mb-3 mx-auto" />
            <h4 className="font-bold text-blue-600">{smallTitle}</h4>
            <h2 className="font-bold text-2xl md:w-[500px] my-3 mx-auto">{bigTitle}</h2>
            <p className="max-w-[500px]">{description}</p>
        </div>
    )
}

export default SectionTitle;