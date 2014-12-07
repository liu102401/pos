function printInventory(inputs) {
    var inventory;
    var shopping_list = get_shopping_list(inputs)
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

