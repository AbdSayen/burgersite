import Aboutusbanner from "../components/AboutUsBanner"
import Awards from "../components/Awards";
import ChooseEnjoy from "../components/ChooseEnjoy"
import Galleries from "../components/Galleries";
import Meetthechef from "../components/MeetTheChef"
import Ourteam from "../components/OurTeam"
import Slider2 from "../components/Slider2";

const Aboutus = () => {
    return (
        <div>
            <Aboutusbanner />
            <Ourteam />
            <Meetthechef />
            <Galleries />
            <ChooseEnjoy nItems={3} hasTitle={false} />
            <Slider2 />
            <Awards />
        </div>
    );
}

export default Aboutus;