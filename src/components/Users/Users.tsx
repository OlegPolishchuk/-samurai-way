import React from 'react';
import s from './Users.module.css'
import {Pagination} from "../Pagination/Pagination";
import {InitialStateType} from "../../redux/users-reducer";

type UsersPropsType = {
    usersPage: InitialStateType,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setCurrentPage: (currentPage: number) => void
}

const Users: React.FC<UsersPropsType> = (
    {
        usersPage,
        follow,
        unFollow,
        setCurrentPage
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
                        <figure className={s.inner_wrapper}>
                            <img className={s.user_avatar} alt={'avatar'}
                                 src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                            <figcaption className={s.user_description}>
                                {/* user name */}
                                <h3 className={s.user_name}>{el.name}</h3>
                                <p className={s.user_status}>{el.status}</p>
                            </figcaption>
                        </figure>
                        {el.followed
                            ? <button
                                onClick={() => {
                                    onUnFollowHandler(el.id)
                                }}
                                className={`common_btn ${s.btn_unfollow} ${s.btn}`}
                            >Unfollow</button>
                            : <button
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
};

export default Users