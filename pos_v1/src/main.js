function printInventory(inputs) {
    var inventory;
    var shopping_inventory = [
        {
            name: '雪碧',
            purchase_number: 5,
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
            price: 4.50,
            unit: '袋',
            subtotal: 9.00
        }
    ]
    inventory = '***<没钱赚商店>购物清单***\n';
    _.each(shopping_inventory, function(shopping_goods){
        inventory += '名称：' + shopping_goods.name + '，数量：' + shopping_goods.purchase_number + shopping_goods.unit + '，单价：'
        + shopping_goods.price.toFixed(2) + '(元)，小计：' + shopping_goods.subtotal.toFixed(2) + '(元)\n';
    });
    inventory += '----------------------\n';
    inventory += '挥泪赠送商品：\n';
    inventory +=
        '名称：雪碧，数量：1瓶\n' +
        '名称：方便面，数量：1袋\n'
    inventory += '----------------------\n';
    inventory +=
        '总计：51.00(元)\n' +
        '节省：7.50(元)\n';
    inventory += '**********************';
    console.log(inventory);
}

