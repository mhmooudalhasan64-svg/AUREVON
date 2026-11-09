import { useEffect, useState } from "react";
import { configured, supabase } from "../lib/supabase";

export function useStoreData() {
  const [cats, setCats] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    (async () => {
      if (!configured) {
        setError("المتجر قيد الإعداد التقني.");
        setLoading(false);
        return;
      }

      const [categoriesRes, productsRes] = await Promise.all([
        supabase
          .from("store_categories")
          .select("id,name,slug")
          .eq("is_active", true)
          .order("sort_order"),
        supabase
          .from("store_products")
          .select(
            "id,category_id,name,description,price_syp,stock_quantity,image_urls,is_featured"
          )
          .eq("is_active", true)
          .gt("stock_quantity", 0)
          .order("created_at", { ascending: false }),
      ]);

      if (!active) return;

      if (categoriesRes.error || productsRes.error) {
        setError("تعذر تحميل بيانات المتجر حالياً.");
      } else {
        setCats(categoriesRes.data || []);
        setProducts(productsRes.data || []);
      }
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, []);

  return { cats, products, loading, error };
}
