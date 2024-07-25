import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText,to}) {
    return <div className="font-black text-sm flex justify-center">
      <div className="">
      {label}
      </div>

      <Link className="pointer underline cursor-pointer pl-1" to={to}>
          {buttonText}
      </Link>

    </div>
}