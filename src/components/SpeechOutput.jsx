import { useEffect } from "react";

export default function SpeechOutput({ text }) {
  useEffect(() => {
    if (text) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  }, [text]);

  return (
    <p className="mt-4 text-xl">Recognized: {text}</p>
  );
}
