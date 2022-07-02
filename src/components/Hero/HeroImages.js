const HeroImages = ({ profile, mempis }) => {
    return (
        <div className="hero__images relative flex md:block items-center justify-center mb-5 md:mb-0">
            <img src={profile} alt="Profile" className="w-1/2 md:w-4/5" />
            <img src={mempis} alt=" " className="hidden md:block absolute bottom-0 right-10 md:right-0 -z-10 w-2/5 md:w-1/2" />
        </div>
    )
};

export default HeroImages;