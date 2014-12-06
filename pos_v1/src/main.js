function printInventory(inputs) {
    var inventory;
    var shopping_list = [
        {
            name: '雪碧',
            purchase_number: 5,
            free_number: 1,
            price: 3.00,
            unit: '瓶',
            subtotal: 12.00},
        {
            name: '荔枝',
            purchase_number: 2,
            price: 15.00,
            unit: '斤',
            subtotal: 30.00
        },
        {
            name: '方便面',
            purchase_number: '3',
            free_number: 1,
            price: 4.50,
            unit: '袋',
            subtotal: 9.00
        }
    ]

    _.each()

    inventory = '***<没钱赚商店>购物清单***\n';
    inventory += get_shopping_inventory(shopping_list);
    inventory += '----------------------\n';
    inventory += '挥泪赠送商品：\n';
    inventory += get_free_goods_inventory(shopping_list);
    inventory += '----------------------\n';
    inventory += get_summary_inventory(shopping_list);
    inventory += '**********************';
    console.log(inventory);
}

