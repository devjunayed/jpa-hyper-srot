import { IoMdPerson } from "react-icons/io";

const Header = () => {
    return (
        <div className='flex justify-between p-6'>
            <h1 className="text-2xl">Task Board</h1>
            <div className="avatar placeholder">
                <div className="bg-white text-neutral-content rounded-full w-8 ">
                    <span className="text-2xl text-black"><IoMdPerson /></span>
                </div>
            </div>
        </div>
    )
}

export default Header
