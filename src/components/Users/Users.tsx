import React, {useEffect} from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import {Pagination} from "../Pagination/Pagination";

const Users: React.FC<UsersPropsType> = (
    {
        usersPage,
        follow,
        unFollow,
        setUsers,
        setTotalCount,
        setCurrentPage
    }
) => {

    const {totalCount, pageSize, currentPage} = usersPage

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                setUsers(res.data.items)
                setTotalCount(res.data.totalCount)
            })
    },[currentPage, pageSize])

    const onFollowHandler = (userId: string) => {
        follow(userId)
    }

    const onUnFollowHandler = (userId: string) => {
        unFollow(userId)
    }

    const userPhoto = require("../../assets/img/userPhoto.png")

    return (
        <div>
            <Pagination
                totalCount={totalCount}
                currentPageNumber={currentPage}
                pageSize={pageSize}
                callBack={setCurrentPage}
            />
            {usersPage.users.map(el => {
                return (
                    <div key={el.id} className={s.user_wrapper}>
                        <figure className={s.inner_wrapper}>
                            <img className={s.user_avatar} alt={'avatar'}
                                 src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                            <figcaption className={s.user_description}>
                                {/*user name*/}
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
        </div>
    );
};

export default Users