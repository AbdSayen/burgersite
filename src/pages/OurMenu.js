import Aboutusbanner from "../components/AboutUsBanner";
import ChooseEnjoy from "../components/ChooseEnjoy";
import Menu from "../components/Menu";

const Ourmenu = () => {
    return (
        <>
            <Aboutusbanner titleText="OUR MENU" infoText="Want to know how our dishes takes from good to great? Let's begin our story about our delicious hamburgers."/>
            <Menu type="dishes" titleText="Main Dishes" infoText="Perfect, tender, well-seasoned and succulent"/>
            <ChooseEnjoy nItems={3} hasTitle={false} />
        </>
    );
}

export default Ourmenu;