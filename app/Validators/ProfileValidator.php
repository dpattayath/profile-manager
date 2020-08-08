<?php
namespace App\Validators;

use App\Abstractions\IDomainValidator;
use App\Exceptions\DomainException;
use App\Models\Profile;

/**
 * Handles Domain Validation for profile and is an instance of IDomainValidator
 * @package App\Validators
 */
class ProfileValidator implements IDomainValidator
{
    const MESSAGE_PROFILE_NOT_FOUND = "Profile not found";
    const MESSAGE_EMAIL_DUPLICATION = "Email already exists";

    /**
     * Implemented method to validate profile repository find
     * @param array $input
     * @return void
     * @throws DomainException
     */
    public function validateFind(array $input)
    {
        $this->checkProfileExists($input['id']);
    }

    /**
     * Implemented method to validate profile repository query
     * @param array $input
     * @return void
     * @throws DomainException
     */
    public function validateQuery(array $input)
    {

    }

    /**
     * Implemented method to validate profile repository save
     * @param array $input
     * @return void
     * @throws DomainException
     */
    public function validateSave(array $input)
    {
        if (isset($input['id'])) {
            $this->checkProfileExists($input['id']);
            $this->checkEmailDuplication($input['email'], $input['id']);
        } else {
            $this->checkEmailDuplication($input['email'], $input['id']);
        }
    }

    /**
     * Implemented method to validate profile repository delete
     * @param array $input
     * @return void
     * @throws DomainException
     */
    public function validateDelete(array $input)
    {
        $this->checkProfileExists($input['id']);
    }

    /**
     * Private method to check if profile exists
     * @param int $id
     * @return void
     * @throws DomainException
     */
    private function checkProfileExists($id)
    {
        $profile = Profile::find($id);
        if (!$profile) {
            throw new DomainException(self::MESSAGE_PROFILE_NOT_FOUND);
        }
    }

    /**
     * Private method to check if email is duplicate
     * @param string $email
     * @param int $id
     * @return void
     * @throws DomainException
     */
    private function checkEmailDuplication($email, $id)
    {
        $profile = Profile::where('email', '=', $email)->first();
        if ($profile && $profile->id != $id) {
            throw new DomainException(self::MESSAGE_EMAIL_DUPLICATION);
        }
    }
}
