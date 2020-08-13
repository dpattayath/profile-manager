<?php

namespace App\Exceptions;

use Exception;

class RepositoryException extends Exception
{
    /**
     * Report the exception.
     *
     * @return void
     */
    public function report()
    {
        //
    }

    /**
     * Render the exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render($request)
    {
        return response(['message' => 'An unknown error has been encountered, please try again later.'], 503);
    }
}
