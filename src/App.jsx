import { Button, lightTheme, Provider } from '@adobe/react-spectrum';

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
        <Provider colorScheme="light" theme={lightTheme}>
            <Button variant="primary">Abrir</Button>
        </Provider>
    );
}

export default App;
