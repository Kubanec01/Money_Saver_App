import image1 from "../../assets/api-info-img.png";
import {InfoCard, InfoCardProps} from "../../components/infoCard/InfoCard"

const data:InfoCardProps[] = [
  {
    id: "core-coords-info",
    title: "Core Coords Section",
    desc: "This is your go-to motivational and info hub, packed with keydetails for every great adventure. Alongside inspiring quotes, you’ll also find a handy way to keep track of time and date because every captain’s journey runs on perfect timing!",
    image: image1,
    mainPlacement: "left",
  },
]

const InfoPage = () => {
  return (
    <div className="mx-auto w-[90%] max-w-[1300px] mt-[300px]">
      <div className="w-full">
        <h1 className="text-7xl text-spaceNeonBlue font-extrabold uppercase text-center">
          Instructions for Starting <br />
          Your Saving Adventure
        </h1>
        <p
          className="text-2xl text-whiteShadow500 text-center w-[55%] mt-4 mx-auto relative
        after:absolute after:w-[94%] after:-bottom-8 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[#ffffff7e] after-rounded-[20px]"
        >
          Greetings, Captain! Here you’ll find all the instructions and
          information you’ll need on your journey. I’ll be at your service for
          the entire ride until the very end of your saving days. Yeehaw!
        </p>
      </div>
      {/* API INFO SECTION */}
        {data.map(i => {
          return(
            <InfoCard id={i.id} title={i.title} desc={i.desc} image={i.image} mainPlacement={i.mainPlacement} />
          )
        })}
    </div>
  );
};

export default InfoPage;
