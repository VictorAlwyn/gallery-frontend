import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import GalleryProvider from "../context/galleryContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GalleryProvider>
        <Component {...pageProps} />
      </GalleryProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
