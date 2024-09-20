import { Boxes } from "@/components/ui/BackgroundBoxes";
import URLShortenerContainer from "@/components/URLShortenerContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  mx-auto max-w-xl py-12 md:my-24 overflow-hidden ">
      <Boxes/>
      <div className="space-y-2 text-center relative">
      
        <h1 className="text-3xl md:text-4xl font-bold ">URL Shortener</h1>
        <p className="md:text-lg relative">Shorten your URLs and share them easily</p>
        
      </div>
      <URLShortenerContainer/>
    
    </main>
  );
}
