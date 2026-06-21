export const FRAME_COUNT = 155;

const BATCH_SIZE = 10;

function loadImage(index: number): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = `/frames/img-${index + 1}.png`;
  });
}

export async function loadFrames(
  count: number,
  onFirstFrame: (img: HTMLImageElement) => void,
  onArrayReady?: (images: Array<HTMLImageElement | null>) => void,
): Promise<Array<HTMLImageElement | null>> {
  const images: Array<HTMLImageElement | null> = new Array(count).fill(null);

  const first = await loadImage(0);
  images[0] = first;
  if (first) {
    onFirstFrame(first);
    onArrayReady?.(images);
  }

  for (let i = 1; i < count; i += BATCH_SIZE) {
    const batch = Array.from(
      { length: Math.min(BATCH_SIZE, count - i) },
      (_, k) => i + k,
    );
    const results = await Promise.all(batch.map(loadImage));
    results.forEach((img, k) => {
      images[i + k] = img;
    });
  }

  return images;
}
