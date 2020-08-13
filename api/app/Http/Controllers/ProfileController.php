<?php
namespace App\Http\Controllers;

use App\Exceptions\RepositoryException;
use App\Http\Resources\ProfileResource;
use App\Services\ProfileService;
use Illuminate\Http\Request;
use App\Http\Requests\ProfileRequest;
use Exception;

class ProfileController extends Controller
{
    private $profileService;

    public function __construct(ProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    public function all(Request $request)
    {
        $filters = $request->all();
        $profiles = $this->profileService->all($filters);
        return ProfileResource::collection($profiles);
    }

    public function get(int $id)
    {
        $profile = $this->profileService->get($id);
        return new ProfileResource($profile);
    }

    public function post(ProfileRequest $request)
    {
        $validated = $request->validated();

        $profile = $this->profileService->create($validated);
        return new ProfileResource($profile);
    }

    public function put(ProfileRequest $request, int $id)
    {
        $validated = $request->validated();

        $profile = $this->profileService->update($validated, $id);
        return new ProfileResource($profile);
    }

    public function delete(int $id)
    {
        throw new RepositoryException("asdsadsadasd");
        return $this->profileService->delete($id);
    }
}
