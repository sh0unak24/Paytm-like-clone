export const Balance = ({ value }) => {
    return <div className="flex mt-6">
        <div className="font-bold text-lg ml-4 ">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}