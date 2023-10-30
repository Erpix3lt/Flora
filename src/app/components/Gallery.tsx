import { promises as fs } from 'fs'
import path from 'path'
import React from 'react';
import Image from 'next/image'


// using process.cwd() to get the path
// fs.readdir to get all files in directory
const GalleryPage = async () => {
    const imageDirectory = path.join(process.cwd(), '/public/images');
    const imageFilenames = await fs.readdir(imageDirectory)
    console.log(imageFilenames)

    return (
        <div className="">
            <div className="">
                <Gallery images={imageFilenames} />
            </div>
        </div>
    );
};

const Gallery = ({ images }: { images: Array<string>; }) => {
    return <div className="flex flex-row flex-wrap space-x-5 space-y-5">
        {images.map((el: string) => <Image width={150} height={150} alt={'alt'} src={`/images/${el}`} key={el} />)}
    </div>
}

const Title = ({ Name, Title }: { Name: string, Title: string }) => {
    return (
        <h1 className="">
            {Name} {Title}
        </h1>
    )
}

export default GalleryPage;