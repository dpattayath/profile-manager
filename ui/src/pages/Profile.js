import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Input, Button, Modal, ModalHeader, ModalBody,
    ModalFooter, Label, FormGroup, Form, FormFeedback } from 'reactstrap';
import ProfileCard from '../components/ProfileCard';
import ProfileService from '../services/ProfileService';
import AlertContext from '../contexts/AlertContext';

const Heading = styled.div`
    text-align: center;
    font-family: Brandon Grotesque;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    margin: 30px auto;
`;

const StyledContainer = styled(Container)`
    margin-bottom: 40px;
`;

const StyledInput = styled(Input)`
    border: 1px solid rgba(13, 25, 98, 0.21);
    border-radius: 2px;
`;

const NoRecords = styled(Row)`
    text-align: center;
    display: block;
    margin: 20px 0;
    color: #a71b1b;
}
`;

const Profile = () => {

    const [locationFilter, setLocationFilter] = useState(0);
    const [categoryFilter, setCategoryFilter] = useState(0);
    const [profiles, setProfiles] = useState([]);

    const categories = ProfileService.getCategories();
    const locations = ProfileService.getLocations();

    const [profileToEdit, setProfileToEdit] = useState({});
    const [errors, setErrors] = useState({});
    const alert = useContext(AlertContext);

    const fieldMappers = {
        "first_name": "First Name",
        "last_name": "Last Name",
        "location_id": "Location",
        "category_id": "Category",
    }

    /**
    Update form field upon changes
    */
    const onEditFormFieldChange = (event) => {
        setProfileToEdit({
            ...profileToEdit,
            [event.target.name]: event.target.value
        });
        if (event.target.value) {
            setErrors({
                ...errors,
                [event.target.name]: ""
            })
        } else {
            setErrors({
                ...errors,
                [event.target.name]: [fieldMappers[event.target.name]] + " is required"
            })
        }
    };

    /**
    function to fetch profiles
     */
    const fetchProfiles = () => {
        ProfileService.getProfiles({
            'location_id': locationFilter,
            'category_id': categoryFilter,
        })
        .then(
            (result) => {
                if (result.status == 200) {
                    setProfiles(result.data.data);
                } else {
                    console.log(result);
                }
            }
        )
        .catch(
            (error) => {
                if (error.response) {
                    alert.onAlert({
                        'type': 'danger',
                        'message': error.response.data.message
                    });
                }
        });
    }

    /**
    function to delete profile based on id
     */
    const deleteProfile = (id) => {
        ProfileService.deleteProfile(id)
        .then(
            (result) => {
                fetchProfiles();
            }
        )
        .catch(
            (error) => {
                if (error.response) {
                    alert.onAlert({
                        'type': 'danger',
                        'message': error.response.data.message
                    });
                }
        });
    }

    /**
    function to fetch profile info for edit form
     */
    const loadProfile = (id) => {
        ProfileService.getProfile(id)
        .then(
            (result) => {
                setProfileToEdit(result.data.data);
            }
        )
        .catch(
            (error) => {
                if (error.response) {
                    alert.onAlert({
                        'type': 'danger',
                        'message': error.response.data.message
                    });
                }
        });
    }

    /**
    function to update profile
     */
    const onEditSave = () => {
        ProfileService.updateProfile(profileToEdit, profileToEdit.id)
        .then(
            (result) => {
                fetchProfiles();
                setProfileToEdit({});
            }
        )
        .catch(
            (error) => {
                // TODO Seperate validation errors and failures
            if (error.response) {
                let formattedErrors = {};
                Object.keys(error.response.data.errors).map((key) => {
                    formattedErrors[key] = error.response.data.errors[key].join();
                });
                setErrors(formattedErrors);
            }
        });
    }

    /**
    callback for edit form cancel action
     */
    const onEditCancel = () => setProfileToEdit({});

    // upon load and any filter changes
    useEffect(() => {
        fetchProfiles();
    // eslint-disable-next-line
    }, [locationFilter, categoryFilter]);

    return (
        <StyledContainer>

            <Heading>Profiles</Heading>

            <Row lg="2" sm="1" md="1" xs="1">

                <Col>

                    <StyledInput type="select"
                        name="locationSelect"
                        id="locationSelect"
                        onChange={(event) => setLocationFilter(parseInt(event.target.value))}>
                    {
                        Object.keys(locations).map((key) => {
                            return <option key={key} value={key}>{locations[key]}</option>
                        })
                    }
                    </StyledInput>

                </Col>

                <Col>

                    <StyledInput type="select"
                        name="categorySelect"
                        id="categorySelect"
                        onChange={(event) => setCategoryFilter(parseInt(event.target.value))}>
                    {
                        Object.keys(categories).map((key) => {
                            return <option key={key} value={key}>{categories[key]}</option>
                        })
                    }
                    </StyledInput>

                </Col>

            </Row>

            <Row lg="4" sm="1" md="2">
                {
                    profiles.map(function(profile, index) {
                        profile.location = locations[profile.location_id];
                        profile.category = categories[profile.category_id];
                        return (
                            <Col key={index}>
                                <ProfileCard
                                    profile={profile}
                                    onDeleteAction={deleteProfile}
                                    onEditAction={loadProfile}/>
                            </Col>
                        );
                    })
                }
            </Row>

            <NoRecords>
                {profiles.length === 0 && (
                    <Col>No matching profiles</Col>
                )}
            </NoRecords>

            {/* Modal for edit profile */}
            <Modal isOpen={profileToEdit.id > 0} size="lg">

                <ModalHeader toggle={onEditCancel}>Edit Profile</ModalHeader>

                <ModalBody>

                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>First Name</Label>
                                    <Input type="text"
                                        name="first_name"
                                        id="first_name"
                                        value={profileToEdit.first_name}
                                        onChange={onEditFormFieldChange}
                                        invalid={errors.first_name}/>
                                    <FormFeedback>{errors.first_name}</FormFeedback>
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input type="text"
                                        name="last_name"
                                        id="last_name"
                                        value={profileToEdit.last_name}
                                        onChange={onEditFormFieldChange}
                                        invalid={errors.last_name}/>
                                        <FormFeedback>{errors.last_name}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Location</Label>
                                    <Input type="select" id="location_id"
                                        name="location_id"
                                        onChange={onEditFormFieldChange}
                                        invalid={errors.location_id}>
                                        {
                                            Object.keys(locations).map((key) => {
                                                if (key == profileToEdit.location_id) {
                                                    return <option key={key} value={key} selected>{locations[key]}</option>
                                                } else if (key != 0) {
                                                    return <option key={key} value={key}>{locations[key]}</option>
                                                }
                                            })
                                        }
                                    </Input>
                                    <FormFeedback>{errors.location_id}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Category</Label>
                                    <Input type="select" id="category_id"
                                        name="category_id"
                                        onChange={onEditFormFieldChange}
                                        invalid={errors.category_id}>
                                        {
                                            Object.keys(categories).map((key) => {
                                                if (key == profileToEdit.category_id) {
                                                    return <option key={key} value={key} selected>{categories[key]}</option>
                                                } else if (key != 0) {
                                                    return <option key={key} value={key}>{categories[key]}</option>
                                                }
                                            })
                                        }
                                    </Input>
                                    <FormFeedback>{errors.category_id}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Reviews</Label>
                                    <Input type="text"
                                        name="reviews"
                                        id="reviews"
                                        value={profileToEdit.reviews}
                                        onChange={onEditFormFieldChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Rating</Label>
                                    <Input type="text"
                                        name="rating"
                                        id="rating"
                                        value={profileToEdit.rating}
                                        onChange={onEditFormFieldChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Followers</Label>
                                    <Input type="text"
                                        name="followers"
                                        id="followers"
                                        value={profileToEdit.followers}
                                        onChange={onEditFormFieldChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>

                <ModalFooter>

                    <Button color="primary" onClick={onEditSave}>Save</Button>{' '}

                    <Button color="secondary" onClick={onEditCancel}>Cancel</Button>

                </ModalFooter>

            </Modal>
            {/* end */}

        </StyledContainer>
    )
}

export default Profile;
