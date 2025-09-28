const sendToDeepgram = async (uri) => {
  try {
    const apiKey = import.meta.env.DEEPGRAM_API;
    const response = await fetch(uri);
    if (!response.ok) throw new Error("Failed to fetch audio");
    const blob = await response.blob();

    const deepgramResponse = await fetch(
      "https://api.deepgram.com/v1/listen?model=nova-3",
      {
        method: "POST",
        headers: {
          Authorization: 'Token f994eed2afebf950f1de8afba36cab6dde68d5e6',
          "Content-Type": "audio/m4a",
        },
        body: blob,
      }
    );

    if (!deepgramResponse.ok) throw new Error("Deepgram request failed");

    const result = await deepgramResponse.json();
    const receivedtranscript = result.results.channels[0].alternatives[0].transcript;

    console.log("Transcription is:", receivedtranscript);
    return receivedtranscript; // returning the transcript so it can be used elsewhere
  } catch (error) {
    console.error("Error in sendToDeepgram:", error);
    return "";
  }
};



export { sendToDeepgram };