import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {setUserProfileAC} from "../../../redux/profile-reducer/action-creators";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType>

const ProfileContainer: React.FC<PropsType> = (props) => {
    const profile = useAppSelector(state => state.profilePage.profile)
    const dispatch = useAppDispatch()
    let userId = props.match.params.userId

    useEffect(() => {
        console.log(userId)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                dispatch(setUserProfileAC(res.data))
            })
    },[userId])

    return (
        <Profile profile={profile}/>
    );
};

export default withRouter(ProfileContainer);