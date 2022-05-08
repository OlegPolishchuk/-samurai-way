import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {setUserProfileAC} from "../../../redux/profile-reducer/action-creators";

const ProfileContainer: React.FC = () => {
    const profile = useAppSelector(state => state.profilePage.profile)
    const dispatch = useAppDispatch()

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(res => {
                dispatch(setUserProfileAC(res.data))
            })
    },[])

    return (
        <Profile profile={profile}/>
    );
};

export default ProfileContainer;