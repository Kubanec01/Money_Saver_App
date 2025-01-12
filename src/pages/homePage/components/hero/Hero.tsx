import img1 from "../../../../assets/saturn-img.png";

export const Hero = () => {
  return (
    <div className="border mx-auto w-[80%] max-w-[1300px] flex justify-center items-center h-[400px] mt-[200px]">
      {/* LEFT */}
      <div className="border h-full w-[50%]">
        <h1 className="text-white">
          Good Evening <span>Jacob</span> <br />
          <span>Let's Save Your Money</span> 🚀
        </h1>
        <button className="text-white">Mission</button>
      </div>
      {/* RIGHT */}
      <div className="border flex items-center justify-center h-full w-[50%]">
        <img
          style={{
            rotate: "-30deg",
          }}
          className="object-cover w-full h-full"
          src={img1}
          alt="saturn-img"
        />
      </div>
    </div>
  );
};