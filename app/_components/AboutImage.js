import Image from 'next/image';

const AboutImage = ({ altText, src }) => {
  return (
    <div className='col-span-2'>
      <Image alt={altText} placeholder='blur' quality={80} src={src} />
    </div>
  );
};

export default AboutImage;
