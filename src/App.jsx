import { Flex, Header, Heading, lightTheme, Provider } from '@adobe/react-spectrum';
import { RecoilRoot } from 'recoil';

import MainContent from './MainContent';
import ProfileFooter from './ProfileFooter';

// https://github.com/adobe/spectrum-css/blob/main/components/vars/css/globals/spectrum-staticAliases.css#L45
// https://github.com/adobe/spectrum-css/blob/main/components/vars/css/globals/spectrum-fontGlobals.css#L2
function App() {
    // console.log(lightTheme);

    return (
        // https://react-spectrum.adobe.com/react-spectrum/getting-started.html#setting-up-your-app
        // https://react-spectrum.adobe.com/react-spectrum/versioning.html#installing-individual-packages
        // https://react-spectrum.adobe.com/react-spectrum/theming.html#how-themes-are-defined
        // https://react-spectrum.adobe.com/react-spectrum/Provider.html#props
        // https://github.com/adobe/react-spectrum/blob/%40adobe/react-spectrum%403.15.1/packages/@react-spectrum/theme-default/src/index.ts
        // https://recoiljs.org/docs/introduction/getting-started#recoilroot
        <RecoilRoot>
            <Provider colorScheme="light" theme={lightTheme}>
                <Flex direction="column" gap="size-100">
                    <Header>
                        <Heading level={1} marginY="size-0">
                            Caderneta de Graffiti
                        </Heading>
                    </Header>

                    <MainContent />

                    <ProfileFooter />
                </Flex>
            </Provider>
        </RecoilRoot>
    );
}

export default App;
