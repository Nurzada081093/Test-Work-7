import React from 'react';
import {IItem} from '../../../types';

interface IProps {
    item: IItem;
    deleteItem: React.MouseEventHandler;
}

const Price: React.FC<IProps> = ({item, deleteItem}) => {
    return (
        <div>
            <div>{item.name}</div>
            <div>x {item.count}</div>
            <div>{item.price} KGS</div>
            <div>
                <button type="button" onClick={deleteItem}><img src="https://img.icons8.com/color/48/close-window.png"
                                                                alt="close-window"/></button>
            </div>
        </div>
    );
};

export default Price;