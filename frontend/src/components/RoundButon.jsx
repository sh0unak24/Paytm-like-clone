export const RoundButton = ({title}) => {
    return <div className="flex ">
        <div className="  flex h-12 w-12 pl-3 bg-green-400 rounded-full justify-center mt-12 ">
            <div className="flex flex-col justify-center h-full mr-3 text-white text-2xl">
                {title} 
            </div>
    
        </div>
        <div className="flex flex-col justify-center ml-4 mt-10 text-2xl font-bold">
            <p>Friend's Name</p>
        </div>
    </div>
}