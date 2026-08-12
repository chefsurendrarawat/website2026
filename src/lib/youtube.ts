export function getYouTubeId(url: string): string | null {
  const match = url?.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}
