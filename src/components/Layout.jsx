import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useTheme } from "../store/useTheme";

function Layout() {
  const isDark = useTheme((state) => state.isDark);

  const dark = isDark ? "bg-gray-700 text-white" : "";

  return (
    <div>
      <Header />

      <main className={` ${dark} px-4 pt-6`}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
