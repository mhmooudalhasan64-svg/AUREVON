import { useState } from "react";
import { supabase } from "./lib/supabase";
import { useStoreData } from "./hooks/useStoreData";
import { useCart } from "./hooks/useCart";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import About from "./components/About";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import SuccessModal from "./components/SuccessModal";
import TopBar from "./components/TopBar";

export default function App() {
  const { cats, products, loading, error } = useStoreData();
  const cart = useCart();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(null);

  function goToCheckout() {
    setDrawerOpen(false);
    setCheckoutOpen(true);
  }

  async function submitOrder(form) {
    setBusy(true);
    setSubmitError("");

    const { data, error: rpcError } = await supabase.rpc("submit_store_order", {
      p_customer_name: form.name,
      p_customer_phone: form.phone,
      p_governorate: form.governorate,
      p_city: form.city,
      p_address: form.address,
      p_customer_note: form.note,
      p_items: cart.items.map((p) => ({ product_id: p.id, quantity: p.quantity })),
    });

    setBusy(false);

    if (rpcError) {
      setSubmitError(rpcError.message || "تعذر إرسال الطلب.");
      return;
    }

    setSuccess(Array.isArray(data) ? data[0] : data);
    cart.clear();
    setCheckoutOpen(false);
    setDrawerOpen(false);
  }

  return (
    <div className="app">
      <TopBar />
      <Header count={cart.count} onOpenCart={() => setDrawerOpen(true)} />
      <Hero />
      <Shop
        cats={cats}
        products={products}
        loading={loading}
        error={error}
        onAdd={cart.add}
      />
      <About />
      <Footer />

      {drawerOpen && (
        <CartDrawer
          items={cart.items}
          count={cart.count}
          total={cart.total}
          onClose={() => setDrawerOpen(false)}
          onChangeQty={cart.changeQty}
          onRemove={cart.remove}
          onCheckout={goToCheckout}
        />
      )}

      {checkoutOpen && (
        <CheckoutModal
          total={cart.total}
          busy={busy}
          error={submitError}
          onClose={() => setCheckoutOpen(false)}
          onSubmit={submitOrder}
        />
      )}

      {success && (
        <SuccessModal order={success} onClose={() => setSuccess(null)} />
      )}
    </div>
  );
}
