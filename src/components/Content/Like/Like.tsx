import React, {useState} from 'react';
import style from "../Like/Like.module.css";

const Like = () => {
    let [like, setLike] = useState(0);

    return (
        <div className={style.likes}>
            <span className={style.like_btn} onClick={()=>setLike(like+1)}>like</span>
            <span>{like}</span>
        </div>
    );
};

export default Like;