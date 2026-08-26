import { Capacitor } from "@capacitor/core";

const TIP_ALBUM_NAME = "Sentence Lab";

let albumIdPromise: Promise<string | undefined> | null = null;

async function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
        return;
      }
      reject(new Error("Failed to read image"));
    };
    reader.onerror = () => reject(reader.error ?? new Error("Failed to read image"));
    reader.readAsDataURL(blob);
  });
}

async function ensureTipAlbum(): Promise<string | undefined> {
  const { Media } = await import("@capacitor-community/media");
  const platform = Capacitor.getPlatform();

  if (platform === "ios") {
    return undefined;
  }

  if (platform !== "android") {
    return undefined;
  }

  const { albums } = await Media.getAlbums();
  const { path: albumsPath } = await Media.getAlbumsPath();
  let album = albums.find(
    (item) => item.name === TIP_ALBUM_NAME && item.identifier.startsWith(albumsPath),
  );

  if (!album) {
    await Media.createAlbum({ name: TIP_ALBUM_NAME });
    const refreshed = await Media.getAlbums();
    album = refreshed.albums.find(
      (item) => item.name === TIP_ALBUM_NAME && item.identifier.startsWith(albumsPath),
    );
  }

  if (!album) {
    throw new Error("Failed to prepare album");
  }

  return album.identifier;
}

function getAlbumId(): Promise<string | undefined> {
  if (!albumIdPromise) {
    albumIdPromise = ensureTipAlbum().catch((error) => {
      albumIdPromise = null;
      throw error;
    });
  }
  return albumIdPromise;
}

export async function saveImageFromUrl(url: string, filename: string): Promise<void> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load image: ${response.status}`);
  }
  const blob = await response.blob();

  if (Capacitor.isNativePlatform()) {
    const { Media } = await import("@capacitor-community/media");
    const dataUrl = await blobToDataUrl(blob);
    const albumIdentifier = await getAlbumId();
    const baseName = filename.replace(/\.[^.]+$/, "").replace(/[^\w.-]+/g, "_") || "wechat-tip";

    await Media.savePhoto({
      path: dataUrl,
      ...(albumIdentifier ? { albumIdentifier } : {}),
      ...(Capacitor.getPlatform() === "android" ? { fileName: baseName } : {}),
    });
    return;
  }

  const objectUrl = URL.createObjectURL(blob);
  try {
    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = filename;
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}
