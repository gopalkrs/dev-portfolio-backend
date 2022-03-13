import Header from "./Header";
import Section from "./Section";
import  Footer from "./Footer";
import './styles/Mainpage.css'

function Mainpage() {
    return (
        <div className="whole-mainpage-body">
            <Header />
            <div>
                <Section />
            </div>
            <Footer />
        </div>
    );
}
export default Mainpage;

