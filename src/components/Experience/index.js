import ExperienceGroup from "./ExperienceGroup";
import experienceIcon from "../../assets/icons/experience-icon.png";
import SectionTitle from "../SectionTitle";
import './style.css';

const Experience = () => {
    return (
        <div className="experience flex flex-col items-center justify-center text-center py-10">
            <SectionTitle icon={experienceIcon} smallTitle="Experience" bigTitle="I have some experience in the field of web development" />
            <ExperienceGroup />
        </div>
    )
};

export default Experience;