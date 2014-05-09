module.exports = {
    main:{
        'bson_id'                   : 'bson_id',
        'search_type_field'         : 'search_type',
        'start_with_search_type'    : 'start_with_search',
        'starts_with_field'         : 'starts_with_field',
        'starts_with'               : 'starts_with',
        'max_expansions'            : 'max_expansions',

        'regex_search_type'         : 'regex_search',
        'regex_field'               : 'regex_field',
        'regex_term'                : 'regex_term'
    },
    sanger: {
        sanger_constants: {
            'product_data'  : 'product_data',
            'bson_id'       : 'bson_id',
            'product_fields': {
                'id'    : 'id',
                'name'  : 'name',
                'stores_available_in' : 'stores_available_in',
                'tags'  : 'tags',
                'locale': 'locale'
            }
        }
    }
};