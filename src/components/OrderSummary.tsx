import illustrationHero from "../assets/images/illustration-hero.svg";
import musicIcon from "../assets/images/icon-music.svg";

const OrderSummary = ({}) => {
  return (
    <div className="mx-3 my-5 flex max-w-[440px] flex-col items-center overflow-hidden rounded-xl  bg-secondary-very-pale-blue">
      <div className="w-full">
        <img src={illustrationHero} alt="" />
      </div>
      <div className="flex max-w-[400px] flex-col items-center justify-center gap-7 px-5 py-10">
        <h2 className="text-2xl font-bolder leading-[0] text-secondary-dark-blue">
          Order Summary
        </h2>
        <p className="text-center text-secondary-desaturated-blue">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex w-full flex-row  items-center justify-between rounded-lg bg-secondary-desaturated-blue/[0.05]  p-5 ">
          <div className="flex flex-row space-x-6">
            <img src={musicIcon} alt="music icon" />
            <div>
              <h3 className="font-bolder text-secondary-dark-blue ">
                Annual Plan
              </h3>
              <p className="text-secondary-desaturated-blue">$59.99/year</p>
            </div>
          </div>
          <a
            href="#"
            className="text-[14px] font-bolder text-primary-bright-blue underline hover:text-primary-bright-blue/60 hover:no-underline"
          >
            Change
          </a>
        </div>
        <button className="w-full rounded-xl bg-primary-bright-blue px-2 py-3.5 font-bolder text-secondary-very-pale-blue shadow-2xl shadow-primary-bright-blue/30 hover:bg-primary-bright-blue/60">
          Proceed to Payment
        </button>
        <button className="text-[14px] font-bolder text-secondary-desaturated-blue hover:text-secondary-dark-blue">
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
