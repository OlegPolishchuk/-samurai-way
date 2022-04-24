import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import axios from "axios";
// import userPhoto from "../../assets/img/userPhoto.png"

const userPhoto = require("../../assets/img/userPhoto.png" )

class UsersClass extends React.Component<UsersPropsType> {
    // ничего, кроме наследования нет, то эту чать можно не писать
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    onFollowHandler = (userId: string) => {
        this.props.follow(userId)
    }
    onUnFollowHandler = (userId: string) => {
        this.props.unFollow(userId)
    }

    render() {
        return (
            <div>
                {this.props.usersPage.users.map(el => {
                    return (
                        <div key={el.id} className={s.user_wrapper}>
                            <figure className={s.inner_wrapper}>
                                <img className={s.user_avatar} alt={'avatar'}
                                     // src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}
                                     src={el.photos.small !== null ? el.photos.small : userPhoto}
                                />
                                <figcaption className={s.user_description}>
                                    {/*user name*/}
                                    <h3 className={s.user_name}>{el.name}</h3>
                                    <p className={s.user_status}>{el.status}</p>
                                </figcaption>
                            </figure>
                            {/*<div className={s.user_location} title={el.location.country}>{el.location.city}</div>*/}
                            {el.followed
                                ? <button
                                    onClick={() => {
                                        this.onUnFollowHandler(el.id)
                                    }}
                                    className={`common_btn ${s.btn_unfollow} ${s.btn}`}
                                >Unfollow</button>
                                : <button
                                    onClick={() => {
                                        this.onFollowHandler(el.id)
                                    }}
                                    className={`common_btn ${s.btn}`}
                                >Follow</button>
                            }
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default UsersClass