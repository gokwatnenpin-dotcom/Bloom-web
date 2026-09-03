export default function Nav() {
  return (
    <nav className="bg-white px-[6%] flex items-center justify-between h-[75px] sticky top-0 z-100 border-b border-[#E6ECE8]">
      <a href="/" className="text-[1.4rem] font-bold text-[#1E4D3B]">
        Bloom
      </a>
      <ul className="flex gap-8">
        <li><a href="/" className="text-[#1A211E] font-sans text-[0.9rem] font-semibold hover:text-[#E86A7C]">Home</a></li>
        <li><a href="/shop" className="text-[#1A211E] font-sans text-[0.9rem] font-semibold hover:text-[#E86A7C]">Shop</a></li>
        <li><a href="/occasions" className="text-[#1A211E] font-sans text-[0.9rem] font-semibold hover:text-[#E86A7C]">Occasions</a></li>
        <li><a href="/about" className="text-[#1A211E] font-sans text-[0.9rem] font-semibold hover:text-[#E86A7C]">About</a></li>
      </ul>
      <a href="/cart" className="text-[#1E4D3B] font-sans text-[0.9rem] font-semibold cursor-pointer bg-[#FDF0F2] px-[18px] py-2 rounded-lg">
        Cart
      </a>
    </nav>
  );
}
