document.addEventListener("DOMContentLoaded", function () {
  // Mocked data to simulate transcripts and recordings
  const mockTranscripts = [
    { content: "Transcript of first recording", recordingUrl: "audio1.mp3" },
    { content: "Transcript of second recording", recordingUrl: "audio2.mp3" },
    {
      content: "Transcript of third recording",
      recordingUrl: "audio3.mp3",
      recording: false,
    },
  ];

  // Function to simulate fetching transcripts from the backend
  function fetchTranscripts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTranscripts);
      }, 500); // Simulate a delay like a network request
    });
  }

  // Function to display transcripts in the UI
  function displayTranscripts(transcripts) {
    const textFilesList = document.getElementById("textFilesList");
    textFilesList.innerHTML = ""; // Clear existing content

    transcripts.forEach((file) => {
      const textCard = document.createElement("div");
      textCard.className = "text-card";

      // Create the content and play button if there's a recording
      const contentHtml = `<h3>${file.content}</h3>`;
      textCard.innerHTML = contentHtml;

      if (file.recordingUrl) {
        const playButton = document.createElement("button");
        playButton.className = "play-button";
        playButton.innerText = "Play Recording";

        // Add event listener to play the audio
        playButton.addEventListener("click", () => {
          const audio = new Audio(file.recordingUrl);
          audio.play();
        });

        textCard.appendChild(playButton);
      }

      textFilesList.appendChild(textCard);
    });
  }

  // Fetch and display transcripts when the page loads
  fetchTranscripts().then(displayTranscripts);
});
