// import { BREAKPOINT } from '@angular/flex-layout';

// const MOBILE = '(max-width: 599x)';
// const S_TABLET = '(min-width: 600px) and (max-width: 719px)';
// const L_TABLET = '(min-width: 720px) and (max-width: 1023px)';
// const L_TABLET_LANDSCAPE = '(min-width: 1024px) and (max-width: 1439px)';
// const WEB = '(min-width: 1440px)';

// const SCREEN_TYPES = {
//   MOBILE: `${MOBILE}`,
//   S_TABLET: `${S_TABLET}`,
//   L_TABLET: `${L_TABLET}`,
//   L_TABLET_LANDSCAPE: `${L_TABLET_LANDSCAPE}`,
//   WEB: `${WEB}`,
// };

export const CUSTOM_BREAKPOINTS = [
  // { alias: 'smobile', mediaQuery: '(max-width: 360px)' },
  // { alias: 'mobile', mediaQuery: SCREEN_TYPES.MOBILE },
  // { alias: 's.tablet', mediaQuery: SCREEN_TYPES.S_TABLET },
  // { alias: 'l.tablet', mediaQuery: SCREEN_TYPES.L_TABLET },
  // { alias: 'l.tablet.landscape', mediaQuery: SCREEN_TYPES.L_TABLET_LANDSCAPE },
  // { alias: 'web', mediaQuery: SCREEN_TYPES.WEB }

{
    alias: 'x-xs',
    mediaQuery: 'screen and (min-width: 0px) and (max-width: 100px)',
},
{
    alias: 'x-sm',
    mediaQuery: 'screen and (min-width: 101px) and (max-width: 200px)',
},
{
    alias: 'x-md',
    mediaQuery: 'screen and (min-width: 201px) and (max-width: 300px)',
},
{
    alias: 'x-lg',
    mediaQuery: 'screen and (min-width: 301px) and (max-width: 400px)',
},
{
    alias: 'x-xl',
    mediaQuery: 'screen and (min-width: 401px) and (max-width: 500px)',
},
{
    alias: 'xs',
    mediaQuery: '(max-width: 650px)',
},
{
    alias: 'sm',
    mediaQuery: 'screen and (min-width: 651px) and (max-width: 959px)',
},
{
    alias: 'md',
    mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279px)',
},
{
    alias: 'lg',
    mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919px)',
},
{
    alias: 'xl',
    mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999px)',
},
{
    alias: 'lt-sm',
    mediaQuery: 'screen and (max-width: 599px)',
},
{
    alias: 'lt-md',
    mediaQuery: 'screen and (max-width: 959px)',
},
{
    alias: 'lt-lg',
    mediaQuery: 'screen and (max-width: 1279px)',
},
{
    alias: 'lt-xl',
    mediaQuery: 'screen and (max-width: 1919px)',
},
{
    alias: 'gt-xs',
    mediaQuery: 'screen and (min-width: 600px)',
},
{
    alias: 'gt-sm',
    mediaQuery: 'screen and (min-width: 960px)',
}, 
{
    alias: 'gt-md',
    mediaQuery: 'screen and (min-width: 1280px)',
},
{
    alias: 'gt-lg',
    mediaQuery: 'screen and (min-width: 1920px)',
}
];


export const CustomBreakPointsProvider = { 
  provide: CUSTOM_BREAKPOINTS,
  useValue: true,
  multi: true
};