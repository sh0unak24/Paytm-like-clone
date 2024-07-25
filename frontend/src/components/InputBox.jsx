export function InputBox({label, placeholder , onChange}) {
    return <div>
          <div className="text-sm text-left font-bold py-2">
            {label}
          </div>
          
          <input onChange={onChange} placeholder={placeholder} 
          className="w-full border rounded-md text-md font-semibold border-slate-300 pl-2" ></input>
      </div>
}