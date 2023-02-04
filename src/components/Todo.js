import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {

    const [ modalisOpen, setModalIsOpen] = useState(false); // 모달을 열고 닫게 하기 위해 사용하는 훅이기때문에 초기값을 false로 전달한다. 

    function deleteHandler() {
        setModalIsOpen(true);
    }

    return (
        <div className='card'> 
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>
                    delete
                </button>
            </div>
            { modalisOpen ? <Modal /> : null }  {/* = { modalisOpen && <Modal /> } , 양쪽이 모두 true이면 두번째 값이 반환됨.  */}
            { modalisOpen && <Backdrop /> }
            
        </div>
    );
}

export default Todo;