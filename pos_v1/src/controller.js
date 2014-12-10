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
    return _.find(loadAllItems(), function (item) {
        return item.barcode == barcode;
    })

}

function count_goods_cost_in_shopping_list(shopping_list) {
    _.each(shopping_list, function(shopping_goods) {
        shopping_goods.subtotal = (shopping_goods.purchase_number - shopping_goods.free_number) * shopping_goods.price;
    })
}


function count_free_goods_with_promotions_information(shopping_goods) {
    promotions_information = loadPromotions();
    _.find(promotions_information, function(promotion_information) {
        if(promotion_information.barcodes.indexOf(shopping_goods.barcode) < 0) {
            return;
        }
        if(promotion_information.type == 'BUY_TWO_GET_ONE_FREE') {
            shopping_goods.free_number = 1;
        }
    })
}

function count_free_goods_number_in_shopping_list(shopping_list) {
    _.each(shopping_list, function (shopping_goods) {
        shopping_goods.free_number = 0;
        count_free_goods_with_promotions_information(shopping_goods)
    })
}

function get_barcode_from_input_barcode_information(input_barcode_information) {
    return input_barcode_information.split('-')[0];
}

function get_number_from_input_barcode_information(input_barcode_information) {
    var number = input_barcode_information.split('-')[1];
    if(number == null)
        return 1
    return number
}

function add_goods_information_to_shopping_list(shopping_list, barcode, number) {
    var goods_information = get_goods_information(barcode)
    var goods_index_in_shopping_list = -1;
    _.each(shopping_list, function(shopping_goods, index) {
        if(shopping_goods.barcode == barcode) {
            goods_index_in_shopping_list = index
        }
    })
    if(goods_index_in_shopping_list < 0) {
        goods_information.purchase_number = number
        shopping_list[shopping_list.length] = goods_information
        return
    }
    shopping_list[goods_index_in_shopping_list].purchase_number += number;
}

function get_shopping_list(inputs) {
    var shopping_list = []
    _.each(inputs, function(input) {
        var barcode = get_barcode_from_input_barcode_information(input)
        var number = get_number_from_input_barcode_information(input)
        add_goods_information_to_shopping_list(shopping_list, barcode, number)
    })
    return shopping_list
}

