$(document).ready(function() {
    // create jqxTree
    $('#jqxTree').jqxTree({ height: '500px', hasThreeStates: true, checkboxes: true, width: '300px' });
    $('#jqxTree').css('visibility', 'visible');

    $('#jqxCheckBox').jqxCheckBox({ width: '500px', height: '25px', checked: true });
    $('#jqxCheckBox').on('change', function(event) {
        var checked = event.args.checked;
        $('#jqxTree').jqxTree({ hasThreeStates: checked });
    });

    $("#jqxTree").jqxTree('selectItem', $("#home")[0]);
    //$("#jqxWidget").jqxTree({ theme: "arctic", width: 300, height: 300});

    // create data adapter.
    var dataAdapter = new $.jqx.dataAdapter(rs);
    // perform Data Binding.
    dataAdapter.dataBind();
    // get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents 
    // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter 
    // specifies the mapping between the 'text' and 'label' fields.  
    var records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }], "IsAuth");
    $('#jqxWidget').jqxTree({ source: records, width: '300px' });
});
