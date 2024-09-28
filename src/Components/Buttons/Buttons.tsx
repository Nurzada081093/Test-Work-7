import * as React from 'react';
import Button from './Button/Button';
import {IItem} from '../../types';

interface IProps {
    items: IItem[];
    addItem: (id: number) => void;
}

const Buttons: React.FC<IProps> = ({items, addItem}) => {

    return (
        <div className="items-block">
            {items.map((item) => {
                return (
                    <Button key={item.id} item={item} addItem={() => addItem(item.id)}/>
                );
            })}
        </div>
    );
};

export default Buttons;