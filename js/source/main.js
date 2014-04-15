(function(){
	'use strict';

	$(document).ready(initialize);

	function initialize() {
		$('#deposit').click(deposit);
		$('#withdrawl').click(withdrawl);
   	$('#final').val(1000);

	}

function result(x){
    $('#final').val(x);
 }

function balance(x) {
    var bal = parseFloat($('#final').val());
    bal += x;
    result(bal);   
    var withdrawl = 0;
    var deposit = 0;
    var fee = '';
    if (x < 0) {
    	withdrawl = (x);
  		deposit = '';
  		

    	}
    	else{
    		deposit = x;
    		withdrawl = '';

    	}
        while (bal < 0){
        	fee = -50;
        	bal += fee;
        	bal = '('+(bal * -1)+')';
    }
 
    $('#table tr:last').after('<tr><td>' + fee + '</td><td>' + withdrawl + '</td><td>' + deposit + '</td><td>' + bal + '</td></tr>');

}

function deposit() {
    var trans = parseFloat($('#transaction').val());
    balance(trans);
}



function withdrawl() {
	var trans = parseFloat($('#transaction').val() * -1);
	balance(trans);
}

})();