//TODO: Please write code in this file.

function get_barcode_from_barcode_information(input_barcode_information){
    var index_of_separator = input_barcode_information.indexOf('-');
    if(index_of_separator == -1)
        return input_barcode_information;
    return input_barcode_information.substring(0, index_of_separator);
}

function get_number_from_barcode_information(input_barcode_information){

}

function compute_shopping_list(inputs){
    var shopping_list = [];
    var barcode;
    for(var i = 0; i < inputs.length; i++){
        barcode = get_barcode(inputs[i]);
    }
}

function print_shopping_list(){

}

function print_free_goods_list(){

}

function print_summary_information(){

}

function printInventory(inputs){
    var all_items = loadAllItems();
    var promotions_informations = loadPromotions();
    compute_shopping_list(inputs);
}

