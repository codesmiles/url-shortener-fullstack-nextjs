interface UrlPayload {
  url: string;
}

const ShortenAPI = async (data: UrlPayload) => {
  try {
    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result.result_url;
  } catch (error) {
    console.error("Error shortening URL:", error);
  }
};

export default ShortenAPI;
