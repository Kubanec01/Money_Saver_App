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
          {/* FORM BODY */}
          <div
          style={{
            boxShadow: " 0 0 20px 14px #4317b26a",
          }}
          className="border-[3px] border-neonPurple rounded-[14px] w-[460px] h-[390px] -mt-[100px] pt-6">
            <form
              onSubmit={(e) => e.preventDefault}
              action=""
              className="w-full h-full flex flex-col items-center"
            >
              {/* EMAIL AND PASSWORD */}
              <section className="w-[92%] h-[250px] flex flex-col items-center justify-start gap-4">
                <input type="text" placeholder="Email..." className="w-full h-[60px] pl-2 bg-transparent rounded-[4px] border-[3px] border-[#6b6a6adc] focus:border-neonPurple focus:outline-none caret-[#6b6a6adc] text-xl text-[#c1bfbf]" />
                <input type="text" placeholder="Password..." className="w-full h-[60px] pl-2 bg-transparent rounded-[4px] border-[3px] border-[#6b6a6adc] focus:border-neonPurple focus:outline-none caret-[#6b6a6adc] text-xl text-[#c1bfbf]" />
                {/* <button>Login</button>
                <button>Forgot Password</button> */}
              </section>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
