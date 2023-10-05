import NavbarComp from "./components/navbar-comp";
import { WEBSITE_NAME } from "./constants/string";

export default function Home() {
  return (
    <>
      <NavbarComp name={WEBSITE_NAME}/>
    </>
  )
}
