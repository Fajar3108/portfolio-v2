import ExperienceGroup from "./ExperienceGroup";
import experienceIcon from "../../assets/icons/experience-icon.png";
import SectionTitle from "../SectionTitle";
import './style.css';

const ExperienceSection = () => {
    return (
        <div className="experience py-10">
            <SectionTitle icon={experienceIcon} smallTitle="Experience" bigTitle="I have some experience in the field of web development" />
            <ExperienceGroup />
        </div>
    )
};

export default ExperienceSection;