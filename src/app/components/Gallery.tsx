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
        <div>
            <Gallery images={imageFilenames} />
        </div>
    );
};

const Gallery = ({ images }: { images: Array<string>; }) => {
    return <div className="flex flex-row flex-wrap">
        {images.map((el: string) => <Image width={230}
  height={230}
   className='m-2' alt={'alt'} src={`/images/${el}`} key={el} />)}
    </div>
}

export default GalleryPage;