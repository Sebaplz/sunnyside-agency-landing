import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <main>
      <section className="h-[32rem] bg-[url('/images/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/desktop/image-header.jpg')] lg:h-[36rem] xl:h-[38rem] 2xl:h-[50rem]">
        <Nav />
        <div className="py-10 2xl:py-28">
          <h1 className="font-fraunces text-center text-5xl font-bold uppercase tracking-widest text-white 2xl:text-8xl">
            We are creatives
          </h1>
          <div className="flex justify-center pt-16 lg:pt-24">
            <img
              src="images/icon-arrow-down.svg"
              alt="Flecha hacia abajo"
              className="2xl:h-40"
            />
          </div>
        </div>
      </section>
      <div className="lg:flex lg:flex-row-reverse 2xl:h-3/4">
        <div className="lg:w-1/2">
          <picture>
            <source
              media="(min-width: 400px)"
              srcSet="images/desktop/image-transform.jpg"
            />
            <img
              src="images/mobile/image-transform.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full"
            />
          </picture>
        </div>
        <div className="py-10 px-5 text-center md:px-40 lg:w-1/2 lg:p-20 lg:text-left xl:p-32 xl:pt-40">
          <p className="font-fraunces pb-5 text-4xl font-bold text-[#23303E] xl:text-5xl 2xl:text-8xl">
            Transform your brand
          </p>
          <p className="pb-5 text-lg text-[#5A636C] xl:py-5 2xl:text-4xl">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a className="font-fraunces cursor-pointer border-b-4 border-b-[#FAD400] text-xl font-bold uppercase tracking-wider 2xl:text-4xl">
            Learn more
          </a>
        </div>
      </div>

      <div className="lg:flex">
        <div className="lg:w-1/2">
          <picture>
            <source
              media="(min-width: 900px)"
              srcSet="images/desktop/image-stand-out.jpg"
            />
            <img
              src="images/mobile/image-stand-out.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full"
            />
          </picture>
        </div>
        <div className="py-10 px-5 text-center md:px-40 lg:w-1/2 lg:p-20 lg:text-left xl:p-32 xl:pt-40">
          <p className="font-fraunces pb-5 text-4xl font-bold text-[#23303E] xl:text-5xl 2xl:text-8xl">
            Stand out to the right audience
          </p>
          <p className="pb-5 text-lg text-[#5A636C] xl:py-5 2xl:text-4xl">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a className="font-fraunces cursor-pointer border-b-4 border-b-[#FE7867] text-xl font-bold uppercase tracking-wider 2xl:text-4xl">
            Learn more
          </a>
        </div>
      </div>

      <div className="lg:flex">
        <div className="h-[38rem] bg-[url('/images/mobile/image-graphic-design.jpg')] bg-cover px-5  text-center md:bg-[url('/images/desktop/image-graphic-design.jpg')] md:px-40 lg:w-1/2 lg:bg-center lg:px-20 lg:pt-32 xl:p-36 2xl:h-[50rem] 2xl:px-48">
          <p className="font-fraunces pt-96 pb-5 text-4xl font-bold text-[#25564B] lg:pt-60 2xl:pt-96 2xl:text-6xl">
            Graphic design
          </p>
          <p className="text-lg text-[#25564B] 2xl:text-2xl">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="h-[38rem] bg-[url('/images/mobile/image-photography.jpg')] bg-cover px-5  text-center md:bg-[url('/images/desktop/image-photography.jpg')] md:px-40 lg:w-1/2 lg:bg-center lg:px-20 lg:pt-32 xl:p-36 2xl:h-[50rem] 2xl:px-48">
          <p className="font-fraunces pt-96 pb-5 text-4xl font-bold text-[#19536B] lg:pt-60 2xl:pt-96 2xl:text-6xl">
            Photography
          </p>
          <p className="text-lg text-[#19536B] 2xl:text-2xl">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>

      <p className="font-fraunces pt-10 text-center text-xl uppercase tracking-widest text-[#818B98] lg:pt-24 2xl:text-3xl">
        Client testimonials
      </p>

      <div className="md:px-40 lg:flex lg:px-20 lg:pb-10">
        <div className="p-5 text-center">
          <div className="flex justify-center py-5 lg:pb-16">
            <img
              src="images/image-emily.jpg"
              alt=""
              aria-hidden="true"
              className="w-20 rounded-full 2xl:w-40"
            />
          </div>
          <p className="text-[#5A636C] lg:pb-10 lg:text-lg 2xl:text-2xl">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="font-fraunces pt-5 pb-3 text-2xl font-black 2xl:text-3xl">
            Emily R.
          </p>
          <p className="text-[#A7ABAE] 2xl:text-xl">Marketing Director</p>
        </div>
        <div className="p-5 text-center">
          <div className="flex justify-center py-5 lg:pb-16">
            <img
              src="images/image-thomas.jpg"
              alt=""
              aria-hidden="true"
              className="w-20 rounded-full 2xl:w-40"
            />
          </div>
          <p className="text-[#5A636C] lg:pb-10 lg:text-lg 2xl:text-2xl">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <p className="font-fraunces pt-5 pb-3 text-2xl font-black 2xl:text-3xl">
            Thomas S.
          </p>
          <p className="text-[#A7ABAE] 2xl:text-xl">Chief Operating Officer</p>
        </div>
        <div className="p-5 text-center">
          <div className="flex justify-center py-5 lg:pb-16">
            <img
              src="images/image-jennie.jpg"
              alt=""
              aria-hidden="true"
              className="w-20 rounded-full 2xl:w-40"
            />
          </div>
          <p className="text-[#5A636C] lg:pb-10 lg:text-lg 2xl:text-2xl">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <p className="font-fraunces pt-5 pb-3 text-2xl font-black 2xl:text-3xl">
            Jennie F.
          </p>
          <p className="pb-10 text-[#A7ABAE] 2xl:text-xl">Business Owner</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="images/desktop/image-gallery-milkbottles.jpg"
          />
          <img
            src="images/mobile/image-gallery-milkbottles.jpg"
            alt=""
            aria-hidden="true"
            className="w-full"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="images/desktop/image-gallery-orange.jpg"
          />
          <img
            src="images/mobile/image-gallery-orange.jpg"
            alt=""
            aria-hidden="true"
            className="w-full"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="images/desktop/image-gallery-cone.jpg"
          />
          <img
            src="images/mobile/image-gallery-cone.jpg"
            alt=""
            aria-hidden="true"
            className="w-full"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="images/desktop/image-gallery-sugarcubes.jpg"
          />
          <img
            src="images/mobile/image-gallery-sugar-cubes.jpg"
            alt=""
            aria-hidden="true"
            className="w-full"
          />
        </picture>
      </div>
      <div
        id="contacts"
        className="bg-[#67cfba] py-10 px-5 md:px-52 lg:px-80 xl:px-[34rem]"
      >
        <p className="pb-5 text-center text-4xl font-black text-[#34685d] 2xl:text-5xl">
          sunnyside
        </p>
        <ul className="flex justify-between px-5 pt-10">
          <li>
            <a className="cursor-pointer font-bold text-[#34685d] hover:text-white 2xl:text-xl">
              About
            </a>
          </li>
          <li>
            <a className="cursor-pointer font-bold text-[#34685d] hover:text-white 2xl:text-xl">
              Services
            </a>
          </li>
          <li>
            <a className="cursor-pointer font-bold text-[#34685d] hover:text-white 2xl:text-xl">
              Projects
            </a>
          </li>
        </ul>
        <div className="flex justify-between px-20 py-14">
          <img
            src="images/icon-facebook.svg"
            alt=""
            aria-hidden="true"
            className="cursor-pointer 2xl:h-6"
          />
          <img
            src="images/icon-instagram.svg"
            alt=""
            aria-hidden="true"
            className="cursor-pointer 2xl:h-6"
          />
          <img
            src="images/icon-twitter.svg"
            alt=""
            aria-hidden="true"
            className="cursor-pointer 2xl:h-6"
          />
          <img
            src="images/icon-pinterest.svg"
            alt=""
            aria-hidden="true"
            className="cursor-pointer 2xl:h-6"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
