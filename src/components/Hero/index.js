import profile from '../../assets/images/profile-hexagon.png';
import mempis from '../../assets/images/Titik-titik.png';
import HeroContent from './HeroContent';
import HeroImages from './HeroImages';

const Hero = () => {
    return (
        <div className="hero flex flex-col-reverse md:flex-row items-center h-screen max-h-[900px] overflow-hidden md:relative justify-center md:justify-between text-center md:text-left">
            <HeroContent />
            <HeroImages profile={profile} mempis={mempis} />
        </div>
    )
};

export default Hero;