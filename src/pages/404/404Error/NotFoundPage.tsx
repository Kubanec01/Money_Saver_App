import { Link } from "react-router";
import img1 from "../../../assets/404-img.avif";

const NotFoundPage = () => {
  return (
    <div className="w-full h-[100vh] bg-[#ffffff] flex items-center justify-center">
      <section
        className="w-[90%] max-w-[900px] h-auto flex flex-col justify-center items-center relative
        before:absolute before:content-['ERROR'] before:font-bold before:text-[#6959cd] before:xl:text-3xl before:lg:text-xl before:text-lg before:lg:top-4 before:top-2 before:left-[50%] before:-translate-x-[50%]
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
          className="xl:text-[190px] lg:text-[130px] text-[100px] font-extrabold"
        >
          404
        </h1>
        <h2 className="xl:-mt-12 lg:-mt-9 -mt-8 xl:text-3xl lg:text-2xl text-lg font-semibold text-[#483c95]">
          Page Not Found
        </h2>
        <p className="xl:w-[50%] sm:w-[40%] w-[64%] text-center xl:text-xl lg:text-lg text-sm font-medium mt-2 text-[#2b2360]">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link
          className="bg-[#6959cd] xl:px-7 lg:px-5 px-4 py-2 rounded-[6px] xl:text-lg lg:text-base text-sm text-white xl:mt-8 lg:mt-6 mt-4 hover:scale-[102%]"
          to="/"
        >
          Go To Homepage
        </Link>
      </section>
    </div>
  );
};

export default NotFoundPage;
