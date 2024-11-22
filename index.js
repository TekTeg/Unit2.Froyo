// Ask the customer to choose ice creame flavors. Include default choices too.
const customerOrder = prompt(`Hi! Which flavor of Icecream do you want to order today? Please enter your selections separated by comma`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`)
//Create a list from the customer order
const orderedList = customerOrder.split(",")
//Create an empty object to populate with the flavors and qty ordered
const order = {}
//Iterate through the list and identify peculiar order and if repeated increase the qty.
for (i = 0; i < orderedList.length; i++) { 
  if (order.hasOwnProperty(orderedList[i]) == false) {
    order[orderedList[i]] = 1 
  } 
  else {
    order[orderedList[i]] += 1 
  } 
} console.log(order)