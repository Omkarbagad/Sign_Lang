import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Language options with speech synthesis voice matching
const languageOptions = [
  { code: "en", label: "English (US)", speechCode: "en-US" },
  { code: "hi", label: "Hindi", speechCode: "hi-IN" },
  { code: "es", label: "Spanish", speechCode: "es-ES" },
  { code: "fr", label: "French", speechCode: "fr-FR" },
];

const TextToSpeech = ({ text: propText }) => {
  const [text, setText] = useState(propText || "Hello, how are you?");
  const [language, setLanguage] = useState("en");
  const [voices, setVoices] = useState([]);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Ensure voices are loaded properly
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices();
  }, []);

  // Translate text using LibreTranslate API
  const translateText = async () => {
    if (!text) return alert("Please enter text to translate.");

    try {
      const response = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          source: "en",
          target: language,
          format: "text",
        }),
      });

      const data = await response.json();
      return data.translatedText || text; // Return translated text
    } catch (error) {
      console.error("Translation error:", error);
      alert("Translation failed. Using original text.");
      return text; // Fallback to original text
    }
  };

  // Find the correct voice for the selected language
  const findVoice = (langCode) => {
    return voices.find((voice) => voice.lang === langCode) || null;
  };

  // Convert translated text to speech
  const speakText = async () => {
    const targetLanguage = languageOptions.find((l) => l.code === language);
    if (!targetLanguage) return alert("Invalid language selected.");

    const translatedText = language === "en" ? text : await translateText();
    const utterance = new SpeechSynthesisUtterance(translatedText);

    // Set correct voice
    const selectedVoice = findVoice(targetLanguage.speechCode);
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.lang = targetLanguage.speechCode;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full max-w-3xl flex flex-col items-center">
      {/* Text Input */}
      <textarea
        className="w-full p-4 rounded-lg bg-gray-800 text-white mb-6"
        rows="4"
        placeholder="Enter text to speak..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Language Selector */}
      <label className="text-xl mb-4">
        Select Language:
        <select
          className="ml-4 p-2 rounded bg-indigo-600"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languageOptions.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </label>

      {/* Action Buttons */}
      <div className="mt-6 space-x-4">
        <button
          onClick={speakText}
          className="bg-green-600 hover:bg-green-800 px-6 py-3 rounded-lg"
        >
          Convert to Speech
        </button>

        <Link to="/">
          <button className="bg-indigo-600 hover:bg-indigo-800 px-6 py-3 rounded-lg">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TextToSpeech;
