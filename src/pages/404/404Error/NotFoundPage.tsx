import { Link } from "react-router";
import img1 from "../../../assets/404-img.avif";

const NotFoundPage = () => {
  return (
    <div className="w-full h-[100vh] bg-[#ffffff] flex items-center justify-center">
      <section
        className="w-[90%] max-w-[900px] h-auto flex flex-col justify-center items-center relative
        before:absolute before:content-['ERROR'] before:font-bold before:text-[#6959cd] before:text-3xl before:top-4 before:left-[50%] before:-translate-x-[50%]
      "
      >
        <h1
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-[190px] font-extrabold"
        >
          404
        </h1>
        <h2 className="-mt-12 text-3xl font-semibold text-[#483c95]">Page Not Found</h2>
        <p className="w-[50%] text-center text-xl font-medium mt-2 text-[#2b2360]">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link 
        className="bg-[#6959cd] px-7 py-2 rounded-[6px] text-lg text-white mt-8 hover:scale-[102%]"
        to="/">Go To Homepage</Link>
      </section>
    </div>
  );
};

export default NotFoundPage;
