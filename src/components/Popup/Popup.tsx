import React from 'react';
import styled from './Popup.module.css';
import closeIcon from "../../assets/images/icons/close-icon.svg";
import { PopupProps } from '../../types/types';

const Popup = ({ isOpen, setIsOpen, children }: PopupProps) => {
    const handleClose = () => setIsOpen(!isOpen);

    return (
        <div className={`${isOpen ? '' : styled.popupHidden} ${styled.popup}`}>
            <div className={styled.popupContent}>
                {children}
                <button className={styled.popupCloseBtn} onClick={handleClose}>
                    <img src={closeIcon} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default Popup;
