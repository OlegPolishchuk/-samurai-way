import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import Preloader from "../../Preloader/Preloader";
import {getUserProfileTC} from "../../../redux/profile-reducer/thunk-creators";

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType>

const ProfileContainer: React.FC<PropsType> = (props) => {
    const profile = useAppSelector(state => state.profilePage.profile)
    const isFetching = useAppSelector(state => state.profilePage.isFetching)

    const dispatch = useAppDispatch()

    //хардкодим параметр userId = 2, если на стартовой странице не выбран юзер
    let userId = props.match.params.userId ? props.match.params.userId : 2


    useEffect(() => {
        dispatch(getUserProfileTC(userId))
    },[userId, dispatch])

    return (
        <>
            {isFetching && <Preloader/>}
            <Profile profile={profile}/>
        </>
    );
};

export default withRouter(ProfileContainer);