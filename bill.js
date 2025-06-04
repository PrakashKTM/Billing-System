// get data from local storage
let namedata = localStorage.getItem("name")
let addressdata = localStorage.getItem("address")
let pindata = localStorage.getItem("pin")
let districtdata = localStorage.getItem("district")
let statedata = localStorage.getItem("state")
let gstindata = localStorage.getItem("gstin")
let contact1data = localStorage.getItem("contact1")
let contact2data = localStorage.getItem("contact2")
let transportdata = localStorage.getItem("transport")
let ewaydata = localStorage.getItem("eway")
let shipdata = localStorage.getItem("ship")
let freightdata = localStorage.getItem("freight")
let nopdata = localStorage.getItem("nop")
let agentdata = localStorage.getItem("agent")
let discountdata = localStorage.getItem("discount")
let productdetailsdata = localStorage.getItem("productdetails")
let productarrtojsonarr = JSON.parse(productdetailsdata)
// set data to details of receiver
let recname = document.getElementById('name');
recname.innerHTML = namedata
let address = document.getElementById('address');
//to capitalizing address
let addressdataarr = addressdata.split(",")
let capitalize1 = addressdataarr.map((data) => {
    return data[0].toUpperCase() + data.slice(1).toLowerCase()
})
let addresscapital = capitalize1;
let districtdataarr = districtdata.split(",")
let capitalize2 = districtdataarr.map((data) => {
    return data[0].toUpperCase() + data.slice(1).toLowerCase()
})
let districtcapital = capitalize2.join(" ");
//to split state value
let statedataarr = statedata.split(" ")
let stateno = statedataarr[0];
let statetext = statedataarr.slice(1)
let capitalize3 = statetext.map((data) => {
    return data[0].toUpperCase() + data.slice(1).toLowerCase()
})
let statecapital = capitalize3.join(" ");
address.innerHTML = ` <p id="address">${addresscapital}<br>
                   ${districtcapital} - ${pindata}, ${statecapital}</p>`;
let contact1 = document.getElementById('contact1no');
contact1.innerHTML = contact1data;
if (contact2data == "") {
    document.getElementById('c1c2').innerHTML = "";
    document.getElementById('contact2p').innerHTML = "";
} else {
    let contact2 = document.getElementById('contact2no');
    contact2.innerHTML = contact2data;
}
let gstin = document.getElementById('gstin');
gstin.innerHTML = `<h5 id="gstin">GSTIN NO : ${gstindata.toUpperCase()}</h5>`;
let state = document.getElementById('state');
state.innerHTML = `<h5 id="state">STATE CODE : ${stateno}</h5>`;
// set data to details of invoice
//set invoice no
function invoiceno() {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min
}
let ino = invoiceno()
document.getElementById('ino').innerText = `${ino}`
//set invoice date
let date = new Date();
let gdate = date.getDate();
let gmonth = date.getMonth() + 1;
let gyear = date.getFullYear()
if (gdate.toString().length == 1) {
    document.getElementById('gdate').innerText = "0" + gdate
} else {
    document.getElementById('gdate').innerText = gdate
}
if (gmonth.toString().length == 1) {
    document.getElementById('gmonth').innerText = "0" + gmonth
} else {
    document.getElementById('gmonth').innerText = gmonth
}
document.getElementById('gyear').innerText = gyear;
// set data to details of transport
let transport = document.getElementById('transport');
if (transportdata == "") {
    transport.innerText = "";
} else {
    transport.innerText = transportdata;
}
let eway = document.getElementById('eway');
if (ewaydata == "") {
    eway.innerText = "";
} else {
    eway.innerText = ewaydata
}
let ship = document.getElementById('ship');
if (shipdata == "") {
    ship.innerText = "";
} else {
    ship.innerText = shipdata
}
let freight = document.getElementById('freight');
if (freightdata == "") {
    freight.innerText = "";
} else {
    freight.innerText = freightdata
}
let nop = document.getElementById('nop');
if (nopdata == "") {
    nop.innerText = "";
} else {
    nop.innerText = nopdata
}
let agent = document.getElementById('agent');
if (agentdata == "") {
    agent.innerText = "";
} else {
    agent.innerText = agentdata
}
//set product details & calculate amount
let no = 1;
for (const element of productarrtojsonarr) {
    let tablebody = document.getElementById('tablebody');
    let tablebodyrow = document.createElement("tr");
    let newproductlist = `
                        <td>${no}</td>
                        <td style="text-align: left;">${element.product}</td>
                        <td>5407</td>
                        <td>${element.pcsnum}</td>
                        <td>${element.mtrsnum}</td>
                        <td style="text-align: right;">${element.ratenum.toLocaleString('locale')}</td>
                        <td style="text-align: right;">${(element.pcsnum * element.ratenum).toLocaleString('locale')}</td>
                    `;
    tablebodyrow.innerHTML = newproductlist
    tablebody.append(tablebodyrow);
    no++;
}
// discount percentage 
let discountper = document.getElementById('discountper')
if (discountdata.length == 1) {
    discountper.innerText = `Discount ${discountdata}.00 %`
} else if (discountdata.length == 2) {
    discountper.innerText = `Discount ${discountdata}.00 %`
}
else {
    discountper.innerText = `Discount ${discountdata} %`;
}
//discount calculation
let pcstorate = productarrtojsonarr.map((a) => {
    return a.pcsnum * a.ratenum
})
let totalingamount = pcstorate.reduce((total, value) => {
    return total + value
})
let discoundvaldata = (discountdata * totalingamount) / 100
let discoundval = document.getElementById('discoundval')
discoundval.innerText = `${discoundvaldata.toLocaleString('locale')}`
let subtoalvalue = document.getElementById('subtoalvalue')
let subtotal = totalingamount - discoundvaldata
subtoalvalue.innerText = `${subtotal.toLocaleString()}`
//adding cgst 
let cgstid = document.getElementById('cgstval')
let cgstamount = (subtotal * 2.5) / 100
cgstid.innerText = `${cgstamount.toLocaleString()}`
//adding sgst
let sgstid = document.getElementById('sgstval')
let sgstamount = (subtotal * 2.5) / 100
sgstid.innerText = `${sgstamount.toLocaleString()}`
//adding total tax amount 
let totaltax = document.getElementById('totaltax')
let totaltaxamount = cgstamount + sgstamount
totaltax.innerText = `${totaltaxamount.toLocaleString()}`
//adding net total
let nettotal = document.getElementById('nettotal')
let nettotalamount = Math.round(subtotal + totaltaxamount)
nettotal.innerText = `${nettotalamount.toLocaleString()}`
//number to words
var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}
let numtowords = inWords(nettotalamount)
let splitwords = numtowords.split(" ")
let captalizeword = splitwords.slice(0, splitwords.length - 1).map((data) => {
    return data[0].toUpperCase() + data.slice(1).toLowerCase()
})
let joinwords = captalizeword.join(" ")
let rupees = document.getElementById('rupees')
rupees.innerText = `${joinwords}`
//redirecttoform
function redirecttoform(){
    // window.location.replace('bill_form.html')
}










