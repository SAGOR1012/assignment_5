
function setPlayerName(previousLocationId, setLocationId) {
    const playerLocation = document.getElementById(previousLocationId); //get player location
    const playerName = playerLocation.innerText;

    const playerSetNameLocation = document.getElementById(setLocationId);
    const playerSetNameField = playerSetNameLocation.innerText;
    const playerNameSetInList = playerName;
    playerSetNameLocation.innerText = playerNameSetInList;

}
/* Button  1 */
document.getElementById('btn1').addEventListener('click', function () {
    setPlayerName('player_1', 'selection_1');

})

/* Button 2 */
document.getElementById('btn2').addEventListener('click', function () {
    setPlayerName('player_2', 'selection_2');
})

/* Button 3 */
document.getElementById('btn3').addEventListener('click', function () {
    setPlayerName('player_3', 'selection_3');
})

/* Button 4 */
document.getElementById('btn4').addEventListener('click', function () {
    setPlayerName('player_4', 'selection_4');
})

/* Button 5 */
document.getElementById('btn5').addEventListener('click', function () {
    setPlayerName('player_5', 'selection_5');
})

/* Button 6 */
document.getElementById('btn6').addEventListener('click', function () {
    setPlayerName('player_6', 'selection_6');
})
/* Button 7 */
document.getElementById('btn7').addEventListener('click', function () {
    setPlayerName('player_7', 'selection_7');
})
/* Button 8 */
document.getElementById('btn8').addEventListener('click', function () {
    setPlayerName('player_8', 'selection_8');
})


/* Get calculate Player cost  Button */
document.getElementById('calculate_btn').addEventListener('click', function () {
    const getPerPlayerCostField = document.getElementById('perPlayer_cost_field'); /* Get per player input field*/
    const perPlayerCostFieldString = getPerPlayerCostField.value; /* get input value */
    const perPlayerCost = parseFloat(perPlayerCostFieldString); /* Convert string to number  */




    /* Calculate total player cost  */
    const totalPlayerCostField = document.getElementById('total_player_cost'); /* Get player cost filed */
    const totalPlayerCostString = totalPlayerCostField.innerText; /* get player cost field input */
    const totalPlayerCost_convertNumber = parseFloat(totalPlayerCostString); /* conver string to number  */
    totalPlayerCostField.innerText = 5 * perPlayerCost; /* set new total player cost  */




})

/* Get total cost button  */
document.getElementById('calculateTotal_btn').addEventListener('click', function () {
    /* coach section  */
    const coachField = document.getElementById('coach_field'); /* Get coach fild  */
    const coachString = coachField.value; /* coach filed input value */
    const coachNumber = parseFloat(coachString); /* convert string to number  */
    /* coach section  */

    /* manager section  */
    const managerField = document.getElementById('manager_filed'); /* Get manager fild  */
    const managerString = managerField.value; /* manager filed input value */
    const managerNumber = parseFloat(managerString); /* convert string to number  */
    /* manager section  */

    const totalCostField = document.getElementById('total_cost');
    const totalCostString = totalCostField.innerText;
    const totalCostNumber = parseFloat(totalCostString);

    // Get calculate Player total cost amount 
    const totalPlayerCostField = document.getElementById('total_player_cost');
    const totalPlayerCostSrting = totalPlayerCostField.innerText;
    const totalPlayerCostNumber = parseFloat(totalPlayerCostSrting);

    const totalCost = totalPlayerCostNumber + coachNumber + managerNumber; // all total cost calculate

    /* set total amount */
    totalCostField.innerText = totalCost;


})