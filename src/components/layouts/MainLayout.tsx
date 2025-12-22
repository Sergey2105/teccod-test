import { Outlet } from "react-router";
import Header from "../Header";
import { CartProvider } from "@/provider/cart/CartProvider";

export default function MainLayout() {
    return (
        <CartProvider>
            <Header />
            <main>
                <Outlet />
            </main>
        </CartProvider>
    );
}
