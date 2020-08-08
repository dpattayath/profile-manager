<?php
namespace App\Services;

use App\Abstractions\IRepository;
use App\Exceptions\DomainException;
use App\Exceptions\RepositoryException;


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
        try {
            $profiles = $this->profileRepository->query($filters);
            return $profiles;
        } catch (DomainException $exp) {
            throw $exp;
        } catch (\Throwable $exp) {
            throw new RepositoryException($exp->getMessage());
        }
    }

    /**
     * Service function to get record by id
     * @param int $id
     * @return mixed
     */
    public function get(int $id)
    {
        try {
            $profile = $this->profileRepository->find($id);
            return $profile;
        } catch (DomainException $exp) {
            throw $exp;
        } catch (\Throwable $exp) {
            throw new RepositoryException($exp->getMessage());
        }
    }

    /**
     * Service function to create a record
     * @param array $data
     * @return mixed
     */
    public function create(array $data)
    {
        try {
            $profile = $this->profileRepository->save($data);
            return $profile;
        } catch (DomainException $exp) {
            throw $exp;
        } catch (\Throwable $exp) {
            throw new RepositoryException($exp->getMessage());
        }
    }

    /**
     * Service function to update record based on id
     * @param array $data
     * @param int $id
     * @return mixed
     */
    public function update(array $data, int $id)
    {
        try {
            return $this->profileRepository->save($data, $id);
        } catch (DomainException $exp) {
            throw $exp;
        } catch (\Throwable $exp) {
            throw new RepositoryException($exp->getMessage());
        }
    }

    /**
     * Service function to delete record based on id
     * @param int $id
     * @return void
     */
    public function delete(int $id)
    {
        try {
            $this->profileRepository->delete($id);
        } catch (DomainException $exp) {
            throw $exp;
        } catch (\Throwable $exp) {
            throw new RepositoryException($exp->getMessage());
        }
    }
}
