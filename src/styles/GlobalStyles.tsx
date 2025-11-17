import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --col-n-1:hsl(252, 6%, 83%);
        --col-n-2:hsl(245, 15%, 58%);
        --col-n-3:hsl(245, 19%, 35%);
        --col-n-4:hsl(248, 70%, 10%);

        --col-orange:hsl(7, 88%, 67%);
        --col-orange-dark:hsl(7, 71%, 60%);

        --col-grad-start:hsl(7, 86%, 67%);
        --col-grad-end:hsl(0, 0%, 100%);
    }


    *,*::after, *::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        min-height: 100dvh;
        font-family: "Inconsolata", monospace;
        background-image: url("/images/pattern-squiggly-line-top.svg"),url("/images/pattern-squiggly-line-bottom-mobile-tablet.svg") ,url(/images/background-mobile.png) ;
        background-repeat: no-repeat;
        background-size: 60%, 60%, cover;
        background-position: top right, bottom left, bottom right;
        color: white;

            @media screen and (min-width:786px) {
                 background-image: url(/images/pattern-squiggly-line-top.svg),url(/images/pattern-squiggly-line-bottom-mobile-tablet.svg) ,url(/images/background-tablet.png) ;
            }

            @media screen and (min-width:1028px) {
                background-image: url(/images/pattern-squiggly-line-top.svg),url(/images/pattern-squiggly-line-bottom-desktop.svg) ,url(/images/background-desktop.png) ;
        }
        
    }

    img{
        object-fit: cover;
    }
`;

export default GlobalStyles;
