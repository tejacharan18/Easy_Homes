import { useState } from "react";
import Navbar from "../Navbar/Navbar";

export default function Post() {
    const [image, setImage] = useState("");

    function uploadImage() {
        try {
            fetch("http://localhost:5000/new/hee", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    base64: image,
                }),
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error));
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    function convertToBase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            const base64Image = reader.result;
            setImage(base64Image);
        };
        reader.onerror = (error) => {
            console.log("Error:", error);
        };
    }

    return (
        <>
            <Navbar />
            <div className="auth-wrapper">
                <div className="auth-inner" style={{ width: "auto" }}>
                    Upload an image
                    <input accept="image/" type="file" onChange={convertToBase64}></input>
                    <button onClick={uploadImage}>Upload</button>
                </div>
            </div>
            {image === "" || image == null ? null : <img width={100} height={100} src={image} alt="Uploaded" />}
        </>
    );
}
