export default function Banner(){
    return(
        <>
  <div class="mx-[6%] mb-20 bg-[#133528] rounded-xl p-8 md:p-18 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_16px_32px_rgba(30,77,59,0.15)] relative overflow-hidden">
    <div>
      <h2 class="text-[2.4rem] text-white max-w-110 leading-[1.2]">Build a custom arrangement</h2>
      <p class="text-[1rem] text-[#C3E2D4] font-sans max-w-95 mt-[0.7rem]">Pick your flowers, colors, and packaging. We'll craft it fresh and deliver same-day within Lagos.</p>
    </div>
    <button class="bg-[#EFA834] text-[#1A211E] border-none px-9 py-4 rounded-xl text-[1rem] font-sans font-extrabold cursor-pointer ">
      Start building
    </button>
  </div>
  </>
    )
}