import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import axios from "axios";

const userPhoto = require("../../assets/img/userPhoto.png" )

class UsersClass extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }

    onFollowHandler = (userId: string) => {
        this.props.follow(userId)
    }
    onUnFollowHandler = (userId: string) => {
        this.props.unFollow(userId)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.usersPage.totalCount / this.props.usersPage.pageSize)

        const pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div className={s.pagination}>
                    {pages.map((el,  i) => {
                        return(
                            <span key={i} className={this.props.usersPage.currentPage === el ? s.selected_page : '' }
                                  onClick={() => {this.onPageChanged(el)}}
                            >{el}
                            </span>
                        )
                    })}
                </div>
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