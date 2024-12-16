import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "./App.css";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function App() {
  const targetDate = new Date("2024-12-22T00:00:00").getTime();
  return (
    <section className="">
      <div className="space-y-5">
        <img
          src="/assets/linkedInImage.png"
          alt="Evi Omuabor"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
        />
        <div className="space-y-1">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            The Wait is Almost Over!
          </h1>
          <h3 className="text-lg text-gray-700">
            Discover the passion and projects that define my work.
          </h3>
        </div>

        <div className="flex items-center md:hidden">
          <FlipClockCountdown
            className="flip-clock"
            to={targetDate}
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            labelStyle={{
              fontSize: 10,
              fontWeight: 500,
              textTransform: "uppercase",
            }}
            digitBlockStyle={{ width: 30, height: 60, fontSize: 30 }}
            duration={0.5}
          />
        </div>
        <div className="md:flex items-center hidden">
          <FlipClockCountdown
            className="flip-clock"
            to={targetDate}
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            duration={0.5}
          />
        </div>

        <p className="text-lg text-gray-600">
          Have questions or opportunities to share?
        </p>
        <button className="bg-black p-2 rounded-md hover:scale-105 transition-all duration-300">
          <a
            href="mailto:eviogheneomuabor@gmail.com?subject=Interested%20in%20Exploring%20Opportunities%20Together"
            className="text-white focus:text-white text-decoration-none"
          >
            Reach Out to Me
          </a>
        </button>
      </div>
    </section>
  );
}

export default App;
