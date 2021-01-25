import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Card, Grid, Header, Image, Tab } from 'semantic-ui-react';
import { deleteFromFirebaseStorage } from '../../../../firestore/firebaseService';
import { deletePhotoFromCollection, getUserPhotos, setMainPhoto } from '../../../../firestore/fireStoreService';
import useFirestoreCollection from '../../../../hooks/useFirestoreCollection';
import { currentUserPhotos } from '../../../../store/actions/profile';
import PhotoUploadWidget from '../../../photos/photoUploadWidget';

const Photos = ({profile, isCurrentUser}) => {

    const dispatch = useDispatch();
    
    const [editMode, setEditMode] = useState(false);

    const {loading} = useSelector(state => state.async);
    const {profilePhotos} = useSelector(state => state.profile);   

    const [updating, setUpdating] = useState({updating: false, target: null});

    const [deleting, setDeleting] = useState({deleting: false, target: null});

    useFirestoreCollection({
        query: () => getUserPhotos(profile.id),
        data: photos => dispatch(currentUserPhotos(photos)),
        deps: [profile.id, dispatch]
    });

    const handlePhotoUpdate = async (photo, target) => {
        setUpdating({
            updating: true,
            target: target
        });

        try {
            await setMainPhoto(photo);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setUpdating({
                updating: false,
                target: null
            })
        }
    }

    const handlePhotoDelete = async (photo, target) => {
        setDeleting({
            deleting: true,
            target: target
        });
        try {
            await deleteFromFirebaseStorage(photo.name);
            await deletePhotoFromCollection(photo.id);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setDeleting({
                deleting: false,
                target: null
            })
        }
    }


    return (
        <Tab.Pane loading={loading}>
            <Grid>
                <Grid.Column width={16}>
                    <Header floated="left" icon="photo"  content="Photos" />
                    { isCurrentUser && 
                        <Button floated="right" onClick={() => setEditMode(!editMode)} basic  content={editMode ? 'Cancel' : 'Edit'} />
                    }
                    <div style={{clear: 'both'}}></div>
                </Grid.Column>
        
                <Grid.Column width={16}>
                    {editMode ? (
                        <PhotoUploadWidget setEditMode={setEditMode} />
                    ) : (
                        <Card.Group itemsPerRow={5}>
                        { profilePhotos.map(photo => (
                            
                                <Card key={photo.id}>
                                    <Image src={photo.url} />
                                    <Button.Group fluid widths={2}>
                                        <Button 
                                        loading={updating.updating && photo.id === updating.target} 
                                        name={photo.id} basic 
                                        color='green' 
                                        content="Main" 
                                        disabled={photo.url === profile.photoURL}
                                        onClick={(e) => handlePhotoUpdate(photo, e.target.name )} />
                                        <Button basic color="red" icon="trash"
                                        onClick={(e) => handlePhotoDelete(photo, e.target.name)}
                                        disabled={photo.url === profile.photoURL}
                                        loading={deleting.deleting}
                                        />
                                    </Button.Group>
                                </Card>
                          
                        ))}
                         </Card.Group> 
                    ) 
                    }
                </Grid.Column>
            </Grid>
        </Tab.Pane>    
    )
}

export default Photos;