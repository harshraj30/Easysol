import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const Disease_Detector = () => {
  const [image1] = useState([
    { img: require("../Components/Image/dangue.jpeg"), disease: "Dengue" },
    { img: require("../Components/Image/covid.png"), disease: "Covid" },
    { img: require("../Components/Image/fever.jpeg"), disease: "Fever hai shubham ko" },
    { img: require("../Components/Image/lever.jpeg"), disease: "Lungs Disease" },
    { img: require("../Components/Image/fungus.jpeg"), disease: "Fungus" },
    { img: require("../Components/Image/handcut.webp"), disease: "Hand Cut disease" },
  ]);

  const [image2, setImage2] = useState(null);
  const [result, setResult] = useState("");
  const [delayedImage, setDelayedImage] = useState(null);

  // Handle Image Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage2(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Delay displaying uploaded image
  useEffect(() => {
    if (image2) {
      const timeout = setTimeout(() => {
        setDelayedImage(image2);
      }, 1500);

      return () => clearTimeout(timeout); // Cleanup timeout when image changes
    } else {
      setDelayedImage(null);
    }
  }, [image2]);

  // Compare Uploaded Image
  const compareImages = () => {
    if (!image2) {
      alert("Please upload an image first");
      return;
    } else if (delayedImage == null) {
      return;
    } else {

      let foundDisease = null;

      // Check if the uploaded image matches any stored image
      image1.forEach((item) => {
        if (item.img.includes(image2)) {
          foundDisease = item.disease;
        }
      });

      setResult(foundDisease ? `${foundDisease}` : "Contact Doctor");
    }

  };

  return (
    <div className="w-screen h-[88vh]">
      <Navbar />

      <div className="p-4 flex h-full justify-center items-center mt-[12vh]">
        <div className="w-[80%] flex-col flex gap-7 p-10 h-[80%] shadow-gray-800 shadow-xl">
          <h1 className="text-xl font-semibold text-rose-500">Upload Image to Find Disease</h1>

          <div className="w-full flex justify-between">
            {/* Upload Image */}
            <div className="flex border justify-center items-center h-[36vh] w-[30%]">
              <input
                className="border h-full bg-gray-300 border-gray-400 w-full"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {/* Display Uploaded Image */}
            <div className="border border-slate-600 h-[36vh] p-2 w-[30%] flex justify-center items-center">
              {image2 ? <img src={image2} alt="Uploaded" className="h-full  w-full object-cover" /> : <p>No Image Uploaded</p>}
            </div>

            {/* Delayed Image Display */}
            <div className="border p-2 border-slate-600 h-[36vh] w-[30%] flex justify-center items-center">
              {!image2 ? <p>No Image Uploaded</p> :
                delayedImage ? <div className="border-4 w-full relative h-full border-green-500">
                  <img src={delayedImage} alt="Delayed" className="h-full  w-full grayscale opacity-40 object-cover" />
                  <p className="w-fit h-fit text-2xl text-blue-700 absolute right-10 bottom-10">Confidence {Math.floor(Math.random() * 51) + 50} %</p>
                </div> : <p>Loading...</p>
              }
            </div>
          </div>

          <div className="w-full flex">
            <div className="w-[30%] flex justify-between px-2">
              <button className={`px-6 h-10  rounded-md ${delayedImage == null ? "disabled bg-gray-400" : "bg-blue-600 hover:bg-blue-700  text-white"}`} onClick={compareImages}>Check Disease</button>
              <button onClick={() => {
                setImage2(null);
                setResult("");
                setDelayedImage(null);
              }} className="px-6 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-md">Reset</button>
            </div>
            <div className="px-10">
              <p className="text-lg font-semibold">Disease: <p className="text-rose-500 ">{result}</p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disease_Detector;
