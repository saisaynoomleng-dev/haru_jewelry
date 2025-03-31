import localFont from 'next/font/local';

export const garamond = localFont({
    src: [
        {
            path: '../fonts/Cormorant_Garamond/static/CormorantGaramond-Light.ttf',
            style: 'normal',
            weight: '300'
        },
        {
            path: '../fonts/Cormorant_Garamond/static/CormorantGaramond-Regular.ttf',
            style: 'normal',
            weight: '400'
        },
        {
            path: '../fonts/Cormorant_Garamond/static/CormorantGaramond-SemiBold.ttf',
            style: 'normal',
            weight: '500'
        },
        {
            path: '../fonts/Cormorant_Garamond/static/CormorantGaramond-Bold.ttf',
            style: 'normal',
            weight: '600'
        },
    ],
    variable: '--font-garamond'
});

export const libre = localFont({
    src: [
        {
            path: '../fonts/Proza_Libre/ProzaLibre-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/Proza_Libre/ProzaLibre-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../fonts/Proza_Libre/ProzaLibre-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../fonts/Proza_Libre/ProzaLibre-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../fonts/Proza_Libre/ProzaLibre-ExtraBold.ttf',
            weight: '800',
            style: 'normal'
        },
    ],
    variable: '--font-libre'
});

export const tangerine = localFont({
    src: [
        {
            path: '../fonts/Tangerine/Tangerine-Regular.ttf',
            style: 'normal',
            weight: '400'
        },
        {
            path: '../fonts/Tangerine/Tangerine-Bold.ttf',
            style: 'normal',
            weight: '700'
        }
    ],
    variable: '--font-tangerine'
})