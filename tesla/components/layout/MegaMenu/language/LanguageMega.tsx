"use client";

interface Country {
    name: string;
    lang: string | string[];
};

interface RenderCountryProps {
    country: Country;
};

export const languageData = {
    America: {
        NorthAmerica: [
            { name: "United States", lang: "English" },
            { name: "Canada", lang: ["English", "Français"] },
            { name: "Mexico", lang: "Spanish" },
            { name: "Puerto Rico", lang: ["Spanish", "English"] },
        ],
        SouthAmerica: [
            { name: "Chile", lang: "Spanish" },
            { name: "Colombia", lang: "Spanish" },
        ],
    },

    MiddleEast: [
        { name: "ישראל", lang: "Hebrew" },
        { name: "UAE", lang: ["Arabic", "English"] },
        { name: "Jordan", lang: "English" },
        { name: "Qatar", lang: "English" },
        { name: "Saudi Arabia", lang: ["English", "Arabic"] },
    ],

    AsiaPacific: [
        { name: "中国大陆", lang: "简体中文" },
        { name: "Hong Kong", lang: ["繁體中文", "English"] },
        { name: "Macau", lang: ["繁體中文", "English"] },
        { name: "台灣", lang: "繁體中文" },
        { name: "India", lang: "English" },
        { name: "日本", lang: "日本語" },
        { name: "Malaysia", lang: "English" },
        { name: "Singapore", lang: "English" },
        { name: "Thailand", lang: ["ภาษาไทย", "English"] },
        { name: "대한민국", lang: "한국어" },
        { name: "Australia", lang: "English" },
        { name: "New Zealand", lang: "English" },
        { name: "Philippines", lang: "English" },
    ],

    Europe: [
        [
            { name: "Belgium", lang: ["Nederlands", "Français"] },
            { name: "Česká republika", lang: "Čeština" },
            { name: "Danmark", lang: "Dansk" },
            { name: "Deutschland", lang: "Deutsch" },
            { name: "Ελλάδα", lang: "Ελληνικά" },
            { name: "España", lang: "Español" },
            { name: "France", lang: "Français" },
            { name: "Hrvatska", lang: "Hrvatski" },
            { name: "Magyarország", lang: "Magyar" },
            { name: "Ireland", lang: "English" },
        ],
        [
            { name: "Ísland", lang: "Íslenska" },
            { name: "Italia", lang: "Italiano" },
            { name: "Lietuva", lang: "Lietuvių" },
            { name: "Luxembourg", lang: ["Français", "Deutsch"] },
            { name: "Nederland", lang: "Nederlands" },
            { name: "Norge", lang: "Norsk" },
            { name: "Österreich", lang: "Deutsch" },
            { name: "Polska", lang: "Polski" },
            { name: "Portugal", lang: "Português" },
            { name: "România", lang: "Română" },
        ],
        [
            { name: "Slovensko", lang: "Slovenčina" },
            { name: "Slovenija", lang: "Slovenščina" },
            { name: "Switzerland", lang: ["Français", "Deutsch", "Italiano"] },
            { name: "Sverige", lang: "Svenska" },
            { name: "Suomi", lang: "Suomi" },
            { name: "Türkiye", lang: "Türkçe" },
            { name: "United Kingdom", lang: "English" },
            { name: "Other Europe", lang: "English" },
        ],
    ],

    Africa: [{ name: "Morocco", lang: ["Arabic", "Français"] }],
};

// Single country component
function RenderCountry({ country }: RenderCountryProps) {
    return (
        <div className="cursor-pointer group flex flex-col w-50 hover:bg-gray-100 rounded-md py-3 px-4">
            {/* Country name */}
            <p className="font-medium text-sm text-black">{country.name}</p>

            {/* Languages with hover line */}
            <div className="mt-1 flex gap-2 flex-wrap">
                {Array.isArray(country.lang) ? (
                    country.lang.map((l: string, i: number) => (
                        <p
                            key={i}
                            className="text-xs text-gray-500 relative inline-block"
                        >
                            {l}
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                        </p>
                    ))
                ) : (
                    <p className="text-xs text-gray-500 relative inline-block">
                        {country.lang}
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                    </p>
                )}
            </div>
        </div>
    );
};

// Mega menu
function LanguageMega() {
    return (
        <section className="px-20 py-10 bg-white max-h-150 overflow-y-auto">
            <div className="grid grid-cols-4 gap-x-8 gap-y-2 justify-center">
                {/* America + Middle East */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-md font-semibold mb-1 text-black uppercase tracking-wide">
                            North America
                        </h3>
                        {languageData.America.NorthAmerica.map((c, i) => (
                            <RenderCountry key={i} country={c} />
                        ))}
                    </div>

                    <div>
                        <h3 className="text-md font-semibold mb-1 text-black uppercase tracking-wide">
                            South America
                        </h3>
                        {languageData.America.SouthAmerica.map((c, i) => (
                            <RenderCountry key={i} country={c} />
                        ))}
                    </div>

                    <div>
                        <h3 className="text-md font-semibold mb-1 text-black uppercase tracking-wide">
                            Middle East
                        </h3>
                        {languageData.MiddleEast.map((c, i) => (
                            <RenderCountry key={i} country={c} />
                        ))}
                    </div>
                </div>

                {/* Asia Pacific */}
                <div className="space-y-3">
                    <h3 className="text-md font-semibold mb-1 text-black uppercase tracking-wide">
                        Asia Pacific
                    </h3>
                    {languageData.AsiaPacific.map((c, i) => (
                        <RenderCountry key={i} country={c} />
                    ))}
                </div>

                {/* Europe + Africa */}
                <div className="space-y-4">
                    <h3 className="text-md font-semibold mb-1 text-black uppercase tracking-wide">
                        Europe
                    </h3>
                    <div className="flex gap-4">
                        {languageData.Europe.map((column, colIdx) => (
                            <div key={colIdx} className="space-y-3 shrink-0">
                                {column.map((c, i) => (
                                    <RenderCountry key={i} country={c} />
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <h3 className="text-md font-semibold mb-1 text-black uppercase tracking-wide">
                            Africa
                        </h3>
                        {languageData.Africa.map((c, i) => (
                            <RenderCountry key={i} country={c} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LanguageMega;