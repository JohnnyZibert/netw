import React from "react";
import style from './Users.module.css'
import userPhoto from '../../../src/assets/imges/kartinka-na-avatar-dlya-devushki-9.jpg'
import axios from "axios";

const Users = (props) => {
   let getUsers=() => {

       if (props.users.length === 0) {
           axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
               props.setUsers(response.data.items);
           });
       }
   }
    return <div>
        <button onClick={getUsers}> Get users</button>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} alt={'photos'}/>
            </div>
                <div>
                {u.followed
                    ? <button onClick={() => {
                        props.unFollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>
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