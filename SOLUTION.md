
## Approach

Approach is to implement basic functionalities at this stage as a proof of concept.

## Assumptions/Questions

- Missing design for create/update form.
- Only 8 profile assets and the design renders all in one page which makes the pagination requirement not applicable.
- Missing design for login form, so implemented this as header item for the sake of POC.
- As per design, there is only one filter and bit confusing in terms of how it works. So implemented this as two styled select filters - category and location.
- `Few gallery photos` as per requirement but missing in design as well as the assets provided.

## ToDo
- ui
    - profile create/update form with validation.
    - pagination (not implemented since not enough profiles to paginate).
    - move user assets to cloud such as S3.
    - move js assets to cdn for faster delivery.
    - optimize user profile images once upload is enabled.
    - re-implement filters as a text field which can be matched against applicable user attributes. This allowes 1+ less click for the user and improves user experience.

- api
    - redis cache to make filtering faster
    - swagger api documentation
    - pagination
    - migrate db from sqlite to mysql/postgres
    - remove .env from repo (included for the smooth run of poc)
