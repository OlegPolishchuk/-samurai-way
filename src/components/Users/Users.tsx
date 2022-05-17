import React from 'react';
import s from './Users.module.css'
import {Pagination} from "../Pagination/Pagination";
import {InitialStateType} from "../../redux/users-reducer/users-reducer";
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    usersPage: InitialStateType,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setCurrentPage: (currentPage: number) => void
    followingInProgress: string[]
}

const Users: React.FC<UsersPropsType> = React.memo((
    {
        usersPage,
        follow,
        unFollow,
        setCurrentPage,
        followingInProgress,
    }
) => {
    const {users, totalCount, pageSize, currentPage} = usersPage

    const onFollowHandler = (userId: string) => {
        follow(userId)
    }

    const onUnFollowHandler = (userId: string) => {
        unFollow(userId)
    }

    const userPhoto = require("../../assets/img/userPhoto.png")

    return (
        <div className={s.container}>
            <Pagination
                totalCount={totalCount}
                currentPageNumber={currentPage}
                pageSize={pageSize}
                callBack={setCurrentPage}
            />
            {users.map(el => {
                return (
                    <div key={el.id} className={s.user_wrapper}>
                        <NavLink to={`/profile/${el.id}`}>
                            <figure className={s.inner_wrapper}>
                                <img className={s.user_avatar} alt={'avatar'}
                                     src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                                <figcaption className={s.user_description}>
                                    {/* user name */}
                                    <h3 className={s.user_name}>{el.name}</h3>
                                    <p className={s.user_status}>{el.status}</p>
                                </figcaption>
                            </figure>
                        </NavLink>
                        {el.followed
                            ? <button
                                disabled={followingInProgress.some(id => id === el.id)}
                                onClick={() => {
                                    onUnFollowHandler(el.id)
                                }}
                                className={`common_btn ${s.btn_unfollow} ${s.btn}`}
                            >Unfollow</button>
                            : <button
                                disabled={followingInProgress.some(id => id === el.id)}
                                onClick={() => {
                                    onFollowHandler(el.id)
                                }}
                                className={`common_btn ${s.btn}`}
                            >Follow</button>
                        }
                    </div>

                )
            })}
            <Pagination
                totalCount={totalCount}
                currentPageNumber={currentPage}
                pageSize={pageSize}
                callBack={setCurrentPage}
            />
        </div>
    );
});

export default Users