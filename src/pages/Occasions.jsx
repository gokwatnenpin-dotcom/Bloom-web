export default function Occasions({ onNavigate }) {
  return (
    <main>
      <section className="px-[6%] py-20 text-center">
        <p className="text-[0.75rem] text-[#E86A7C] font-sans uppercase font-extrabold tracking-[0.12em] mb-3">Flowers for every feeling</p>
        <h1 className="text-[3.2rem] text-[#1E4D3B] leading-[1.15] mb-4">Say it with flowers</h1>
        <p className="text-[1.05rem] text-[#5A6660] font-sans max-w-[540px] mx-auto leading-[1.7]">
          Whatever the moment, there is a Bloom arrangement made to make it memorable.
        </p>
      </section>
      <section className="px-[6%] pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/shop" onClick={(event) => { event.preventDefault(); onNavigate("/shop"); }} className="text-left bg-white border border-[#E6ECE8] rounded-2xl p-8 hover:border-[#E86A7C]">
            <span className="text-4xl">🎈</span><h2 className="text-[1.6rem] text-[#1E4D3B] mt-5 mb-2">Birthday blooms</h2>
            <p className="text-[#5A6660] font-sans leading-[1.6]">Make their day brighter with a cheerful arrangement full of colour.</p>
            <span className="inline-block text-[#E86A7C] font-sans font-bold mt-5">Shop this occasion →</span>
        </a>
        <a href="/shop" onClick={(event) => { event.preventDefault(); onNavigate("/shop"); }} className="text-left bg-white border border-[#E6ECE8] rounded-2xl p-8 hover:border-[#E86A7C]">
            <span className="text-4xl">🌼</span><h2 className="text-[1.6rem] text-[#1E4D3B] mt-5 mb-2">Just because</h2>
            <p className="text-[#5A6660] font-sans leading-[1.6]">A little unexpected joy goes a long way. Send a thoughtful surprise.</p>
            <span className="inline-block text-[#E86A7C] font-sans font-bold mt-5">Shop this occasion →</span>
        </a>
        <a href="/shop" onClick={(event) => { event.preventDefault(); onNavigate("/shop"); }} className="text-left bg-white border border-[#E6ECE8] rounded-2xl p-8 hover:border-[#E86A7C]">
            <span className="text-4xl">🌱</span><h2 className="text-[1.6rem] text-[#1E4D3B] mt-5 mb-2">New beginnings</h2>
            <p className="text-[#5A6660] font-sans leading-[1.6]">Celebrate a new home, a new job, or any beautiful next chapter.</p>
            <span className="inline-block text-[#E86A7C] font-sans font-bold mt-5">Shop this occasion →</span>
        </a>
        <a href="/shop" onClick={(event) => { event.preventDefault(); onNavigate("/shop"); }} className="text-left bg-white border border-[#E6ECE8] rounded-2xl p-8 hover:border-[#E86A7C]">
            <span className="text-4xl">💌</span><h2 className="text-[1.6rem] text-[#1E4D3B] mt-5 mb-2">Thank you</h2>
            <p className="text-[#5A6660] font-sans leading-[1.6]">Say it with flowers and show someone how much their kindness means.</p>
            <span className="inline-block text-[#E86A7C] font-sans font-bold mt-5">Shop this occasion →</span>
        </a>
      </section>
    </main>
  );
}
