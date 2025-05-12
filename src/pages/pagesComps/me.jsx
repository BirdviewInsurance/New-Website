import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

const Home = () => {
  const [tooltipMessage, setTooltipMessage] = useState("Click to copy this QR code!");

  const copyImage = async () => {
    try {
      const imageUrl = '/assets/logo/qrCode.png';  
      const image = new window.Image();  
      image.crossOrigin = 'anonymous';  
      image.src = imageUrl;

      image.onload = async () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;

        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);

        canvas.toBlob(async (blob) => {
          if (blob) {
            const item = new ClipboardItem({ [blob.type]: blob });
            await navigator.clipboard.write([item]);
            setTooltipMessage("Copied!"); // Update tooltip message on success
          } else {
            setTooltipMessage("Failed to copy."); // Update message on failure
          }
        }, 'image/png');  
      };

      image.onerror = () => {
        setTooltipMessage("Failed to load the image.");
      };
    } catch (error) {
      console.error('Error copying image', error);
      setTooltipMessage("Error copying image."); // Set error message
    }
  };

  return (
    <>
      <Tooltip title={tooltipMessage} arrow>
        <Image
          onClick={copyImage}
          width={800}
          height={100}
          src="/assets/logo/qrCode.png"
          alt="QR Code"
          className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-cover cursor-pointer"
          priority  
        />
      </Tooltip>
    </>
  );
};

export default Home;
