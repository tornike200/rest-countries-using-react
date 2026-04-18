import { useNavigate } from "react-router-dom";
import { useTheme } from "../store/useTheme";

function Header() {
  const navigate = useNavigate();

  const toggle = useTheme((state) => state.toggle);
  const isDark = useTheme((state) => state.isDark);

  const dark = isDark ? "bg-gray-800 text-white" : "";

  // console.log(typeof window.localStorage.getItem("isDark"));

  return (
    <>
      <header className={`${dark} shadow-md flex justify-between py-8 px-4 items-center`}>
        <h2 onClick={() => navigate(`/`)} className="cursor-pointer font-bold text-[14px]">
          Where in the world?
        </h2>
        <button onClick={toggle} className="font-semibold cursor-pointer text-[12px]">
          🌙 Dark Mode
        </button>
      </header>
    </>
  );
}

export default Header;
