import React from "react";

interface Props {
    width: string,
    height: string,
    imageURL: string | undefined
}

const NewsImage: React.FC<Props> = ({width, height, imageURL }) => {
    return (
        <div style={{width: width, height: height}} className="m-auto rounded-sm overflow-hidden">
            <img className="object-cover object-center w-full h-full" src={imageURL} />
        </div>
    );
}

export default NewsImage;