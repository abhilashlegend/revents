import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { getUserProfile } from '../../firestore/fireStoreService';
import useFirestoreDoc from '../../hooks/useFirestoreDoc';
import { selectedUserProfile } from '../../store/actions/profile';
import Loader from '../ui/loader/loader';
import ProfileContent from './content/profileContent';
import ProfileHeader from './header/profileHeader';

const Profile = props => {

    const dispatch = useDispatch();

    const {selectedProfile} = useSelector(state => state.profile);

    const { currentUser } = useSelector(state => state.auth);

    const {loading, error} = useSelector(state =>  state.async);

    

    useFirestoreDoc({
        query: () => getUserProfile(props.match.params.id),
        data: profile => dispatch(selectedUserProfile(profile)),
        deps: [props.match.params.id, dispatch]
    })


    if((loading && !selectedProfile) || (!error && !selectedProfile)) return <Loader>Loading Profile...</Loader>



    return (
        <Grid.Column width={16}>
            <ProfileHeader profile={selectedProfile} isCurrentUser={currentUser.uid === selectedProfile.id} />
            <ProfileContent profile={selectedProfile} isCurrentUser={currentUser.uid === selectedProfile.id} />
        </Grid.Column>
    )
}

export default Profile;