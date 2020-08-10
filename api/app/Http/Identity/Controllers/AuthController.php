<?php
namespace App\Http\Identity\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Identity\Models\User;

class AuthController extends BaseController
{
    use AuthorizesRequests;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * handles registration of user
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:100',
            'email' => 'required|email|unique:users|max:100',
            'password' => 'required|confirmed',
        ]);

        $user = User::create($validator->validated());
        return response()->json([
            'data' => [
                'user' => $user
            ]
        ], 201);
    }

    /**
     * handles login action based on JWT
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = Auth::attempt($validator->validated())) {
            return response()->json([
                'error' => __('auth.login.failed')
            ], 401);
        }

        return $this->responseWithToken($token);
    }

    /**
     * handles logout action
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::logout();
        return response('', 200);
    }

    /**
     * response with generated token
     * @param  string $token
     * @return \Illuminate\Http\JsonResponse
     */
    protected function responseWithToken($token)
    {
        return response()->json([
            'data' => [
                'token' => $token,
                'expires' => Auth::factory()->getTTL() * 90,
                'user' => Auth::user()
            ]
        ]);
    }
}
