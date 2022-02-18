import { Footer, Link } from '@adobe/react-spectrum';

import { defaultFontFamily } from './constants';
import classes from './ProfileFooter.module.css';

function ProfileFooter() {
    // console.log(classes);

    // https://react-spectrum.adobe.com/react-spectrum/Link.html
    // https://vitejs.dev/guide/features.html#css-modules
    // https://vitejs.dev/config/#css-modules
    // https://spectrum.adobe.com/page/color/#Color-themes-and-modes
    return (
        <Footer>
            <Link
                variant="secondary"
                UNSAFE_className={classes.url}
                UNSAFE_style={{ fontFamily: defaultFontFamily }}
            >
                {/* Source: http://wireframe.company/ by James (https://twitter.com/jamesm) */}
                <a href="https://joaopalmeiro.github.io/" target="_blank" rel="noreferrer">
                    João Palmeiro
                </a>
            </Link>
        </Footer>
    );
}

export default ProfileFooter;
