//TODO: Please write code in this file.

function get_barcode_from_barcode_information(input_barcode_information) {
    var index_of_separator = input_barcode_information.indexOf('-');
    if(index_of_separator == -1)
        return input_barcode_information;
    return input_barcode_information.substring(0, index_of_separator);
}

function get_number_from_barcode_information(input_barcode_information) {
    var index_of_separator = input_barcode_information.indexOf('-');
    if(index_of_separator == -1)
        return 1;
    return parseInt(input_barcode_information.substr(index_of_separator + 1));
}

function add_goods_information_to_shopping_list(shopping_list, barcode, number) {
    for(var i = 0; i < shopping_list.length; i++) {
        if(shopping_list[i].barcode == barcode) {
            break;
        }
    }

    if(i == shopping_list.length) {
        shopping_list[i] = {"barcode": barcode, "purchase_number" : number, "free_number": 0, "cost" : 0};
        return;
    }

    shopping_list[i].purchase_number += number;
}

function get_shopping_list(inputs){
    var shopping_list = [];
    var barcode;
    var number;
    for(var i = 0; i < inputs.length; i++) {
        barcode = get_barcode_from_barcode_information(inputs[i]);
        number = get_number_from_barcode_information(inputs[i]);
        add_goods_information_to_shopping_list(shopping_list, barcode, number);
    }
    return shopping_list;
}

function get_good_information_by_barcode(all_items, barcode) {
    for(var i = 0; i < all_items.length; i++) {
        if(all_items[i].barcode == barcode){
            return all_items[i];
        }
    }
    return null;
}

function get_goods_promotion_information(purchase_goods_information, promotion_information) {
    for(var i = 0; i < promotion_information.barcodes.length; i++) {
        if(purchase_goods_information.barcode == promotion_information.barcodes[i] && promotion_information.type == "BUY_TWO_GET_ONE_FREE" && purchase_goods_information.purchase_number > 2) {
            purchase_goods_information.free_number = 1;
            return true;
        }
    }
    return false;
}

function get_cost_from_purchase_goods_information(purchase_goods_information, good_information,  promotions_informations) {
    for(var i = 0; i < promotions_informations.length; i++) {
        if(get_goods_promotion_information(purchase_goods_information, promotions_informations[i]) == true)
            break;
    }
    return (purchase_goods_information.purchase_number - purchase_goods_information.free_number) * good_information.price;
}

function get_goods_cost_in_shopping_list(shopping_list, all_items, promotions_informations) {
    var good_information;
    for(var i = 0; i < shopping_list.length; i++) {
        good_information = get_good_information_by_barcode(all_items, shopping_list[i].barcode);
        if(good_information != null) {
            shopping_list[i].cost = get_cost_from_purchase_goods_information(shopping_list[i], good_information, promotions_informations);

        }

    }
}

function print_shopping_list(shopping_list) {
    for(var i = 0; i < shopping_list.length; i++) {

    }
}

function print_free_goods_list(shopping_list) {

}

function print_summary_information(shopping_list) {

}

function printInventory(inputs) {
    var shopping_list;
    var all_items = loadAllItems();
    var promotions_informations = loadPromotions();
    shopping_list = get_shopping_list(inputs);
    get_goods_cost_in_shopping_list(shopping_list, all_items, promotions_informations);
    console.log( '***<没钱赚商店>购物清单***\n');
    print_shopping_list(shopping_list);
    print_free_goods_list();
    print_summary_information();
    console.log( '**********************');
}

