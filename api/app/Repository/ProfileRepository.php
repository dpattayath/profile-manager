<?php
namespace App\Repository;

use App\Abstractions\IRepository;
use App\Models\Profile;
use App\Validators\ProfileValidator;

class ProfileRepository implements IRepository
{
    private $validator;

    public function __construct(ProfileValidator $validator)
    {
        $this->validator = $validator;
    }

    /**
     * @override
     * @param int $id
     * @return Profile|null
     */
    public function find(int $id)
    {
        $this->validator->validateFind(['id' => $id]);
        return Profile::findOrFail($id);
    }

    /**
     * @override
     * @param array $filters
     * @return Profile[]
     */
    public function query(array $filters)
    {
        $this->validator->validateQuery($filters);

        $profiles = Profile::cursor()->filter(function ($profile) use($filters) {
            $result = true;
            if (isset($filters['location_id'])) {
                $result = $result && $profile->location_id == intval($filters['location_id']);
            }
            if (isset($filters['category_id'])) {
                $result = $result && $profile->category_id == intval($filters['category_id']);
            }
            return $result;
        });
        return $profiles;
    }

    /**
     * @override
     * @param array $data
     * @param int|null $id
     * @return Profile|null
     */
    public function save(array $data, int $id = null)
    {
        $this->validator->validateSave(array_merge($data, ['id' => $id]));

        if ($id) {
            $profile = Profile::find($id);
        } else {
            $profile = new Profile();
        }

        $profile->first_name = $data['first_name'];
        $profile->last_name = $data['last_name'];
        $profile->description = $data['description'];
        $profile->email = $data['email'];
        $profile->phone_number = $data['phone_number'];
        $profile->location_id = $data['location_id'];
        $profile->category_id = $data['category_id'];
        $profile->rating = $data['rating'];
        $profile->followers = $data['followers'];
        $profile->save();

        return $profile;
    }

    /**
     * @override
     * @param int $id
     * @return int
     */
    public function delete(int $id)
    {
        $this->validator->validateDelete(['id' => $id]);
        return Profile::destroy($id);
    }
}
