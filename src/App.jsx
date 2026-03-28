import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
  <Contact />
</div>

{/* ✅ ADD WHATSAPP BUTTON HERE */}
<a
  href="https://wa.me/919714232024?text=Hi%20I%20visited%20your%20website"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    e.preventDefault();

    console.log("WhatsApp Click Fired ✅");

    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'WhatsApp Button'
      });
      console.log("GA event sent ✅");
    } else {
      console.log("GA NOT FOUND ❌");
    }

    setTimeout(() => {
      window.open("https://wa.me/919714232024?text=Hi%20I%20visited%20your%20website", "_blank");
    }, 300);
  }}
  className="fixed bottom-5 right-5 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-8 h-8"
  />
</a>
</div> {/* closes main div */}
</BrowserRouter>
  );
};

export default App;
