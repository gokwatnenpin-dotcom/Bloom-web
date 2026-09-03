export default function Nav() {
    return(
        <>
        <nav class="sticky top-0 z-100 h-18.75 bg-white px-[6%] flex items-center justify-between border-b border-[#E6ECE8]">
    <a href="#" class="text-[1.4rem] font-bold text-[#1E4D3B]">Bloom</a>
    <ul class="hidden gap-8 list-none font-sans text-[0.9rem] font-semibold">
      <li><a href="#" class="text-[#1A211E]  hover:text-[#E86A7C] transition-colors duration-200">Home</a></li>
      <li><a href="#" class="text-[#1A211E]  hover:text-[#E86A7C] transition-colors duration-200">Shop</a></li>
      <li><a href="#" class="text-[#1A211E]  hover:text-[#E86A7C] transition-colors duration-200">Occasions</a></li>
      <li><a href="#" class="text-[#1A211E]  hover:text-[#E86A7C] transition-colors duration-200">About</a></li>
    </ul>
    <div class="flex items-center gap-2 text-[#1E4D3B] font-sans text-[0.9rem] font-semibold cursor-pointer bg-[#FDF0F2] px-4.5 py-2 rounded-full">
      Cart</div>
  </nav>
        </>
    )
}