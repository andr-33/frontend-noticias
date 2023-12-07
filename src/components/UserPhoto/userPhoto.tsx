import React from "react";

interface Props{
    width: string,
    height: string
    imageURL: string|undefined
}

const UserPhoto: React.FC<Props> =({width, height, imageURL})=>{
    return(
        <img style={{width: width, height: height}} 
            className="rounded-full" 
            src={imageURL}/>
    );
};

export default UserPhoto;