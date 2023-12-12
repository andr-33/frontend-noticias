import React from "react";
import { S3 } from '../../../utils/aws-s3.config';

interface Props {
    width: string,
    height: string,
    imageURL: string | undefined
}

const NewsImage: React.FC<Props> = ({ width, height, imageURL }) => {
    return (
        <div style={{ width: width, height: height }} className="m-auto rounded-sm overflow-hidden">
            <img className="object-cover object-center w-full h-full" src={imageURL} />
        </div>
    );
}

export default NewsImage;