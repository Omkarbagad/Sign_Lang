import { useState, useEffect, useRef } from "react";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import TextToSpeech from "./TextToSpeech";

const Recognition = () => {
  const [prediction, setPrediction] = useState("");
  const webcamRef = useRef(null);
  const modelRef = useRef(null);

  // Load the handpose model on mount
  useEffect(() => {
    const loadModel = async () => {
      toast.loading("Loading Model...");
      modelRef.current = await handpose.load();
      toast.dismiss();
      toast.success("Model Loaded Successfully!");
    };
    loadModel();
  }, []);

  // Capture hand gestures and make predictions
  const detectGesture = async () => {
    if (
      webcamRef.current &&
      webcamRef.current.video.readyState === 4 &&
      modelRef.current
    ) {
      const predictions = await modelRef.current.estimateHands(
        webcamRef.current.video
      );

      if (predictions.length > 0) {
        setPrediction("Detected: ✌️ Victory Sign");
      } else {
        setPrediction("No Hand Detected");
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(detectGesture, 1000); // Check every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col pt-0">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="flex w-full max-w-6xl gap-30">
          {/* Left: Webcam Feed */}
          <div className="flex-1 flex items-center justify-center">
            <Webcam
              ref={webcamRef}
              className="rounded-lg border-4 border-indigo-500 w-full h-full"
            />
          </div>

          {/* Right: TextToSpeech Component */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <TextToSpeech text={prediction} />
            <div className="mt-8 text-2xl">{prediction}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognition;