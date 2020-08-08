<?php
namespace App\Abstractions;

/**
 * Contract for Domain validation
 * @package App\Abstractions
 */
interface IDomainValidator
{
    /**
     * Validates find method of the repository
     * @param array $input
     * @return void
     * @throws DomainException
     */
    public function validateFind(array $input);

    /**
     * Validates query method of the repository
     * @param array $input
     * @return void
     * @throws DomainException
     */
    public function validateQuery(array $input);

    /**
     * Validates save method of the repository
     * @param array $input
     * @return void
     * @throws DomainException
     */
    public function validateSave(array $input);

    /**
     * Validates delete method of the repository
     * @param array $input
     * @return void
     * @throws DomainException
     */
    public function validateDelete(array $input);
}
