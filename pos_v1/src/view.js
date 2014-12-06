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

