import React from "react";
import { useState } from "react";
import Modal from './Modal';
import Backdrop from './Backdrop';

//component must start with Capital to diff it with html elements
function Todo(props){
    const [modalIsOpen, setModalIsOpen] =useState(false); //returns an arr with two elements
                
    function deleteHandler(){
        //console.log(props.text);
        //console.log(props.text);

        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return(
    <div className = 'card'>
        <center><h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div></center>
        {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm = {closeModalHandler} /> :null} 
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
    </div> 
    );
}
//substitution to line 23 : {modalIsOpen ? <Model /> :null} 
// {modalIsOpen && <Modal:/>}
export default Todo;