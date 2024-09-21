import HyperText from "@/components/magicui/hyper-text";
import LetterPullup from "@/components/magicui/letter-pullup";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


import URLShortenerContainer from "@/components/URLShortenerContainer";

export default function Home() {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <main className="flex min-h-screen flex-col  mx-auto max-w-xl py-12 md:my-24 overflow-hidden ">
          <div className="space-y-2 text-center relative">
            <HyperText
              className="text-3xl md:text-4xl font-bold "
              text="Url Shortener"
            />
            <LetterPullup
              words={"Shorten your url links in one click"}
              delay={0.02}
            />
          </div>

          <URLShortenerContainer />
        </main>
        </BackgroundBeamsWithCollision>
      
    </div>
  );
}
