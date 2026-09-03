import HeroImg from "../assets/Gemini_Generated_Image_kwwjvtkwwjvtkwwj.jpg";

export default function Hero({ onNavigate }) {
  return (
    <section className="flex items-center gap-16 px-[6%] py-20 min-h-[80vh]">
      <div className="flex-1">
        <h1 className="text-[3.8rem] leading-[1.15] mb-[1.2rem] text-[#1E4D3B]">
          Fresh blooms for <em className="italic text-[#E86A7C]">every moment</em>
        </h1>
        <p className="text-[1.1rem] text-[#5A6660] max-w-[480px] mb-[2.2rem] font-sans leading-[1.7]">
          Handpicked bouquets and wildflower arrangements delivered right to your door. Nature's beauty, curated with care.
        </p>
        <div className="flex gap-4">
          <a href="/shop" onClick={(event) => { event.preventDefault(); onNavigate("/shop"); }} className="bg-[#E86A7C] text-white px-8 py-[15px] rounded-xl text-[0.95rem] font-sans font-bold">
            Shop now
          </a>
          <a href="/occasions" onClick={(event) => { event.preventDefault(); onNavigate("/occasions"); }} className="text-[#1E4D3B] border-2 border-[#1E4D3B] px-8 py-[15px] rounded-xl text-[0.95rem] font-sans font-bold">
            View occasions
          </a>
        </div>
      </div>
      <div
        className="flex-1 rounded-3xl h-[500px] bg-cover bg-center flex flex-col justify-end p-8"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="flex flex-col bg-[#eed4d4] p-[14px_22px] rounded-xl self-start">
          <span className="text-[0.75rem] text-[#E86A7C] font-sans uppercase font-bold">
            Same-Day Delivery
          </span>
          <span className="text-[1.05rem] font-bold text-[#1E4D3B] font-sans">
            Free on orders over ₦10,000
          </span>
        </div>
      </div>
    </section>
  );
}
