/**
 *
 * Created by 風 on 2014/12/6.
 */
function get_total_cost(shopping_list) {
    var total_cost = 0;
    _.each(shopping_list, function (shopping_goods) {
        total_cost += shopping_goods.subtotal;
    })
    return total_cost;
}

function get_total_free(shopping_list) {
    var total_free = 0;
    _.chain(shopping_list)
    .filter(function (shopping_goods) {
        return shopping_goods.free_number > 0;
    })
    .each(function (shopping_goods) {
        total_free += shopping_goods.free_number * shopping_goods.price;
    })
    return total_free;
}

