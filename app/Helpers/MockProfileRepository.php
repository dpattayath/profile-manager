<?php
namespace App\Helpers;

use App\Abstractions\IRepository;
use App\Models\Profile;

class MockProfileRepository implements IRepository
{
    private $profiles = [
        [
            'id' => 1,
            'name' => 'Test User1',
            'description' => 'Test Description1',
            'email' => 'test1@email.com',
            'phone_number' => 0400000000,
            'rating' => 4.0,
            'followers' => 10,
            'location_id' => 1,
            'category_id' => 2
        ],
        [
            'id' => 2,
            'name' => 'Test User2',
            'description' => 'Test Description2',
            'email' => 'test2@email.com',
            'phone_number' => 0400000000,
            'rating' => 4.0,
            'followers' => 10,
            'location_id' => 2,
            'category_id' => 3
        ],
        [
            'id' => 3,
            'name' => 'Test User3',
            'description' => 'Test Description3',
            'email' => 'test3@email.com',
            'phone_number' => 0400000000,
            'rating' => 3.0,
            'followers' => 1,
            'location_id' => 1,
            'category_id' => 4
        ]
    ];

    public function find(int $id)
    {
        $index = $this->findIndex($id);
        if ($index > -1) {
            return new Profile($this->profiles[$index]);
        }
        return null;
    }

    public function query(array $filters)
    {
        return array_filter($this->profiles, function($profile) use($filters) {

            $result = true;

            if (isset($filters['location_id'])) {
                $result = $result && ($filters['location_id'] == $profile['location_id']);
            }

            if (isset($filters['category_id'])) {
                $result = $result && ($filters['category_id'] == $profile['category_id']);
            }

            return $result;
        });
    }

    public function save(array $data, int $id = null)
    {
        if ($id) {
            $index = $this->findIndex($id);
            if ($index > -1) {
                $this->profiles[$index] = $data;
            }
        } else {
            $data['id'] = last($this->profiles)['id'] + 1;
            $this->profiles[] = $data;
            $index = count($this->profiles) - 1;
        }
        return $this->profiles[$index];
    }

    public function delete(int $id)
    {
        unset($this->profiles[$id]);
        return 1;
    }

    private function findIndex($id) {
        $index = -1;
        foreach ($this->profiles as $key => $profile) {
            if ($profile['id'] == $id) {
                $index = $key;
            }
        }
        return $index;
    }
}
