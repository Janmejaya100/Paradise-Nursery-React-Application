import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

// Inside your ProductList component:
const dispatch = useDispatch();

const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
};