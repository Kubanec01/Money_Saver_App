import img1 from "../../../assets/404-img.webp";

const NotFoundPage = () => {
  return (
    <div className="w-full h-[100vh] bg-[#fff9f9fa] flex items-center justify-center">
      <section className="w-[90%] max-w-[900px] h-auto flex flex-col justify-center items-center">
        <h1
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-[180px] font-bold"
        >
          404
        </h1>
        <p
        className="-mt-12 text-3xl font-semibold"
        >Page Not Found</p>
        <p className="w-[50%] text-center text-xl font-medium mt-1">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
      </section>
    </div>
  );
};

export default NotFoundPage;
