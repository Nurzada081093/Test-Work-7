import * as React from 'react';
import {IItem} from '../../../types';
import './Button.css';

interface IProps {
    item: IItem;
    addItem: React.MouseEventHandler;
}

const Buttons: React.FC<IProps>= ({item, addItem}) => {
    return (
        <button type="button" onClick={addItem} className="button-content">
            <div className="button-img">
                <img className="button-icon" src={item.image} alt={item.name}/>
            </div>
            <div className="button-info">
                <div className="item-name">{item.name}</div>
                <div className="item-price"><b>Price:</b> {item.price} KGS</div>
            </div>
        </button>
    );
};

export default Buttons;