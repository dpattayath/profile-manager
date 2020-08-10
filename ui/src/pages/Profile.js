import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Input } from 'reactstrap';
import ProfileCard from '../components/ProfileCard';
import ProfileService from '../services/ProfileService';

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


    const fetchProfiles = () => {
        ProfileService.getProfiles({
            'location_id': locationFilter,
            'category_id': categoryFilter,
        })
        .then(res => res.json())
        .then(
            (result) => {
                setProfiles(result.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const deleteProfile = (id) => {
        ProfileService.deleteProfile(id)
        .then(res => res.json())
        .then(
            (result) => {
                fetchProfiles();
            },
            (error) => {
                console.log(error);
            }
        );
    }

    const filterByLocation = (e) => {
        setLocationFilter(parseInt(e.target.value));
    }

    const filterByCategory = (e) => {
        setCategoryFilter(parseInt(e.target.value));
    }

    useEffect(() => {
        fetchProfiles();
    // eslint-disable-next-line
    }, [locationFilter, categoryFilter]);

    return (
        <StyledContainer>

            <Heading>Profiles</Heading>

            <Row lg="2" sm="1" md="1" xs="1">
                <Col>
                    <StyledInput type="select" name="locationSelect" id="locationSelect" onChange={filterByLocation}>
                    {
                        Object.keys(locations).map((key) => {
                            return (
                                <option key={key} value={key}>{locations[key]}</option>
                            )
                        })
                    }
                    </StyledInput>
                </Col>
                <Col>
                    <StyledInput type="select" name="categorySelect" id="categorySelect" onChange={filterByCategory}>
                    {
                        Object.keys(categories).map((key) => {
                            return (
                                <option key={key} value={key}>{categories[key]}</option>
                            )
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
                                <ProfileCard profile={profile} onDelete={deleteProfile}/>
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

        </StyledContainer>
    )
}

export default Profile;
