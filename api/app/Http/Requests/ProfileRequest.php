<?php

namespace App\Http\Requests;

class ProfileRequest extends JsonRequest
{
    /**
     * Determine if the user is authorized to make this request
     * @return true
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => ['required', 'max:100'],
            'last_name' => ['required', 'max:100'],
            'email' => ['required', 'max:255'],
            'phone_number' => ['nullable', 'max:25'],
            'description' => ['nullable', 'max:255'],
            'rating' => ['nullable'],
            'followers' => ['nullable'],
            "location_id"  => ['required'],
	        "category_id"  => ['required'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules
     * @return array
     */
    public function messages()
    {
        return [
            'first_name.required' => ':attribute is required',
            'first_name.max' => ':attribute is too long, max 100 chars',
            'last_name.required' => ':attribute is required',
            'last_name.max' => ':attribute is too long, max 100 chars',
            'email.required' => ':attribute is required',
            'email.max' => ':attribute is too long, max 255 chars',
        ];
    }

    /**
     * Get custom attributes for validator errors
     * @return array
     */
    public function attributes()
    {
        return [
            'first_name' => 'First Name',
            'last_name' => 'Last Name',
            'email' => 'Email',
            'phone_number' => 'Phonenumber',
            'description' => 'Description',
            'rating' => 'Rating',
            'followers' => 'Followers',
            'location_id' => 'Location',
            'category_id' => 'Category',
        ];
    }

    /**
     * Prepare the data for validation
     * @return void
     */
    public function prepareForValidation()
    {
        $this->merge([

        ]);
    }
}
