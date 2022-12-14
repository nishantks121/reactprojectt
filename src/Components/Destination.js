import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/batunga.jpg";
import Mountain4 from "../assets/4.jpg";
import "../Components/DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppertunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano , Batangas"
        text="Taal Volcano is a must-see Attraction in the Philippines. A trip to
      Manila is not complete without a visit to see Taal Volcano. Located
      about 100 km from Manila, it takes approximately 2 hours drive by
      car each way, depending upon the traffic conditions of course. The
      best way to get here is by hiring a Car (with driver) which can be
      arranged through local travel agents in Manila (that makes the trip
      even more enjoyable because it offers some very good sceneries along
      the way, to the Volcano too).Tickets need to be purchased upon
      entering the site and then you are greeted by some amazingly
      breathtaking sights the nature has to offer."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Batulao, Batangas"
        text="Conveniently located in Batangas, which is only a few hours away from the metro by car, Mount Batulao has quickly become a popular summer destination for travelers who are new to trekking and mountain-climbing. Meet up with your guide and the rest of your group at McDonald's El Pueblo in Ortigas, then hop inside an air-condiitoned vehicle to get to the jump-off point for Mt. Batulao. Once you arrive, go through a brief orientation and some last-minute packing, before your guide officially begins the trek! Take in the gorgeous scenery surrounding you, with lush forests and sweeping hills that are sure to take your breath away. Though the weather on top of the mountain can be very unpredictable, with cool weather during January and February while remaining dry or muddy the rest of the year, you're sure to enjoy the refreshing winds that are sure to come your way. Though the trail might get tougher as you get closer to the summit, you'll also meet some friendly locals at the campsites who will give you tips and share stories about life on the mountain."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
