import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'

const Users: React.FC<UsersPropsType> = (
    {
        usersPage,
        follow,
        unFollow,
        setUsers
    }
) => {

    const onFollowHandler = (userId: string) => {
        follow(userId)
    }

    const onUnFollowHandler = (userId: string) => {
        unFollow(userId)
    }

    return (
        <div>
            {usersPage.users.map(el => {
                return (
                    <div key={el.id} className={s.user_wrapper}>
                        <figure className={s.inner_wrapper}>
                            <img className={s.user_avatar} alt={'avatar'}
                                 src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}/>
                            <figcaption className={s.user_description}>
                                {/*user name*/}
                                <h3 className={s.user_name}>{el.fullName}</h3>
                                <p className={s.user_status}>{el.status}</p>
                            </figcaption>
                        </figure>
                        <div className={s.user_location} title={el.location.country}>{el.location.city}</div>
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