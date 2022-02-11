import { defaultTheme, Provider } from '@adobe/react-spectrum';

function App() {
    return (
        // https://react-spectrum.adobe.com/react-spectrum/getting-started.html#setting-up-your-app
        // https://react-spectrum.adobe.com/react-spectrum/versioning.html#installing-individual-packages
        <Provider theme={defaultTheme}></Provider>
    );
}

export default App;
