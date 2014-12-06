function printInventory(inputs) {
    var inventory;
    var shopping_list = [
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            purchase_number: 5,
            price: 3.00,
            unit: '瓶'
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            purchase_number: 2,
            price: 15.00,
            unit: '斤'
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            purchase_number: '3',
            price: 4.50,
            unit: '袋'
        }
    ]
    count_free_goods_number_in_shopping_list(shopping_list)
    count_goods_cost_in_shopping_list(shopping_list)
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

