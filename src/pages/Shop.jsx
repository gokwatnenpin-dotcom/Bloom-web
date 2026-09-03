import Products from "../components/Products";

export default function Shop() {
  return (
    <main>
      <section className="bg-[#FDF0F2] px-[6%] py-16">
        <p className="text-[0.75rem] text-[#E86A7C] font-sans uppercase font-extrabold tracking-[0.12em] mb-3">
          The Bloom collection
        </p>
        <h1 className="text-[3.2rem] text-[#1E4D3B] leading-[1.15] mb-4">Find your perfect bloom</h1>
        <p className="text-[1.05rem] text-[#5A6660] font-sans max-w-137.5 leading-[1.7]">
          From joyful wildflowers to timeless roses, every arrangement is made to order and delivered fresh across Plateau State, Nigeria.
        </p>
      </section>
      <Products />
    </main>
  );
}
