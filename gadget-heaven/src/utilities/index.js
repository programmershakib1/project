import toast from "react-hot-toast";

// cart

const getAllCart = () => {
    const all = localStorage.getItem('cart');
    if(all){
        const add = JSON.parse(all);
        return add;
    }
    else{
        return [];
    }
}

const addCart = gadget => {

    const add = getAllCart();

    const isExist = add.find(item => item.product_id == gadget.product_id);

    if(isExist) return toast.error('This cart item already added');

    add.push(gadget);

    localStorage.setItem('cart', JSON.stringify(add));
    toast.success('Adding item to cart');
}

const removeCart = (id) => {
    const add = getAllCart();
    const remaining = add.filter(gadget => gadget.product_id != id);
    localStorage.setItem('cart', JSON.stringify(remaining));
    toast.success('Removing item to wishlist');
}

const removeAll = () => {
    localStorage.removeItem('cart');
}

// wish

const getAllWish = () => {
    const all = localStorage.getItem('wish');
    if(all){
        const add = JSON.parse(all);
        return add;
    }
    else{
        return [];
    }
}

const addWish = gadget => {
    const add = getAllWish();
    const isExist = add.find(item => item.product_id == gadget.product_id);
    if(isExist) return toast.error('This wish item already added');
    add.push(gadget);
    localStorage.setItem('wish', JSON.stringify(add));
    toast.success('Adding item to wishlist');
}

const removeWish = (id) => {
    const add = getAllWish();
    const remaining = add.filter(gadget => gadget.product_id != id);
    localStorage.setItem('wish', JSON.stringify(remaining));
    toast.success('Removing item to wishlist');
}

export {addCart, getAllCart, removeCart, addWish, getAllWish, removeWish, removeAll}