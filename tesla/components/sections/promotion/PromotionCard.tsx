import Image from "next/image";

type PromoCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageWidthClass?: string;
  contentPadClass?: string;
};

function PromoCard({
  title,
  description,
  imageSrc,
  imageAlt,
  titleClassName = "",
  descriptionClassName = "",
  imageWidthClass = "md:w-44 lg:w-52",
  contentPadClass = "md:pr-44 lg:pr-52",
}: PromoCardProps) {
  return (
    <article className="relative w-full bg-gray-100 rounded-lg overflow-hidden md:h-60">
      <div className="flex flex-col md:block h-full">
        {/* Content */}
        <div
          className={`flex flex-col justify-center gap-4 p-5 sm:p-6 md:absolute md:inset-y-0 md:left-0 md:z-10 md:pl-8 lg:pl-10 ${contentPadClass} md:py-6`}
        >
          <div className="space-y-2 min-w-0">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${titleClassName}`}>{title}</h2>
            <p
              className={`text-base sm:text-lg font-normal leading-snug ${descriptionClassName}`}
            >
              {description}
            </p>
          </div>

          <button className="bg-gray-50 w-full sm:w-72 lg:w-80 h-12 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200 shrink-0">
            Learn More
          </button>
        </div>

        {/* Image — flush to card right edge on md+ */}
        <div
          className={`relative h-44 sm:h-52 md:absolute md:right-0 md:top-0 md:bottom-0 md:h-full ${imageWidthClass} shrink-0`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 208px"
          />
        </div>
      </div>
    </article>
  );
}

function PromotionCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
      <PromoCard
        title="Current Offers"
        description="Explore limited-time offers on Tesla vehicles."
        imageSrc="/tesla-contents/images/Homepage-Grid-Current-Offers.jpg"
        imageAlt="Current Offers"
      />

      <PromoCard
        title="American Heroes"
        description="$500 off for military, first responders, healthcare, teachers and students."
        imageSrc="/tesla-contents/images/Homepage-Grid-American-Heroes-v2.jpg"
        imageAlt="American Heroes"
        titleClassName="lg:whitespace-nowrap"
        imageWidthClass="md:w-52 lg:w-60"
        contentPadClass="md:pr-52 lg:pr-60"
      />
    </section>
  );
}

export default PromotionCard;
