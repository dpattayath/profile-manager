<?php
namespace App\Repository;

use App\Abstractions\IRepository;
use App\Models\Category;
use App\Models\Profile;
use App\Models\Location;
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

        $profiles = Profile::cursor()->filter(function ($profile) {
            $result = true;
            if (isset($filters['location'])) {
                $location_id = Location::find($filters['location'])->pluck('id');
                $result = $result && $profile->location_id == $location_id;
            }
            if (isset($filters['category'])) {
                $category_id = Category::find($filters['category'])->pluck('id');
                $result = $result && $profile->category_id == $category_id;
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

        $location = null;
        if (isset($data['location'])) {
            $location = Location::where('name', '=', $data['location'])->first();
        }

        $category = null;
        if (isset($data['category'])) {
            $category = Category::where('name', '=', $data['category'])->first();
        }

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
        $profile->location_id = $location ? $location->id : null;
        $profile->category_id = $category ? $category->id : null;
        $profile->rating = $data['rating'];
        $profile->followers = $data['followers'];
        $profile->save();

        return $profile;
    }

    /**
     * @override
     * @param int $id
     * @return mixed
     */
    public function delete(int $id)
    {
        $this->validator->validateDelete(['id' => $id]);
        $profile = Profile::find($id);
        $profile->delete();
    }
}
