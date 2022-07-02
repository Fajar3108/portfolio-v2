import ExperienceGroup from "./ExperienceGroup";
import experienceIcon from "../../assets/icons/experience-icon.png";
import './style.css';

const Experience = () => {
    return (
        <div className="experience flex flex-col items-center justify-center text-center py-10">
            <img src={experienceIcon} alt=" " className="w-16 mb-3" />
            <h4 className="font-bold text-blue-600">Experience</h4>
            <h2 className="font-bold text-2xl md:w-[500px] mt-3 mb-5">I have some experience in the field of web development</h2>
            <ExperienceGroup />
        </div>
    )
};

export default Experience;