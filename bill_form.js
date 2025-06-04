
let productarr = []
let a = 0;
let prolength = document.getElementById('prolength');
function add() {
     let product = document.getElementById('product')
     let pcs = document.getElementById("pcs")
     let mtrs = document.getElementById("mtrs")
     let rate = document.getElementById("rate")

     //   product verification 
     if (pcs.value !== "" && mtrs.value !== "" && rate.value !== "") {
          let pcsnum = Number.parseInt(pcs.value);
          let mtrsnum = Number.parseInt(mtrs.value);
          let ratenum = Number.parseInt(rate.value);
          let prodnewarr = {
               id: a,
               product: product.value,
               pcsnum: pcsnum,
               mtrsnum: mtrsnum,
               ratenum: ratenum,
          }
          productarr.push(prodnewarr)

          //adding product to the table
          let producttable = document.getElementById('producttable')
          let newproductlistel = document.createElement("tr");
          newproductlistel.id = `${productarr[a].id}`;
          let newproductlist = `
                        <td>${productarr[a].product}</td>
                        <td>${productarr[a].pcsnum}</td>
                        <td>${productarr[a].mtrsnum}</td>
                        <td>${productarr[a].ratenum}</td>
                        <td><button type="button" onclick="remove(event)">Remove</button></td>
                    `;
          newproductlistel.innerHTML = newproductlist
          producttable.children[1].append(newproductlistel);
          a++;
          prolength.innerHTML = ` <h3 id="prolength">Total Products : ${productarr.length}</h3>`;
     } else {
          alert("Please Enter Valid Details");
     }
}

//remove added product
function remove(event) {
     let findproduct = Number(event.target.parentNode.parentNode.id)
     let findproductindex = productarr.findIndex((value) => {
          return value.id == findproduct
     })
     productarr.splice(findproductindex, 1)
     event.target.parentNode.parentNode.remove()
     prolength.innerHTML = ` <h3 id="prolength">Total Products : ${productarr.length}</h3>`;
}

//start verification 
function namevalidation() {
     let namevalidation = document.forms['form1']['name'].value
     if (namevalidation.trim() === "") {
          document.getElementById('name').style.borderColor = "red";
          document.getElementById('nameerr').innerText = "Enter Name Please"
     } else {
          document.getElementById('name').style.borderColor = "green";
          document.getElementById('nameerr').innerText = ""
     }
}
function addressvalidation() {
     let addressvalidation = document.forms['form1']['address'].value
     if (addressvalidation.trim() === "") {
          document.getElementById('address').style.borderColor = "red";
          document.getElementById('addresserr').innerText = "Enter Valid Address"
     } else {
          document.getElementById('address').style.borderColor = "green";
          document.getElementById('addresserr').innerText = ""
     }
}
function pinvalidation() {
     let pinvalidation = document.forms['form1']['pin'].value
     if (pinvalidation.trim() === "") {
          document.getElementById('pin').style.borderColor = "red";
          document.getElementById('pinerr').innerText = "Enter 6 Digit Pin"
     } else if (pinvalidation.length == 6) {
          document.getElementById('pin').style.borderColor = "green"
          document.getElementById('pinerr').innerText = ""
     }
     else if (pinvalidation.length > 6 || pinvalidation.length < 6) {
          document.getElementById('pin').style.borderColor = "red";
          document.getElementById('pinerr').innerText = "Enter 6 Digit Pin"
     }
     else {
          document.getElementById('pin').style.borderColor = "green"
          document.getElementById('pinerr').innerText = ""
     }
}
function districtvalidation() {
     let districtvalidation = document.forms['form1']['district'].value;
     if (districtvalidation.trim() === "") {
          document.getElementById('district').style.borderColor = "red"
          document.getElementById('districterr').innerText = "Enter District Please"
     } else if(/\d/.test(districtvalidation)){ 
          document.getElementById('district').style.borderColor = "red"
          document.getElementById('districterr').innerText = "Enter District Please"
     }
     else {
          document.getElementById('district').style.borderColor = "green"
          document.getElementById('districterr').innerText = ""
     }
}
function gstinvalidation() {
     let gstinvalidation = document.forms['form1']['gstin'].value.trim()
     if (gstinvalidation.trim() === "") {
          document.getElementById('gstin').style.borderColor = "red"
          document.getElementById('gstinerr').innerText = "Enter Correct GSTIN No"
     } else if (gstinvalidation.length == 15) {
          document.getElementById('gstin').style.borderColor = "green"
          document.getElementById('gstinerr').innerText = ""
     }
     else if (gstinvalidation.length > 15 || gstinvalidation.length < 15) {
          document.getElementById('gstin').style.borderColor = "red"
          document.getElementById('gstinerr').innerText = "Enter Correct GSTIN No"
     }
     else {
          document.getElementById('gstin').style.borderColor = "green"
          document.getElementById('gstinerr').innerText = ""
     }
}
function contact1validation() {
     let contact1validation = document.forms['form1']['contact1'].value
     if (contact1validation.trim() === "") {
          document.getElementById('contact1').style.borderColor = "red"
          document.getElementById('contact1err').innerText = "Enter 10 Digit Phone Number"
     } else if (contact1validation.length == 10) {
          document.getElementById('contact1').style.borderColor = "green"
          document.getElementById('contact1err').innerText = ""
     }
     else if (contact1validation.length > 10 || contact1validation.length < 10) {
          document.getElementById('contact1').style.borderColor = "red"
          document.getElementById('contact1err').innerText = "Enter 10 Digit Phone Number"
     }
     else {
          document.getElementById('contact1').style.borderColor = "green"
          document.getElementById('contact1err').innerText = ""
     }
}
function contact2validation() {
     let contact2validation = document.forms['form1']['contact2'].value
     if (contact2validation.trim() === "") {
          document.getElementById('contact2').style.borderColor = "green"
          document.getElementById('contact2err').innerText = ""
     } else if (contact2validation.length == 10) {
          document.getElementById('contact2').style.borderColor = "green"
          document.getElementById('contact2err').innerText = ""
     }
     else if (contact2validation.length > 10 || contact2validation.length < 10) {
          document.getElementById('contact2').style.borderColor = "red"
          document.getElementById('contact2err').innerText = "Enter 10 Digit Phone Number"
     }
     else {
          document.getElementById('contact2').style.borderColor = "green"
          document.getElementById('contact2err').innerText = ""
     }
}
function discountvalidation() {
     let discountvalidation = document.forms['form1']['discount'].value
     let f2 = Number(discountvalidation)
     if (discountvalidation.trim() === "") {
          document.getElementById('discount').style.borderColor = "red";
          document.getElementById('discounterr').innerText = "Enter Discount (0 or any)"
     }
     else if (isNaN(f2)) {
          document.getElementById('discount').style.borderColor = "red";
          document.getElementById('discounterr').innerText = "Discount must be a Number"
     }
     else {
          document.getElementById('discount').style.borderColor = "green";
          document.getElementById('discounterr').innerText = ""
     }
}
function validation() {
     namevalidation();
     addressvalidation();
     pinvalidation();
     districtvalidation();
     gstinvalidation();
     contact1validation();
     contact2validation();
     discountvalidation();
     let nameerr = document.getElementById('nameerr').innerText;
     let addresserr = document.getElementById('addresserr').innerText;
     let pinerr = document.getElementById('pinerr').innerText;
     let districterr = document.getElementById('districterr').innerText;
     let gstinerr = document.getElementById('gstinerr').innerText;
     let contact1err = document.getElementById('contact1err').innerText;
     let contact2err = document.getElementById('contact2err').innerText;
     let discounterr = document.getElementById('discounterr').innerText;
     if (nameerr == "" && addresserr == "" && pinerr == "" && districterr == "" && gstinerr == "" && contact1err == "" && contact2err == "" && discounterr == "") {
          alert("Information Submited Successfully!")
          let namevalidation = document.forms['form1']['name'].value.trim();
          let addressvalidation = document.forms['form1']['address'].value.trim();
          let pinvalidation = document.forms['form1']['pin'].value;
          let districtvalidation = document.forms['form1']['district'].value.trim();
          let statevalidation = document.forms['form1']['state'].value;
          let gstinvalidation = document.forms['form1']['gstin'].value.trim();
          let contact1validation = document.forms['form1']['contact1'].value;
          let contact2validation = document.forms['form1']['contact2'].value;
          let transportvalidation = document.forms['form1']['transport'].value.trim();
          let ewayvalidation = document.forms['form1']['eway'].value.trim();
          let shipvalidation = document.forms['form1']['ship'].value.trim();
          let freightvalidation = document.forms['form1']['freight'].value.trim();
          let nopvalidation = document.forms['form1']['nop'].value;
          let agentvalidation = document.forms['form1']['agent'].value.trim();
          let discountvalidation = document.forms['form1']['discount'].value
          localStorage.setItem("name", namevalidation)
          localStorage.setItem("address", addressvalidation)
          localStorage.setItem("pin", pinvalidation)
          localStorage.setItem("district", districtvalidation)
          localStorage.setItem("state", statevalidation)
          localStorage.setItem("gstin", gstinvalidation)
          localStorage.setItem("contact1", contact1validation)
          localStorage.setItem("contact2", contact2validation)
          localStorage.setItem("transport", transportvalidation)
          localStorage.setItem("eway", ewayvalidation)
          localStorage.setItem("ship", shipvalidation)
          localStorage.setItem("freight", freightvalidation)
          localStorage.setItem("nop", nopvalidation)
          localStorage.setItem("agent", agentvalidation)
          localStorage.setItem("discount", discountvalidation)
          let productarrtojsonstr = JSON.stringify(productarr)
          localStorage.setItem("productdetails", productarrtojsonstr)
          window.location.href='bill.html'
     } else {
          alert("Please Enter Valid Details!")
     }
}
document.getElementById('form1').addEventListener("submit", (event) => {
     event.preventDefault();
     validation();
})




