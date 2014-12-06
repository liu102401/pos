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

function get_goods_information(barcode) {
    var goods_information;
    _.find(loadAllItems(), function (item) {
        if (item.barcode == barcode) {
            goods_information = item;
            return true;
        }
        return false;
    })
    return goods_information;
}

function count_goods_cost_in_shopping_list(shopping_list) {
    _.each(shopping_list, function(shopping_goods) {
        shopping_goods.subtotal = (shopping_goods.purchase_number - shopping_goods.free_number) * shopping_goods.price;
    })
}

function count_free_goods_with_promotion(shopping_goods, promotion_information) {
    _.find(promotion_information.barcodes, function(barcode) {
        if(shopping_goods.barcode == barcode && promotion_information.type == 'BUY_TWO_GET_ONE_FREE') {
            shopping_goods.free_number = 1;
            return true;
        }
        return false;
    })
}

function count_free_goods_with_promotions_information(shopping_goods) {
    promotions_information = loadPromotions();
    _.each(promotions_information, function(promotion_information) {
        count_free_goods_with_promotion(shopping_goods, promotion_information)
    })
}

function count_free_goods_number_in_shopping_list(shopping_list) {
    _.each(shopping_list, function (shopping_goods) {
        shopping_goods.free_number = 0;
        count_free_goods_with_promotions_information(shopping_goods)
    })
}
