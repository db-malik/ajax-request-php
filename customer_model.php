<?php

/**
 * Effectue une recherche parmi le nom des clients à partir d'une chaîne de caractères
 * @param string $search Chaîne de caractères à rechercher
 * @return array
 */
function searchCustomers(string $search)
{
    $sql = 'SELECT customerName, customerNumber
            FROM customers
            WHERE customerName LIKE ?
            ORDER BY customerName
            LIMIT 0,5';


    $query = executeQuery($sql, [$search . '%']);


    return $query->fetchAll();
}

/**
 * Sélectionne les informations d'un client particulier à partir de son numéro
 * @param int $customerNumber Le numéro du client dont on souhaite récupérer les données
 * @return mixed
 */
function getCustomerById(int $customerNumber)
{
    $sql = 'SELECT *
            FROM customers
            WHERE customerNumber = ?';


    $query = executeQuery($sql, [$customerNumber]);


    return $query->fetch();
}

/**
 * Met à jour les informations d'un client en base de données
 * @param array $data Un tableau contenant les données modifiées du client à mettre à jour
 * @return bool|mixed
 */
function updateCustomer(array $data)
{
    $sql = 'UPDATE customers
            SET 
                customerName = ?,
                contactFirstName = ?,
                contactLastName = ?,
                phone = ?,
                addressLine1 = ?,
                addressLine2 = ?,
                postalCode = ?,
                city = ?,
                country = ?
            WHERE customerNumber = ?';


    $query = executeQuery($sql, [
        $data['name'],
        $data['firstname'],
        $data['lastname'],
        $data['phone'],
        $data['addressLine1'],
        $data['addressLine2'],
        $data['postalCode'],
        $data['city'],
        $data['country'],
        $data['customerNumber']
    ]);

    /**
     * La méthode errorCode() appliquée à un objet PDOStatement permet de récupérer un code d'erreur
     * https://www.php.net/manual/fr/pdostatement.errorcode.php
     * Le code '00000' signifie que tout s'est bien passé. Si tel est le cas, on retourne le numéro du client mis à jour
     * Dans le cas contraire on retourne la valeur booléenne false
     */
    if ($query->errorCode() == '00000') {
        return $data['customerNumber'];
    }

    return false;
}