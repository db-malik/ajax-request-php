"use strict";

/**
 * Callback - Recherche client
 * Affiche la liste des résultats de la recherche
 * @param customers - La réponse du serveur, les clients correspondants à la recherche
 */
function onAjaxSearchCustomer(customers) {
	$("#results").empty();

	customers.forEach(function (customer) {
		const $li = $("<li>");

		$("<a>")
			.text(customer.customerName)
			.data("customerNumber", customer.customerNumber)
			.attr("href", "#")
			.appendTo($li);

		$("#results").append($li);
	});
}

/**
 * Callback - Détails client
 * Affiche le bloc de détails d'un client
 * @param customer - Les informations du client récupérées du serveur
 */
function onAjaxGetCustomerDetails(customer) {
	$("#customer-details").html(customer).fadeIn();
}

/**
 * Callback - Modification d'un client
 * Affiche le client après modification
 * @param customerNumber - Le numéro de client du client mis à jour
 */
function onAjaxEditCustomer(customerNumber) {
	if (customerNumber != false) {
		showCustomerDetails(customerNumber);
	}
}
