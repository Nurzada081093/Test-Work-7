import React from 'react';
import {IItem} from '../../../types';
import './Price.css';

interface IProps {
    item: IItem;
    deleteItem: React.MouseEventHandler;
}

const Price: React.FC<IProps> = ({item, deleteItem}) => {
    return (
        <div className="order-item">
            <div className="order-name">{item.name}</div>
            <div>x {item.count}</div>
            <div>{item.price} KGS</div>
            <div>
                <button className="delete-order-button" type="button" onClick={deleteItem}><img
                    src="https://img.icons8.com/color/48/close-window.png"
                    alt="close-window"/>
                </button>
            </div>
        </div>
    );
};

export default Price;