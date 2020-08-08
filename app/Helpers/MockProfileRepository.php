<?php
namespace App\Helpers;

use App\Abstractions\IRepository;

class MockProfileRepository implements IRepository
{
    private $cache = [
        [
            'id' => 1,
            'name' => 'Test User1',
            'description' => 'Test Description1',
            'profile_photo' => '',
            'rating' => 4.0,
            'followers' => 10,
            'phone_number' => 0400000000,
            'email' => 'test1@email.com',
            'gallery' => [],
            'location' => 'NSW',
            'category' => 'Photographer'
        ],
        [
            'id' => 2,
            'name' => 'Test User2',
            'description' => 'Test Description2',
            'profile_photo' => '',
            'rating' => 4.0,
            'followers' => 10,
            'phone_number' => 0400000000,
            'email' => 'test2@email.com',
            'gallery' => [],
            'location' => 'VIC',
            'category' => 'Model'
        ]
    ];

    public function find(int $id)
    {
        $result = array_filter($this->cache, function($item) use($id) {
            return $item['id'] == $id;
        });
        return $result[0] ?? null;
    }

    public function query(array $filters)
    {
        return array_filter($this->cache, function($item) use($filters) {

            $result = true;

            if (isset($filters['location'])) {
                $result = $result && (strtolower($filters['location']) == strtolower($item['location']));
            }

            if (isset($filters['category'])) {
                $result = $result && (strtolower($filters['category']) == strtolower($item['category']));
            }

            return $result;
        });
    }

    public function save(array $data, int $id = null)
    {
        if ($id) {
            $this->cache[$id] = $data;
        } else {
            $data['id'] = count($this->cache);
            $this->cache[] = $data;
            $id = $data['id'];
        }
        return $this->cache[$id];
    }

    public function delete(int $id)
    {
        unset($this->cache[$id]);
    }
}
