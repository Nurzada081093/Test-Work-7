import React from 'react';
import Price from './Price/Price';
import {IItem} from '../../types';
import './TotalPrice.css';

interface IProps {
    items: IItem[];
    deleteItem: (id:number) => void;
    totalPrice: number;
}

const TotalPrice: React.FC<IProps> = ({totalPrice, items, deleteItem}) => {
    const filteredItems = items.filter(item => item.count > 0);

    return (
        <div className="total-price-block">
            {totalPrice && filteredItems.length > 0 ? (
                <>
                    {filteredItems.map((item) => (
                        <div key={item.id}>
                            <Price item={item} deleteItem={() => deleteItem(item.id)}/>
                        </div>
                    ))}
                    <div className="total-price-content">
                        <div style={{fontStyle: 'oblique'}}><b>Total price:</b></div>
                        <div>{totalPrice} KGS</div>
                    </div>
                </>
            ) : (
                <div className="empty-block">
                    <p>Order is empty!</p>
                    <p>Please make an order!</p>
                </div>
            )}
        </div>
    );
};

export default TotalPrice;