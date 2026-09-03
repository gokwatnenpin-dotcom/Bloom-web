export default function Banner() {
  return (
    <div className="mx-[6%] mb-20 bg-[#1E4D3B] rounded-xl p-[4.5rem] flex items-center justify-between">
      <div>
        <h2 className="text-[2.4rem] text-white max-w-[440px] leading-[1.2]">
          Build a custom arrangement
        </h2>
        <p className="text-[1rem] text-[#C3E2D4] font-sans max-w-[380px] mt-[0.7rem]">
          Pick your flowers, colors, and packaging. We'll craft it fresh and deliver same-day within Plateau State, Nigeria.
        </p>
      </div>
      <span className="bg-[#EFA834] text-[#1A211E] px-9 py-4 rounded-xl text-[1rem] font-sans font-extrabold">
        Start building
      </span>
    </div>
  );
}
