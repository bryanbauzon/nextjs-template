import {
  ERROR404,
  ERROR404_DESCRIPTION,
  RETURN_HOME,
} from "./constants/constants";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <h1 className="font-bold">{ERROR404}</h1>
      <h2>{ERROR404_DESCRIPTION}</h2>
      <Link href={"/"} className="font-bold underline">
        {RETURN_HOME}
      </Link>
    </div>
  );
}
