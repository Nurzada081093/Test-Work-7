import './App.css';
import Buttons from './Components/Buttons/Buttons';
import {useState} from 'react';
import {IItem} from './types';
import TotalPrice from './Components/TotalPrice/TotalPrice';

const App = () => {
    const [items, setItems] = useState<IItem[]>([
        {id: 1, name: 'Hamburger', price: 80, count: 0, image: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-burger-fast-food-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png'},
        {id: 2, name: 'Coffee', price: 70, count: 0, image: 'https://img.icons8.com/doodle/48/coffee-to-go.png'},
        {id: 3, name: 'Cheeseburger', price: 90, count: 0, image: 'https://img.icons8.com/stickers/50/hamburger.png'},
        {id: 4, name: 'Tea', price: 50, count: 0, image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-tea-morning-flaticons-lineal-color-flat-icons.png'},
        {id: 5, name: 'Fries', price: 45, count: 0, image: 'https://img.icons8.com/3d-fluency/50/mcdonalds-french-fries.png'},
        {id: 6, name: 'Cola', price: 40, count: 0, image: 'https://img.icons8.com/3d-fluency/50/cola.png'},
        {id: 7, name: 'Pizza', price: 100, count: 0, image: 'https://img.icons8.com/papercut/50/pizza.png'},
        {id: 8, name: 'Juice', price: 60, count: 0, image: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-juice-healthy-lifestyle-icongeek26-linear-colour-icongeek26.png'},
    ]);

    const [totalPrice, setTotalPrise] = useState<number>(0);

    const addItem = (id:number) => {
        const index:number = items.findIndex((item):boolean => item.id === id);

        const copyItems = items.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    count: item.count + 1,
                };
            }
            return {...item};
        });

        const totalNewPrice: number = copyItems.reduce((acc, item) => {
            acc += item.count * item.price;
            return acc;
        }, 0);

        setItems(copyItems);
        setTotalPrise(totalNewPrice);
    };

    const deleteItem = (id:number) => {
        const index:number = items.findIndex((item): boolean => item.id === id);

        const copyItems = items.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    count: item.count - 1,
                };
            }
            return {...item};
        });

        const totalNewPrice: number = copyItems.reduce((acc, item) => {
            acc += item.count * item.price;
            return acc;
        }, 0);

        setItems(copyItems);
        setTotalPrise(totalNewPrice);
    };

    return (
        <div className="container">
            <div className="content">
                <div className="card order-card">
                    <div className="title">Order Details</div>
                    <div className="order-block">
                        <TotalPrice items={items} deleteItem={deleteItem} totalPrice={totalPrice}/>
                    </div>
                </div>
                <div className="card">
                    <div className="title">Menu</div>
                    <Buttons items={items} addItem={addItem}/>
                </div>
            </div>
        </div>
    );
};

export default App;
