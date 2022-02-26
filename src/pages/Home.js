import ChooseEnjoy from "../components/ChooseEnjoy";
import NewProducts from "../components/NewProducts";
import Slider from "../components/Slider";
import VarietyCards from "../components/VarietyCards";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="info">
                        <h5>FAST FOOD BURGERS</h5>
                        <h1>BEST BURGERS <br /> IN GALAXY</h1>
                        <button>OUR MENU</button>
                    </div>
                </div>
            </div>
            <VarietyCards />
            <ChooseEnjoy nItems={6} hasTitle={true}/>
            <NewProducts />
            <Slider />
        </>
    );
}

export default Home;