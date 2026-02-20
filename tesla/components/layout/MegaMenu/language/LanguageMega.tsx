export const languageData = {
    America: {
        NorthAmerica: [
            { name: 'United States', lang: 'English' },
            { name: 'Canada', lang: ['English', 'Français'] },
            { name: 'Mexico', lang: 'Spanish' },
            { name: 'Puerto Rico', lang: ['Spanish', 'English'] },
        ],
        SouthAmerica: [
            { name: 'Chile', lang: 'Spanish' },
            { name: 'Colombia', lang: 'Spanish' },
        ],
    },

    MiddleEast: [
        { name: 'ישראל', lang: 'Hebrew' },
        { name: 'UAE', lang: ['Arabic', 'English'] },
        { name: 'Jordan', lang: 'English' },
        { name: 'Qatar', lang: 'English' },
        { name: 'Saudi Arabia', lang: ['English', 'Arabic'] },
    ],

    AsiaPacific: [
        { name: '中国大陆', lang: '简体中文' },
        { name: 'Hong Kong', lang: ['繁體中文', 'English'] },
        { name: 'Macau', lang: '繁體中文' },
        { name: 'Macau', lang: 'English' },
        { name: '台灣', lang: '繁體中文' },
        { name: 'India', lang: 'English' },
        { name: '日本', lang: '日本語' },
        { name: 'Malaysia', lang: 'English' },
        { name: 'Singapore', lang: 'English' },
        { name: 'Thailand', lang: 'ภาษาไทย' },
        { name: 'Thailand', lang: 'English' },
        { name: '대한민국', lang: '한국어' },
        { name: 'Australia', lang: 'English' },
        { name: 'New Zealand', lang: 'English' },
        { name: 'Philippines', lang: 'English' },
    ],

    Europe: [
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
        { name: "Slovensko", lang: "Slovenčina" },
        { name: "Slovenija", lang: "Slovenščina" },
        { name: "Switzerland", lang: ["Français", "Deutsch", "Italiano"] },
        { name: "Sverige", lang: "Svenska" },
        { name: "Suomi", lang: "Suomi" },
        { name: "Türkiye", lang: "Türkçe" },
        { name: "United Kingdom", lang: "English" },
        { name: "Other Europe", lang: "English" },
    ],

    Africa: [
        { name: 'Morocco', lang: 'Arabic, Français' },
    ],
}

function LanguageMega() {
    return (
        <>
            {/* Language */}
            <section className="flex justify-items-center">
                {/* North and South America, Middle-East */}
                <div className="grid">
                    <div className="">
                        <h3 className="text-lg font-bold">South America</h3>
                    </div>
                    <div className="">
                        <h3 className="text-lg font-bold">North America</h3>
                    </div>
                    <div className="">
                        <h3 className="text-lg font-bold">Middle-East</h3>
                    </div>
                </div>

                {/* Asia Pacific */}
                <div className="grid">
                    <h3 className="text-lg font-bold">Asia Pacific</h3>
                </div>

                {/* Europe, Africa */}
                <div className="grid">
                    <div className="">
                        <h3 className="text-lg font-bold">Europe</h3>
                    </div>
                    <div className="">
                        <h3 className="text-lg font-bold">Africa</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LanguageMega