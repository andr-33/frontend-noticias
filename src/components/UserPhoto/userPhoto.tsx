import React from "react";

interface Props{
    width: number,
    height: number
}

const UserPhoto: React.FC<Props> =({width, height})=>{
    return(
        <img style={{width: `${width}px`, height: `${height}px`}} 
            className="rounded-full" 
            src="https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg"/>
    );
};

export default UserPhoto;