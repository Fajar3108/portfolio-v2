import SectionTitle from "../SectionTitle";
import portfolioIcon from '../../assets/icons/portfolio-icon.png';

const PortfolioSection = () => {
    return (
        <div className="portfolio py-10">
            <SectionTitle icon={portfolioIcon} smallTitle="My Projects" bigTitle="Project That I Made" description="I have developed several projects using various programming languages ​​and frameworks" />
        </div>
    )
}

export default PortfolioSection;