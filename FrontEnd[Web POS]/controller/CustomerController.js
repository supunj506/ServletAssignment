/*
 * @author : @MJ
 * Date    : 6/25/2023
 * Time    : 5:08 PM
 * Project : Web POS
 * Created by IntelliJ IDEA.
 */

import {Customer} from "../model/Customer.js";

let  array=[];
const customerData = "CUSTOMER";


loadTable();
document.getElementById("addCus").addEventListener("click", function () {
    // let oldData = localStorage.getItem(customerData);
    //
    // if (oldData) {
    //     array = JSON.parse(oldData);
    // }
    // array.push(new Customer(
    //     $("#inputCusId").val(),
    //     $("#inputCusName").val(),
    //     $("#inputCusAddress").val(),
    //     $("#inputCusEmail").val(),
    // ));
    //
    // localStorage.setItem(customerData, JSON.stringify(array));
    // loadTable();
    let cus_id = $("#inputCusId").val();
    let cus_name = $("#inputCusName").val();
    let cus_address = $("#inputCusAddress").val();
    let cus_email = $("#inputCusEmail").val();

    let pre_data = localStorage.getItem(customerData);
    let data_arr=[];
    if(pre_data){
        data_arr=JSON.parse(pre_data);
    }

    var cus_obj ={
        _cus_id: cus_id,
        _cus_name: cus_name,
        _cus_address: cus_address,
        _cus_email: cus_email
    }



    data_arr.push(cus_obj);
    console.log(JSON.stringify(cus_obj));
    localStorage.setItem(customerData,JSON.stringify(data_arr));

    loadTable();

});

function loadTable() {
    // var customerArray = JSON.parse(localStorage.getItem(customerData));
    // $('#customer_table').empty();
    //
    // customerArray.map((result,index) => {
    //     $('#customer_table').append(
    //         "<tr>" +
    //         "<td scope='row'>" + result._cus_id + "</td>" +
    //         "<td>" + result._cus_name + "</td>" +
    //         "<td>" + result._cus_address + "</td>" +
    //         "<td>" + result._cus_email + "</td>" +
    //         "</tr>")});

    let pre_data = localStorage.getItem(customerData);
    var customer_data_arr = JSON.parse(pre_data);

    customer_data_arr.map((result,index)=>{
        $('#customer_table').append("<tr>" +
            "<td scope='row'>" + result._cus_id + "</td>" +
            "<td>" + result._cus_name + "</td>" +
            "<td>" + result._cus_address + "</td>" +
            "<td>" + result._cus_email + "</td>" +
            "</tr>")
    })
}
loadTable();

document.getElementById("updateCus").addEventListener("click",function () {
    array = JSON.parse(localStorage.getItem(customerData));
    let customer={
        _cus_id:$('#inputCusId').val(),
        _cus_name:$('#inputCusName').val(),
        _cus_address:$('#inputCusAddress').val(),
        _cus_email:$('#inputCusEmail').val()
    }
    console.log(customer._cus_id);
    let index=CReId(array,customer._cus_id);
    console.log(index);
    if (index!==-1){
        array[index]._cus_name=$('#inputCusName').val(),
            array[index]._cus_address=$('#inputCusAddress').val(),
            array[index]._cus_email=$('#inputCusEmail').val()
        array.splice(index,1,customer)
    }
    localStorage.setItem(customerData,JSON.stringify(array));
    loadTable();

});

function CReId(arr,id){
    console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]._cus_id);
        if (arr[i]._cus_id===id) {
            return i;
        }
    }
    return -1;

}

document.getElementById("deleteCus").addEventListener("click",function () {});

document.getElementById("clearCus").addEventListener("click",function (){
    $("#inputCusId").val("")
        $("#inputCusName").val("")
        $("#inputCusAddress").val("")
        $("#inputCusEmail").val("")
});

$('#customer_table ').on('click','tr',(event)=>{
    let cusId=$(event.target).closest('tr').find('td').eq(0).text();
    let cusName=$(event.target).closest('tr').find('td').eq(1).text();
    let cusAddress=$(event.target).closest('tr').find('td').eq(2).text();
    let cusEmail=$(event.target).closest('tr').find('td').eq(3).text();

    console.log(cusId,cusName,cusAddress,cusEmail);
    console.log("dsnds");

    $('#inputCusId').val(cusId);
    $('#inputCusName').val(cusName);
    $('#inputCusAddress').val(cusAddress);
    $('#inputCusEmail').val(cusEmail);
});






