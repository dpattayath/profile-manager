<?php
namespace App\Http\Controllers;

use App\Services\ProfileService;
use Illuminate\Http\Request;

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
        return $this->profileService->all($filters);
    }

    public function get(int $id)
    {
        return $this->profileService->get($id);
    }

    public function post(Request $request)
    {
        $data = $request->all();
        return $this->profileService->create($data);
    }

    public function put(Request $request, int $id)
    {
        $data = $request->all();
        return $this->profileService->update($data, $id);
    }

    public function delete(int $id)
    {
        return $this->profileService->delete($id);
    }
}
