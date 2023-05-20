import { Card } from "flowbite-react";
import React from "react";

const ServiceSection = () => {
  return (
    <section className="flex flex-col my-8">
      <img
        className="mx-auto"
        src="//yokaz.myshopify.com/cdn/shop/files/saperator.png"
        alt=""
      />
      <h4 className="font-bold text-3xl mx-auto mt-2 border-b-2 inline-block pb-4 mb-14">
        Our Services
      </h4>
      <div className="flex justify-around mt-16">
        <div className="max-w-sm">
          <Card className="rounded-t-3xl px-14">
            <div className="flex flex-col items-center pb-10 relative">
              <img
                className="mb-3 h-36 w-36 rounded-full bg-base-200 absolute bottom-24 animate-pulse"
                src="/freeShipping.png"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-20">
                Free World Shipping
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Order Over $100
              </span>
            </div>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="rounded-t-3xl px-14">
            <div className="flex flex-col items-center pb-10 relative">
              <img
                className="mb-3 h-36 w-36 rounded-full bg-base-200 absolute bottom-24 animate-pulse"
                src="/moneyBack.png"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-20">
                24hr Money Back
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Order Over $100
              </span>
            </div>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="rounded-t-3xl px-14">
            <div className="flex flex-col items-center pb-10 relative">
              <img
                className="mb-3 h-36 w-36 rounded-full bg-base-200 absolute bottom-24 animate-pulse"
                src="/freeGift.png"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-20">
                Free Gift Voucher
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Order Over $100
              </span>
            </div>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="rounded-t-3xl px-14">
            <div className="flex flex-col items-center pb-10 relative">
              <img
                className="mb-3 h-36 w-36 rounded-full bg-base-200 absolute bottom-24 animate-pulse"
                src="/onlineSupport.png"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-20">
                Online Support
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Order Over $100
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
