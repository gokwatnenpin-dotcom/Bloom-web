import HeroImg from "../assets/Gemini_Generated_Image_kwwjvtkwwjvtkwwj.jpg";

export default function Hero() {
  return (
    <>
      <section className="grid grid-cols-1 gap-16 px-[6%] py-20 items-center min-h-[80vh]">
        <div className="hero-text">
          <h1 className="text-5xl  leading-[1.15] mb-[1.2rem] text-[#1E4D3B]">
            Fresh blooms for <em className="italic text-[#E86A7C]">every moment</em>
          </h1>
          <p className="text-[1.1rem] text-[#5A6660] max-w-140 font-sans leading-[1.7]">
            Handpicked bouquets and wildflower arrangements delivered right to your door. Nature's beauty, curated with care.
          </p> <br />
          <div className="flex gap-4">
            <button className="bg-[#E86A7C] text-white border-none px-8 py-[0.95rem] rounded-xl">
              Shop now
            </button>
            <button className="bg-transparent text-[#1E4D3B] border-2 border-[#1E4D3B] px-8 py-[0.95rem] rounded-xl">
              View occasions
            </button>
          </div>
        </div>
        <div 
          className="rounded-3xl h-125 bg-cover bg-center flex flex-col justify-end p-8 relative shadow-xl"
          style={{ backgroundImage: `url(${HeroImg})` }}
        >
          <div className="inline-flex flex-col gap-0.5 bg-[#eed4d4] p-[14px_22px] rounded-2xl self-start backdrop-blur-sm">
            <span className="text-[0.75rem] text-[#E86A7C] font-sans uppercase font-bold">
              Same-Day Delivery
            </span>
            <span className="text-[1.05rem] font-bold text-[#1E4D3B] font-sans">
              Free on orders over ₦10,000
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
