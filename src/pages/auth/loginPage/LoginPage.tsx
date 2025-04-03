import img1 from "../../../assets/astronaut-img.png";

const LoginPage = () => {
  return (
    <div
      style={{
        backdropFilter: "blur(5px)",
      }}
      className="w-full h-[100vh] z-[1000] flex justify-center items-center"
    >
      <section className="flex flex-row justify-between items-center max-w-[1100px] h-[700px] w-[90%] -mt-32">
        {/* LEFT */}
        <div className="w-[50%] h-full border flex justify-start items-center">
          <img src="" alt="" />
          <h2></h2>
        </div>
        {/* RIGHT */}
        <div className="w-[50%] h-full flex justify-end items-center">
          <div className="border rounded-[14px] w-[460px] h-[390px] -mt-[100px]">
            <form
              onSubmit={(e) => e.preventDefault}
              action=""
              className="w-full h-full"
            ></form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
