<?php
namespace App\Services;

use App\Abstractions\IRepository;

class ProfileService
{
    private $profileRepository;

    public function __construct(IRepository $profileRepository)
    {
        $this->profileRepository = $profileRepository;
    }

    /**
     * Service function to handle all records
     * @param array $filters
     * @return mixed
     */
    public function all(array $filters)
    {
        $profiles = $this->profileRepository->query($filters);
        return $profiles;
    }

    /**
     * Service function to get record by id
     * @param int $id
     * @return mixed
     */
    public function get(int $id)
    {
        $profile = $this->profileRepository->find($id);
        return $profile;
    }

    /**
     * Service function to create a record
     * @param array $data
     * @return mixed
     */
    public function create(array $data)
    {
        $profile = $this->profileRepository->save($data);
        return $profile;
    }

    /**
     * Service function to update record based on id
     * @param array $data
     * @param int $id
     * @return mixed
     */
    public function update(array $data, int $id)
    {
        return $this->profileRepository->save($data, $id);
    }

    /**
     * Service function to delete record based on id
     * @param int $id
     * @return void
     */
    public function delete(int $id)
    {
        $this->profileRepository->delete($id);
    }
}
