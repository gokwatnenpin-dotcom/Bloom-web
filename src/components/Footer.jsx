export default function Footer({ onNavigate }) {
  const shopLinks = [["Roses", "/shop"], ["Bouquets", "/shop"], ["Succulents", "/shop"], ["Wildflowers", "/shop"], ["Gift baskets", "/shop"]];
  const helpLinks = [["Delivery info", "/about"], ["Care guides", "/about"], ["Returns", "/about"], ["Contact us", "/about"], ["FAQ", "/about"]];
  return (
    <footer className="bg-[#1E4D3B] text-[#A3C2B5] pt-[4.5rem] px-[6%] pb-8">
      <div className="flex gap-16 mb-14">
        <div className="flex-[2]">
          <span className="text-[1.5rem] font-bold text-white block mb-[0.8rem]">Bloom</span>
          <p className="text-[0.92rem] text-[#C3E2D4] font-sans leading-[1.7]">
            Fresh flowers, thoughtfully arranged and delivered across Lagos. We work with local growers to bring you the freshest blooms every day.
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-[0.85rem] text-white uppercase tracking-[0.08em] mb-[1.2rem] font-sans">
            Shop
          </h4>
          <ul>{shopLinks.map(([label, path]) => <li key={label} className="mb-[0.7rem]"><a href={path} onClick={(event) => { event.preventDefault(); onNavigate(path); }} className="text-[0.9rem] font-sans hover:text-white">{label}</a></li>)}</ul>
        </div>
        <div className="flex-1">
          <h4 className="text-[0.85rem] text-white uppercase tracking-[0.08em] mb-[1.2rem] font-sans">
            Help
          </h4>
          <ul>{helpLinks.map(([label, path]) => <li key={label} className="mb-[0.7rem]"><a href={path} onClick={(event) => { event.preventDefault(); onNavigate(path); }} className="text-[0.9rem] font-sans hover:text-white">{label}</a></li>)}</ul>
        </div>
      </div>
      <p className="border-t border-[#2A5C48] pt-8 text-[0.85rem] text-[#7AA392] font-sans">
        © 2026 Bloom Lagos. All rights reserved.
      </p>
    </footer>
  );
}
