import PropTypes from 'prop-types';
import React from 'react';
import { useRecoilState } from 'recoil';

import { currentProfileState } from './atoms';
import classes from './RotatingIconButton.module.css';

// Source: https://www.steveruiz.me/posts/rotating-icon-button by Steve Ruiz
function RotatingIconButton({ children }) {
    // const [current, setCurrent] = React.useState(0);
    const [current, setCurrent] = useRecoilState(currentProfileState);
    // console.log(current);
    // console.log(classes);

    // To prevent any animations on the first render.
    // https://reactjs.org/docs/hooks-reference.html#useref
    // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
    const isInitial = React.useRef(true);
    // console.log(isInitial);

    React.useEffect(() => {
        isInitial.current = false;
    }, []);

    function cycleCurrent() {
        if (current === children.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    }

    return (
        <button onClick={cycleCurrent} className={classes.Button}>
            {/* https://reactjs.org/docs/react-api.html#reactchildren */}
            {React.Children.map(children, (child, i) => {
                const isCurrent = i === current;

                return (
                    <div
                        key={i}
                        className={classes.Icon}
                        style={{
                            animationDuration: isInitial.current ? '0ms' : '400ms',
                            animationName: isCurrent ? classes.riseIn : classes.riseOut
                        }}
                    >
                        {child}
                    </div>
                );
            })}
        </button>
    );
}

RotatingIconButton.propTypes = {
    children: PropTypes.node
};

export default RotatingIconButton;
