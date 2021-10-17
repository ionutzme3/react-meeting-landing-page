import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import MeetingInfo from "./components/MeetingInfo";
import Path from "./components/Path";


function App() {
  return (
    <div >
    <Header />
    <Path number="01" />
    <ImageGallery />
    <MeetingInfo />
    <Path noBottom="no-bottom" number="02"/>
    <Footer />
    </div>
  );
}

export default App;
