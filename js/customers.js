"use strict";

/**
 * Affiche les informations détaillées d'un client à partir de son numéro
 * @param customerNumber - Le numéro du client dont on souhaite affciher les informations détaillées
 */
function showCustomerDetails(customerNumber) {
	$.get(
		"ajax.php",
		{ action: "get-customer-details", customerNumber: customerNumber },
		onAjaxGetCustomerDetails
	);
}
