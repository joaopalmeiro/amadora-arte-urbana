import { Footer, Link } from '@adobe/react-spectrum';
import Airplane from '@spectrum-icons/workflow/Airplane';
import AlertCircle from '@spectrum-icons/workflow/AlertCircle';
import Alias from '@spectrum-icons/workflow/Alias';

import classes from './ProfileFooter.module.css';
import RotatingIconButton from './RotatingIconButton';

function ProfileFooter() {
    // console.log(classes);

    // https://react-spectrum.adobe.com/react-spectrum/Link.html
    // https://vitejs.dev/guide/features.html#css-modules
    // https://vitejs.dev/config/#css-modules
    // https://spectrum.adobe.com/page/color/#Color-themes-and-modes
    return (
        <Footer>
            {/* TODO */}
            <RotatingIconButton>
                <Airplane />
                <AlertCircle />
                <Alias />
            </RotatingIconButton>

            <Link variant="secondary" UNSAFE_className={classes.url}>
                {/* Source: http://wireframe.company/ by James (https://twitter.com/jamesm) */}
                <a href="https://joaopalmeiro.github.io/" target="_blank" rel="noreferrer">
                    João Palmeiro
                </a>
            </Link>
        </Footer>
    );
}

export default ProfileFooter;
