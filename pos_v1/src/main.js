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
        shopping_list[i] = {"barcode": barcode, "purchase_number" : number, "free_number": 0, "cost" : 0.00};
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

function get_goods_information_by_barcode(all_items, barcode) {
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

function get_cost_from_purchase_goods_information(purchase_goods_information, goods_information,  promotions_informations) {
    for(var i = 0; i < promotions_informations.length; i++) {
        if(get_goods_promotion_information(purchase_goods_information, promotions_informations[i]) == true)
            break;
    }
    return (purchase_goods_information.purchase_number - purchase_goods_information.free_number) * goods_information.price;
}

function get_goods_cost_in_shopping_list(shopping_list, all_items, promotions_informations) {
    var goods_information;
    for(var i = 0; i < shopping_list.length; i++) {
        goods_information = get_goods_information_by_barcode(all_items, shopping_list[i].barcode);
        if(goods_information != null) {
            shopping_list[i].cost = get_cost_from_purchase_goods_information(shopping_list[i], goods_information, promotions_informations);
        }

    }
}

function get_shopping_list_inventory(shopping_list, all_items) {
    var shopping_list_information;
    var goods_information;
    shopping_list_information = "***<没钱赚商店>购物清单***\n";
    for(var i = 0; i < shopping_list.length; i++) {
        goods_information = get_goods_information_by_barcode(all_items, shopping_list[i].barcode);
        if(goods_information == null)
            continue;
        shopping_list_information += "名称：" + goods_information.name + "，数量：" + shopping_list[i].purchase_number + goods_information.unit + "，单价：" + goods_information.price.toFixed(2)
                                    + "(元)，小计：" + shopping_list[i].cost.toFixed(2) + "(元)\n";
    }
    return shopping_list_information += "----------------------\n";
}

function get_free_goods_inventory(shopping_list, all_item) {
    var goods_information;
    var promotion_goods_information;
    promotion_goods_information = "挥泪赠送商品：\n";
    for(var i = 0; i < shopping_list.length; i++) {
        goods_information = get_goods_information_by_barcode(all_item, shopping_list[i].barcode);
        if(goods_information == null || shopping_list[i].free_number == 0)
            continue;
        promotion_goods_information += "名称：" + goods_information.name + "，数量：" + shopping_list[i].free_number + goods_information.unit + "\n";
    }
    promotion_goods_information +=   "----------------------\n";
    return promotion_goods_information;
}

function get_total_cost(shopping_list) {
    var total_cost = 0;
    for(var i = 0; i < shopping_list.length; i++) {
        total_cost += shopping_list[i].cost;
    }
    return total_cost;
}

function get_total_save(shopping_list, all_items) {
    var total_save = 0;
    var goods_information;
    for(var i = 0; i < shopping_list.length; i++) {
        goods_information = get_goods_information_by_barcode(all_items, shopping_list[i].barcode);
        if(goods_information == null)
            continue;
        total_save += shopping_list[i].free_number * goods_information.price;
    }
    return total_save;
}

function get_summary_information(shopping_list, all_items) {
    var total_cost = get_total_cost(shopping_list);
    var total_save = get_total_save(shopping_list, all_items);
    return "总计：" + total_cost.toFixed(2) + "(元)\n" + "节省：" + total_save.toFixed(2) + "(元)\n" + "**********************";
}

function printInventory(inputs) {
    var shopping_list;
    var all_items = loadAllItems();
    var promotions_informations = loadPromotions();
    var inventory;
    shopping_list = get_shopping_list(inputs);
    get_goods_cost_in_shopping_list(shopping_list, all_items, promotions_informations);
    inventory = get_shopping_list_inventory(shopping_list, all_items);
    inventory += get_free_goods_inventory(shopping_list, all_items);
    inventory += get_summary_information(shopping_list, all_items);
    console.log(inventory);
}

