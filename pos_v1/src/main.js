function printInventory(inputs) {
    var inventory;
    inventory = '***<没钱赚商店>购物清单***\n';
    inventory +=
        '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
        '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
        '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n';
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

