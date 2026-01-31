function orderTotal(order) {
        return order.items.reduce((prev, cur) => {
            const quantity = cur.quantity || 1;
            return prev + cur.price * quantity;
        }, 0);  
    }

module.exports = orderTotal;