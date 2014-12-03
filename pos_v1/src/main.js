//TODO: Please write code in this file.

function get_barcode_from_barcode_information(input_barcode_information){
    var index_of_separator = input_barcode_information.indexOf('-');
    if(index_of_separator == -1)
        return input_barcode_information;
    return input_barcode_information.substring(0, index_of_separator);
}

function get_number_from_barcode_information(input_barcode_information){
    var index_of_separator = input_barcode_information.indexOf('-');
    if(index_of_separator == -1)
        return 1;
    return parseInt(input_barcode_information.substr(index_of_separator + 1));
}

function add_goods_information_to_shopping_list(shopping_list, barcode, number){
    if(shopping_list[barcode] == null){
        shopping_list[barcode] = number;
        return;
    }
    shopping_list[barcode] += number

}

function get_shopping_list(inputs){
    var shopping_list = [];
    var barcode;
    var number;
    for(var i = 0; i < inputs.length; i++){
        barcode = get_barcode_from_barcode_information(inputs[i]);
        number = get_number_from_barcode_information(inputs[i]);
        add_goods_information_to_shopping_list(shopping_list, barcode, number);
    }
    return shopping_list;
}

function print_shopping_list(){

}

function print_free_goods_list(){

}

function print_summary_information(){

}

function printInventory(inputs){
    var shopping_list;
    var all_items = loadAllItems();
    var promotions_informations = loadPromotions();
    shopping_list = get_shopping_list(inputs);
    print_shopping_list();
}

