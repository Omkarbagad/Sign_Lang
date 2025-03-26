import { useEffect, useRef, useState } from "react";
import SpeechOutput from "./SpeechOutput";

export default function CameraView() {
  const videoRef = useRef(null);
  const [recognizedText, setRecognizedText] = useState("");

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };
    startCamera();
  }, []);

  const simulateRecognition = () => {
    setRecognizedText("Hey"); // Replace with model integration
  };

  return (
    <div className="p-4">
      <video ref={videoRef} autoPlay className="w-full max-w-lg rounded-lg shadow-lg" />
      <button onClick={simulateRecognition} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Recognize Sign
      </button>
      {recognizedText && <SpeechOutput text={recognizedText} />}
    </div>
  );
}
