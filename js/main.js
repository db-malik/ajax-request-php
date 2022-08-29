"use strict";

////////////////////
// CODE PRINCIPAL //
////////////////////
$(function () {
	// Installation d'un gestionnaire d'événement sur l'événement 'input' du champ de recherche
	$("#search-customer").on("input", onInputSearchCustomer);

	// Installation d'un gestionnaire d'événement avec délégation au click sur les résultats de recherche
	$("#results").on("click", "a", onClickCustomer);

	// Installation de gestionnaires d'événements avec délégation sur ...
	$("#customer-details")
		.on("click", ".close-button", onClickCloseCustomerDetails) // ... le bouton de fermeture du bloc de détails d'un client
		.on("click", ".edit-button", onClickEditCustomer) // ... le bouton de modification d'un client
		.on("click", "[type=button]", onClickSubmitForm); // ... le bouton de validation du formulaire de modification d'un client
});
