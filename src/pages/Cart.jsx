export default function Cart() {
  return (
    <main className="px-[6%] py-20 min-h-[65vh]">
      <p className="text-[0.75rem] text-[#E86A7C] font-sans uppercase font-extrabold tracking-[0.12em] mb-3">Your order</p>
      <h1 className="text-[3.2rem] text-[#1E4D3B] leading-[1.15] mb-5">Your cart is waiting</h1>
      <p className="text-[1.05rem] text-[#5A6660] font-sans max-w-120 leading-[1.7] mb-8">
        Your cart is currently empty. Add a bouquet and we’ll have it wrapped fresh for delivery.
      </p>
      <a href="/shop" className="inline-block bg-[#E86A7C] text-white px-8 py-[15px] rounded-xl text-[0.95rem] font-sans font-bold">Start shopping</a>
    </main>
  );
}
