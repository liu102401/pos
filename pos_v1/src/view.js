/**
 *
 * Created by 風 on 2014/12/6.
 */
function get_shopping_inventory(shopping_list) {
    var shopping_inventory = '';
    _.each(shopping_list, function (shopping_goods) {
        shopping_inventory += '名称：' + shopping_goods.name + '，数量：' + shopping_goods.purchase_number + shopping_goods.unit + '，单价：'
        + shopping_goods.price.toFixed(2) + '(元)，小计：' + shopping_goods.subtotal.toFixed(2) + '(元)\n';
    });
    return shopping_inventory;
}

function get_free_goods_inventory(shopping_list) {
    var free_goods_inventory = '';
    _.chain(shopping_list)
    .filter(function (shopping_goods) {
        return shopping_goods.free_number > 0;
    })
    .each(function (free_goods) {
        free_goods_inventory += '名称：' + free_goods.name + '，数量：' + free_goods.free_number + free_goods.unit + '\n';
    })
    return free_goods_inventory;
}

function get_summary_inventory(shopping_list) {
    var total_cost = get_total_cost(shopping_list);
    var total_free = get_total_free(shopping_list);
    var summary_inventory =
        '总计：' + total_cost.toFixed(2) + '(元)\n' +
        '节省：' + total_free.toFixed(2) + '(元)\n';
    return summary_inventory;
}

