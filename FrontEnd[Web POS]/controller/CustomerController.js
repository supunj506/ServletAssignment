/*
 * @author : @MJ
 * Date    : 6/25/2023
 * Time    : 5:08 PM
 * Project : Web POS
 * Created by IntelliJ IDEA.
 */

import {Customer} from "../model/Customer.js";

let array = [];
const customerData = "CUSTOMER";
/*

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
});*/


$("#inputCusId").focus();

let cusId;
let cusName;
let cusAddress;
let cusEmail;
let validatedCustomer;

/* ----------------validation start--------------------------*/
var cusIdRegex = /^(C)[0-9]{3}$/;
var cusNameRegex = /^[A-z ]{3,30}$/;
var cusEmailRegex = /^[a-z0-9]{4,40}@(gmail|yahoo|ymail|email).com$/;
var cuAddressRegex = /^[A-z0-9/]{4,40}$/;

function validate(inputId, text, regex) {
    if (regex.test(text)) {
        $(inputId).css('outline-color', 'greenyellow');
        return true;

    } else {
        $(inputId).css('outline-color', 'red');
        return false;
    }
}

$('#inputCusId').keyup(function (event) {
    cusId = $(this).val();
    validatedCustomer = validate('#inputCusId', cusId, cusIdRegex);
    if (event.key === "Enter" && cusId !== "C000" && cusId !== "C0000" && cusId !== "C0000") {
        if (validate('#inputCusId', cusId, cusIdRegex)) {
            $('#inputCusName').focus();

        }
    }
});

$('#inputCusName').keyup(function (event) {
    cusName = $(this).val();
    validatedCustomer = validate('#inputCusName', cusName, cusNameRegex);
    if (event.key === "Enter") {
        if (validate('#inputCusName', cusName, cusNameRegex)) {
            $('#inputCusAddress').focus();
        }
    }
});

$('#inputCusAddress').keyup(function (event) {
    cusAddress = $(this).val();
    validatedCustomer = validate('#inputCusAddress', cusAddress, cuAddressRegex);
    if (event.key === "Enter") {
        if (validate('#inputCusAddress', cusAddress, cuAddressRegex)) {
            $('#inputCusEmail').focus();
        }
    }
});

$('#inputCusEmail').keyup(function (event) {
    cusEmail = $(this).val();
    validatedCustomer = validate('#inputCusEmail', cusEmail, cusEmailRegex);
    if (event.key === "Enter") {
        alert("Do you want to add this customer ???");
        addCustomer();
    }
});

function emptyInput() {

    let cusId = $("#inputCusId").val();
    let cusName = $("#inputCusName").val();
    let cusAddress = $("#inputCusAddress").val();
    let cusEmail = $("#inputCusEmail").val();

    if (cusId === "" || cusName === "" || cusAddress === "" || cusEmail === "") {
        return true;
    } else {
        return false
    }

}

let customerIdArray = [];

function existId(currentId) {
    let tdCount = $("#cusTBody>tr").children().length;
    let index = 0;

    for (let i = 0; i < tdCount; i++) {
        let id = $("#cusTBody>tr").children().eq(i).text();
        customerIdArray[index] = id;
        i += 3;
        index++;
    }
    let inTheArray = false;

    for (let z = 0; z < customerIdArray.length; z++) {
        if (currentId === customerIdArray[z]) {
            inTheArray = true;
        }
    }
    return inTheArray;


}

function refreshValue() {
    cusId = $("#inputCusId").val();
    cusName = $("#inputCusName").val();
    cusAddress = $("#inputCusAddress").val();
    cusEmail = $("#inputCusEmail").val();
}

function getCustomer() {
    return new customer(cusId, cusName, cusAddress, cusEmail);
}

/* ----------------validation end-----------------------------*/


/* ----------------ADD Customer start-----------------------------*/

$('#addCus').click(function addCustomer() {

    if (validatedCustomer && !emptyInput() && !existId($("#inputCusId").val())) {
        refreshValue();
        let customer = getCustomer();
        let jCustomer = JSON.stringify(customer);
        createAjaxRequest('customer', 'POST', jCustomer)
        let customerRow = `<tr><td>${cusId}</td><td>${cusName}</td><td>${cusAddress}</td><td>${cusEmail}</td></tr>`;
        $("#customer_table").append(customerRow);

        $('#customer_table>tbody>tr').off();

        $("#customer_table>tbody>tr").click(function () {

            let id = $(this).children().eq("0").text();
            let name = $(this).children().eq("1").text();
            let address = $(this).children().eq("2").text();
            let email = $(this).children().eq("3").text();

            $("#inputCusId").val(id);
            $("#inputCusName").val(name);
            $("#inputCusAddress").val(address);
            $("#inputCusEmail").val(email);

        });

        $("#customer_table>tbody>tr").dblclick(function () {
            let b = confirm("Do You Want to remove this record ?");
            if (b) {
                $(this).remove();
            }
        });
    } else {
        alert("Check your input again !!!");
    }

});

/* ----------------ADD Customer end-------------------------------*/


/* ----------------UPDATE Customer Start-------------------------------*/

$('#updateCus').click(function () {
    let id = $("#inputCusId").val();
    if (!emptyInput() && existId(id)) {
        let customer = `<tr><td>${cusId}</td><td>${cusName}</td><td>${cusAddress}</td><td>${cusEmail}</td></tr>`;
        $("#customer_table").append(customer);

    } else {
        alert("Check your input again !!!");
    }


})

/* ----------------UPDATE Customer End---------------------------------*/







