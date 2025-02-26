const InfoPage = () => {
  return (
    <div className="mx-auto w-[90%] max-w-[1300px] mt-[300px]">
      <div className="w-full">
        <h1 className="text-7xl text-spaceNeonBlue font-extrabold uppercase text-center">
          Instructions for Starting <br />
          Your Saving Adventure
        </h1>
        <p className="text-2xl text-whiteShadow500 text-center w-[55%] mt-4 mx-auto relative
        after:absolute after:w-[94%] after:-bottom-8 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[#ffffff7e] after-rounded-[20px]">
          Greetings, Captain! Here you’ll find all the instructions and
          information you’ll need on your journey. I’ll be at your service for
          the entire ride until the very end of your saving days. Yeehaw!
        </p>
      </div>
    </div>
  );
};

export default InfoPage;
