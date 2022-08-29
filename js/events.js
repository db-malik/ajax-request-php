"use strict";

/**
 * Gestionnaire d'événement
 * Gère l'événement 'input' sur le champ de recherche
 */
function onInputSearchCustomer() {
	const search = $("#search-customer").val();

	if (search.trim().length > 0) {
		$.getJSON(
			"ajax.php",
			{ action: "search-customer", search: search },
			onAjaxSearchCustomer
		);
	} else {
		$("#results").empty();
	}
}

/**
 * Gestionnaire d'événement
 * Gère l'événement 'click' sur le nom d'un client dans les résultats de recherche
 * Fais apparaître le bloc de détails d'un client
 */
function onClickCustomer() {
	const customerNumber = $(this).data("customerNumber");

	showCustomerDetails(customerNumber);
}

/**
 * Gestionnaire d'événement
 * Gère l'événement 'click' sur le bouton de fermeture du bloc de détails d'un client
 * Fait disparaître le bloc de détails d'un client
 */
function onClickCloseCustomerDetails() {
	$(this).parents("section").fadeOut().empty();
}

/**
 * Gestionnaire d'événement
 * Gère l'événement 'click' sur le bouton de modification d'un client
 * Fait apparaître le formulaire de mise à jour d'un client
 */
function onClickEditCustomer() {
	$("#customer-details form").fadeIn();
}

/**
 * Gestionnaire d'événement
 * Gère l'événement 'click' sur le bouton de valiation des modifications du client
 * Envoie une requête Ajax en POST avec les données du client à modifier
 */
function onClickSubmitForm() {
	const customerData = {
		customerNumber: $("[name=customer-number]").val(),
		name: $("#customer-name").val(),
		firstname: $("#contact-firstname").val(),
		lastname: $("#contact-lastname").val(),
		phone: $("#contact-tel").val(),
		addressLine1: $("#customer-address-line1").val(),
		addressLine2: $("#customer-address-line2").val(),
		postalCode: $("#customer-postal-code").val(),
		city: $("#customer-city").val(),
		country: $("#customer-country").val(),
	};

	/**
	 * Envoie d'une requête Ajax en POST vers le fichier ajax.php en transmettant dans le corps de la requête
	 * les données du client à mettre à jour, et dans l'url l'action à affectuer dans le fichier PHP
	 */
	$.post(
		"ajax.php?action=edit-customer",
		{ data: customerData },
		onAjaxEditCustomer
	);
}
