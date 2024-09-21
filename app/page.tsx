import HyperText from "@/components/magicui/hyper-text";
import LetterPullup from "@/components/magicui/letter-pullup";



import URLShortenerContainer from "@/components/URLShortenerContainer";

export default function Home() {
  
  return (
    <div>
      
        <main className="flex  flex-col  mx-auto max-w-xl py-1 md:my-2 overflow-hidden ">
          <div className="space-y-2 text-center relative">
            <HyperText
              className="text-5xl md:text-6xl font-medium "
              text="Url Shortener"
            />
            <LetterPullup
              words={"Shorten your url links in one click"}
              delay={0.02}
            />
          </div>

          <URLShortenerContainer />
        </main>
        
      
    </div>
  );
}
