
## Approach

Approach is to implement basic functionalities at this stage as a proof of concept.

## Assumptions/Questions

- Request for create/update form designs?
- Only 8 profile assets and the design renders all in one page which makes the pagination requirement not applicable.
- Request design for login form? Currently implemented as header item for the sake of POC.
- Design clarifications for filters, there is only one filter and bit confusing in terms of how it works. Currently implemented as two selects - category and location.
- Design clarification and request for `Few gallery photos` and related assets.
- Request for clarification of admin user account crud.

## ToDo
- ui
    - profile create/update form with validation.
    - pagination (not implemented since not enough profiles to paginate).
    - move user assets to cloud such as S3.
    - move js assets to cdn for faster delivery.
    - optimize user profile images once upload is enabled.
    - re-implement filters as a text field which can be matched against applicable user attributes. This allowes 1+ less click for the user and improves user experience.
    - incorporate test framework.
    - perfecting pixels on ui components including mobile view.

- api
    - redis cache to make filtering faster
    - swagger api documentation
    - pagination
    - migrate db from sqlite to mysql/postgres
    - remove .env from repo (included for the smooth run of poc)
