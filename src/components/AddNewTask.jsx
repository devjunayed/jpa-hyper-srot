import { IoIosClose } from 'react-icons/io';
import Modal from 'react-modal';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const AddNewTask = ({ modalIsOpen, setIsOpen }) => {


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Modal
                className={"absolute  bg-gradient-to-r from-pink-200 to-violet-200"}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex justify-between w-full p-2 bg-white '>
                    <h2>CREATE A TASK</h2>
                    <button className='border p-1 text-sm rounded-full  border-black' onClick={closeModal}><IoIosClose /></button>
                </div>
                <div className='w-96 '>
                    <form className='flex flex-col gap-4 mx-10 my-4'>
                        <label htmlFor="" className='flex justify-between'>
                            Title: 
                            <input type="text" className='w-2/3'/>
                        </label>
                        <label htmlFor="" className='flex justify-between'>
                             Description: 
                            <input type="text" className='w-2/3'/>
                        </label>
                        <label htmlFor="" className='flex justify-between'>
                            Team: 
                            <input type="text" className='w-2/3' />
                        </label>
                        <label htmlFor="" className='flex justify-between'>
                            Assignees: 
                            <input type="text" className='w-2/3' />
                        </label>
                        <label htmlFor="" className='flex justify-between'>
                            Priority: 
                            <select name="" id="" className='w-2/3'>
                                <option value="">P0</option>
                                <option value="">P1</option>
                                <option value="">P2</option>
                            </select>
                        </label>
                        <input type="submit" className='btn-sm btn bg-blue-800 btn-primary text-white' value="Submit" />
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddNewTask
