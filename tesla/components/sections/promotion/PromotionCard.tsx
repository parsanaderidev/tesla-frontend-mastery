import Image from 'next/image';
import React from 'react'

function PromotionCard() {
    return (
        <>
            <section className="grid grid-cols-2 gap-6">
                {/* Current Offers Card */}
                <div className="flex w-full h-60 bg-gray-100 items-center justify-between gap-10 rounded-lg pl-12 overflow-hidden">
                    {/* Content */}
                    <div className="flex flex-col gap-5">
                        <div className="grid gap-2">
                            {/* Title */}
                            <div className="flex">
                                <h2 className="text-4xl font-semibold">Current Offers</h2>
                            </div>

                            {/* Text */}
                            <div className="flex">
                                <p className="text-lg font-normal">Explore limited-time offers on Tesla vehicles.</p>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="flex items-center">
                            <button className="bg-gray-50 w-80 h-13 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200">Learn More</button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="rounded-r-lg">
                        <Image
                            src={'/tesla-contents/images/Homepage-Grid-Current-Offers.jpg'}
                            alt='Current Offers'
                            width={180}
                            height={180}
                            className='object-cover h-60 w-60'
                        />
                    </div>
                </div>

                {/* American Heroes Card */}
                <div className="flex w-full h-60 bg-gray-100 items-center justify-between gap-10 rounded-lg pl-12 overflow-hidden">
                    {/* Content */}
                    <div className="flex flex-col gap-5">
                        <div className="grid gap-2 w-full">
                            {/* Title */}
                            <div className="flex">
                                <h2 className="text-4xl font-semibold">American Heroes</h2>
                            </div>

                            {/* Text */}
                            <div className="flex">
                                <p className="text-lg font-normal">$500 off for military, first responders, healthcare, teachers and students.</p>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="flex items-center">
                            <button className="bg-gray-50 w-80 h-13 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200">Learn More</button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="rounded-r-lg overflow-hidden">
                        <Image
                            src={'/tesla-contents/images/Homepage-Grid-American-Heroes-v2.jpg'}
                            alt='Current Offers'
                            width={180}
                            height={180}
                            className='object-cover h-65 w-90'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PromotionCard;