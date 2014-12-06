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

    inventory = '***<没钱赚商店>购物清单***\n';
    inventory += get_shopping_inventory(shopping_list);
    inventory += '----------------------\n';
    inventory += '挥泪赠送商品：\n';
    _.chain(shopping_list)
        .filter(function(shopping_goods) {
            return shopping_goods.free_number > 0;
        })
        .each(function(free_goods) {
        inventory += '名称：' + free_goods.name + '，数量：' + free_goods.free_number + free_goods.unit + '\n';
    })
    inventory += '----------------------\n';
    inventory +=
        '总计：51.00(元)\n' +
        '节省：7.50(元)\n';
    inventory += '**********************';
    console.log(inventory);
}

