import React from "react";
import style from './Users.module.css'
import userPhoto from '../../assets/ava2.jpg'
import {NavLink} from "react-router-dom";



const Users = (props) => {

    let pagesCount = Math.ceil(props.userTotalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>

            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>

            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto}
                     alt={'photos'}/>
                        </NavLink>
            </div>
                <div>
                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === (u.id))} onClick={() => {
                        props.unfollow(u.id)}}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === (u.id))} onClick={() => {
                        props.follow(u.id)}}>Follow</button>
                }

                    </div>
                    </span>
                <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>

                    <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.cities'}</div>
                    </span>
                    </span>

            </div>)
        }
    </div>

}


export default Users;