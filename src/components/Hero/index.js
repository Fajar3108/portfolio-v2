import profile from '../../assets/images/profile-hexagon.png';
import mempis from '../../assets/images/Titik-titik.png';
import HeroContent from './HeroContent';
import HeroImages from './HeroImages';

const Hero = () => {
    return (
        <div className="hero flex flex-col-reverse md:flex-row items-center h-screen overflow-hidden relative justify-center text-center md:text-left">
            <HeroContent />
            <HeroImages profile={profile} mempis={mempis} />
        </div>
    )
};

export default Hero;