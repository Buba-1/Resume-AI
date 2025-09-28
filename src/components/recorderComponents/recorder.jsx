import React, { useState, useEffect, useRef } from "react";
import "./recorder.css";

const AudioRecorder = ({ onStateChange }) => {
  const [recorderState, setRecorderState] = useState("ready");
  const [timeLeft, setTimeLeft] = useState(599);
  const [isRecordingPaused, setIsRecordingPaused] = useState(false);
  const [isPreviewPaused, setIsPreviewPaused] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [error, setError] = useState(null);

  const mediaRecorderRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const chunksRef = useRef([]);
  const audioRef = useRef(null);
  const isCancelRef = useRef(false);

  const updateRecorderState = (newState) => {
    setRecorderState(newState);
    if (onStateChange) onStateChange(newState);
  };

  useEffect(() => {
    let timer = null;
    if (recorderState === "recording" && !isRecordingPaused && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [recorderState, isRecordingPaused, timeLeft]);

  const resetRecorder = () => {
    setRecorderState("ready");
    setAudioUrl(null);
    setTimeLeft(599);
    setIsRecordingPaused(false);
    setIsPreviewPaused(false);
    chunksRef.current = [];
    isCancelRef.current = false;
  };

  // ------------------ Button Handlers ------------------

  // 1. Start Recording
  const handleStartRecording = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      chunksRef.current = [];

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        stopStream();

        if (isCancelRef.current) {
          resetRecorder();
          return;
        }

        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);

        updateRecorderState("preview");
      };

      mediaRecorder.start();
      setIsRecordingPaused(false);
      updateRecorderState("recording");
      setTimeLeft(599);
    } catch (err) {
      setError("Microphone access denied or unavailable.");
    }
  };

  // 2. Cancel Recording / Preview
  const handleCancel = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      isCancelRef.current = true;
      mediaRecorderRef.current.stop();
    } else {
      resetRecorder();
    }
    updateRecorderState("cancel");
  };

  // 3. Pause / Resume Recording
  const handlePauseRecording = () => {
    if (!mediaRecorderRef.current) return;

    if (mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.pause();
      setIsRecordingPaused(true);
      updateRecorderState("paused");
    } else if (mediaRecorderRef.current.state === "paused") {
      mediaRecorderRef.current.resume();
      setIsRecordingPaused(false);
      updateRecorderState("recording");
    }
  };

  // 4. Finish Recording
  const handleFinishRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      isCancelRef.current = false;
      mediaRecorderRef.current.stop();
    }
  };

  // 5. Send Recording (from preview)
  const handleSendRecording = () => {
    updateRecorderState("sent");
    
    const timer = setTimeout(() => {
      updateRecorderState("transcribed"); // fixed typo
      clearTimeout(timer); // optional, but okay for clarity
    }, 3000);

  };

  // 6. Pause / Resume Preview (audio playback)
  const handlePausePreview = () => {
    if (!audioRef.current) return;

    if (!isPreviewPaused) {
      audioRef.current.pause();
      setIsPreviewPaused(true);
      updateRecorderState("previewPaused");
    } else {
      audioRef.current.play();
      setIsPreviewPaused(false);
      updateRecorderState("preview");
    }
  };

  const stopStream = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // ------------------ Render ------------------
  return (
    <div className="recorder-container">
      {recorderState === "ready" && (
        <div>
          <button className="btn" onClick={handleStartRecording}>
            Start Recording
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}

      {(recorderState === "recording" || recorderState === "paused") && (
        <div>
          <div className="timer">{formatTime(timeLeft)}</div>
          <button className="btn-cancel btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn-secondary btn" onClick={handlePauseRecording}>
            {isRecordingPaused ? "Resume" : "Pause"}
          </button>
          <button className="btn" onClick={handleFinishRecording}>
            Finish Recording
          </button>
        </div>
      )}

      {recorderState === "preview" && audioUrl && (
        <div>
          <h3>Preview Recording</h3>
          <audio controls ref={audioRef} src={audioUrl}></audio>
          <div className="preview-buttons">
            <button className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn-send" onClick={handleSendRecording}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
