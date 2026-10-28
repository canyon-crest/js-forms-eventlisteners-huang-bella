// ============================================
//  Unit 8.7 – Forms & Event Listeners
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() to wire your
//  buttons — do NOT add onclick in the HTML.
// ============================================


// ============================================
//  WARM-UP: Shout It!
// ============================================
// When the user types text and clicks "Shout",
// display the text in ALL CAPS with "!" at the end.

// STEP 1: Get the "Shout" button by its ID ("btnShout")
//         using document.getElementById()
btnShout.addEventListener('click', () => {
    outShout.innerHTML = shoutInput.value.toUpperCase() + "!"
})


// STEP 2: Add a click event listener to the button.
//         Inside the listener function:
//         a) Get the text from the input with ID "shoutInput"
//            using .value
//         b) Convert the text to uppercase using .toUpperCase()
//         c) Add "!" to the end
//         d) Display the result in the element with ID "outShout"
//            using .innerHTML
//
//         Example: "hello" → "HELLO!"


// ============================================
//  MAIN: Pizza Builder
// ============================================
// Calculate the total price of a pizza based on:
//   - Size (radio buttons): Small $7.50, Medium $10.00,
//     Large $12.50, XL $15.00
//   - Toppings (checkboxes): $0.50 each
//   - Service (dropdown): Dine In $0, Take Out $1.50,
//     Delivery $3.00

// STEP 3: Get the "Calculate Total" button by ID ("btnCalc")
//         Add a click event listener.
//         Inside the listener:
btnCalc.addEventListener('click', ()=>{
    let price = 0.00
    const prices = document.getElementsByName('rg');
    for(let i = 0; i < prices.length; i++) {
        if (prices[i].checked) {
            price = parseFloat(prices[i].value)
        }
    }
    let num = 0;
    const toppings = document.getElementsByName('cb');
    for(let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            num = num + 1
        }
    }
    let topPrice = num * 0.50
    let fee = 0.00
    const service = document.getElementById('serviceSelect')
    if (service.value === "dinein") {
        fee = 0.00
    } else if (service.value === "takeout"){
        fee = 1.50
    } else {
        fee = 3.00
    }
    let total = price + topPrice + fee
    if (myInput.value === "") {
        myPara.innerHTML = "Customer, your total is $" + total.toFixed(2)
    } else{
        myPara.innerHTML = myInput.value + ", your total is $" + total.toFixed(2)
    }
    

})
//   a) Get the selected size price:
//      Use document.getElementsByName("rg") to get all
//      size radio buttons. Loop through them to find the
//      one that is .checked, and read its .value.
//      Convert to a number with parseFloat().
// let num = 0
// btnCalc.addEventListener('click', ()=>{
//     const toppings = document.getElementsByName('cb');
//     for(let i = 0; i < toppings.length; i++) {
//         if (toppings[i].checked) {
//             num = num + 1
//         }
//     }

//     topPrice = num * 0.50
    
// })
//   b) Count checked toppings:
//      Use document.getElementsByName("cb") to get all
//      topping checkboxes. Loop through and count how
//      many are .checked. Multiply count by 0.50.
// btnCalc.addEventListener('click', ()=>{
//     let fee = 0.00
//     const service = document.getElementsById('serviceSelect');
//     for(let i = 0; i < service.length; i++) {
//         if (service.value === "dinein") {
//             fee = 0.00
//         } else if (service.value === "takeout"){
//             fee = 1.50
//         } else {
//             fee = 3.00
//         }
//     }
// })
//   c) Get the service fee:
//      Use document.getElementById("serviceSelect").value
//      to get the selected option value ("dinein", "takeout",
//      or "delivery").
//      Use if/else if/else to set the fee:
//        "dinein"   → 0
//        "takeout"  → 1.50
//        "delivery" → 3.00

//   d) Calculate total: size + toppings + service fee

//   e) Get the customer name from the input with ID "myInput"

//   f) Display the result in the element with ID "myPara":
//      "[name], your total is $[total]"
//      Use .toFixed(2) to format the total.
//      Example: "Alice, your total is $13.50"
//      If name is empty, use "Customer" as the default.


// STEP 4: Get the "Clear" button by ID ("clearBtn")
//         Add a click event listener.
//         Inside the listener:
//         a) Set the name input value to ""
//         b) Set the Large radio (id "r3") to checked = true
//         c) Uncheck ALL topping checkboxes (loop through them)
//         d) Set the service dropdown value to "dinein"
//         e) Set the output paragraph innerHTML to ""
const checkboxes = document.getElementsByName('cb');
clearBtn.addEventListener('click', ()=>{
    myInput.value = ""
    r3.checked = true
    for(let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    serviceSelect.value = 'dinein'
    myPara.innerHTML = ""
})