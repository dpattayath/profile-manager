<?php
namespace App\Abstractions;

/**
 * Contract for repositories
 * @package App\Repository
 */
interface IRepository
{
    /**
     * Interface function to find record by id
     * @param int $id
     * @return mixed
     */
    public function find(int $id);

    /**
     * Interface function to query based on filters
     * @param array $filters
     * @return mixed
     */
    public function query(array $filters);

    /**
     * Interface function to save data - create/update
     * @param array $data
     * @param int|null $id
     * @return mixed
     */
    public function save(array $data, int $id = null);

    /**
     * Interface function to delete by id
     * @param int $id
     * @return mixed
     */
    public function delete(int $id);
}
