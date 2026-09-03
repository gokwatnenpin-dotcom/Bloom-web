export default function Footer() {
  return (
    <footer className="bg-[#1E4D3B] text-[#A3C2B5] pt-[4.5rem] px-[6%] pb-8">
      <div className="flex gap-16 mb-14">
        <div className="flex-[2]">
          <span className="text-[1.5rem] font-bold text-white block mb-[0.8rem]">Bloom</span>
          <p className="text-[0.92rem] text-[#C3E2D4] font-sans leading-[1.7]">
            Fresh flowers, thoughtfully arranged and delivered across Plateau State, Nigeria. We work with local growers to bring you the freshest blooms every day.
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-[0.85rem] text-white uppercase tracking-[0.08em] mb-[1.2rem] font-sans">
            Shop
          </h4>
          <ul>
            <li className="mb-[0.7rem]"><a href="/shop" className="text-[0.9rem] font-sans hover:text-white">Roses</a></li>
            <li className="mb-[0.7rem]"><a href="/shop" className="text-[0.9rem] font-sans hover:text-white">Bouquets</a></li>
            <li className="mb-[0.7rem]"><a href="/shop" className="text-[0.9rem] font-sans hover:text-white">Succulents</a></li>
            <li className="mb-[0.7rem]"><a href="/shop" className="text-[0.9rem] font-sans hover:text-white">Wildflowers</a></li>
            <li className="mb-[0.7rem]"><a href="/shop" className="text-[0.9rem] font-sans hover:text-white">Gift baskets</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="text-[0.85rem] text-white uppercase tracking-[0.08em] mb-[1.2rem] font-sans">
            Help
          </h4>
          <ul>
            <li className="mb-[0.7rem]"><a href="/about" className="text-[0.9rem] font-sans hover:text-white">Delivery info</a></li>
            <li className="mb-[0.7rem]"><a href="/about" className="text-[0.9rem] font-sans hover:text-white">Care guides</a></li>
            <li className="mb-[0.7rem]"><a href="/about" className="text-[0.9rem] font-sans hover:text-white">Returns</a></li>
            <li className="mb-[0.7rem]"><a href="/about" className="text-[0.9rem] font-sans hover:text-white">Contact us</a></li>
            <li className="mb-[0.7rem]"><a href="/about" className="text-[0.9rem] font-sans hover:text-white">FAQ</a></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-[#2A5C48] pt-8 text-[0.85rem] text-[#7AA392] font-sans">
        © 2026 Bloom Plateau State. All rights reserved.
      </p>
    </footer>
  );
}
