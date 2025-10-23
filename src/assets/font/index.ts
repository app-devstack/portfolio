import { Montserrat_Alternates, Noto_Sans_JP } from 'next/font/google';


// Noto Sans JP
export const notoSansJp = Noto_Sans_JP({
	variable: '--font-noto-sans-jp',
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '600', '700', '900'],
});

// Montserrat Alternates
export const montserratAlternates = Montserrat_Alternates({
	variable: '--font-montserrat-alternates',
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '600', '700', '900'],
});
