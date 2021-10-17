import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import MeetingInfo from "./components/MeetingInfo";
import Path from "./components/Path";


function App() {
  return (
    <div >
    <Header />
    <Path />
    <ImageGallery />
    <MeetingInfo />
    <Path noBottom="no-bottom" />
    <Footer />
    </div>
  );
}

export default App;
