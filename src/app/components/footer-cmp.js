import Link from "next/link";
import { MENU_ITEMS, WEBSITE_NAME } from "../constants/constants";
export default function Footer(props){
    return(<>
     <footer className="h-[25vh] dark:bg-darkMode flex">
      <div className="flex lg:p-4 md:p-4 p-2 w-full justify-center items-center">
        <div className="grid grid-cols-2 gap-2 md:p-10 lg:p-10 p-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-1">
            <div className=" dark:text-white text-darkMode  subFont cursor-default">
              {WEBSITE_NAME} © 
            </div>
          
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 md:grid-cols-2  ">
            {MENU_ITEMS.map((item, index) =>(
                <Link href={`#${item.toLowerCase()}`} key={index}>{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer></>)
}