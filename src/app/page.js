import { MENU_ITEMS, WEBSITE_NAME } from "./constants/constants";
import NavbarCmp from "./components/navbar-cmp";

export default function Home() {
  return (
    <>
      <NavbarCmp name={WEBSITE_NAME} />
      {/* TEMPORARY IMPLEMENTATION */}
      {MENU_ITEMS.map((item, index) => (
        <div key={index}>
          <div className="h-screen bg-white" id={`${item.toLowerCase()}`}>
            <div className="h-screen flex justify-center items-center">
              {item}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
