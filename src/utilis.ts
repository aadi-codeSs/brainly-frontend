function extractYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);

    // youtu.be/<id>
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }

    // youtube.com/watch?v=<id>
    if (parsed.searchParams.has("v")) {
      return parsed.searchParams.get("v");
    }

    // youtube.com/embed/<id> or /shorts/<id>
    const match = parsed.pathname.match(/\/(embed|shorts)\/([^/?]+)/);
    if (match) {
      return match[2];
    }

    return null;
  } catch {
    return null;
  }
}



export {extractYouTubeId}