<?php
namespace App\Repository;

use App\Abstractions\IRepository;

class ProfileRepository implements IRepository
{
    /**
     * @override
     * @param int $id
     * @return mixed
     */
    public function find(int $id) : Profile
    {

    }

    /**
     * @override
     * @param array $filters
     * @return mixed
     */
    public function query(array $filters)
    {

    }

    /**
     * @override
     * @param array $data
     * @param int|null $id
     * @return mixed
     */
    public function save(array $data, int $id = null)
    {

    }

    /**
     * @override
     * @param int $id
     * @return mixed
     */
    public function delete(int $id)
    {

    }
}
