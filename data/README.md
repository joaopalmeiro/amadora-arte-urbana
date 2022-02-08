# Data

## Development

- `pipenv install --python 3.8 --dev`.
- `pipenv run jupyter lab`.
- `pipenv run black prep.ipynb`.

## Notes

- `pipenv install pandas openpyxl jupyterlab`.
- `pipenv install --dev 'black[jupyter]' isort`.
- `pipenv run isort formatter.py`.
- `git diff --stat src/data.json`.
- [PandasGUI](https://github.com/adamerose/PandasGUI):
  - `pipenv install pandasgui`.
- [bamboolib](https://bamboolib.8080labs.com/):
  - `pipenv install bamboolib` + `pipenv run python -m bamboolib install_labextensions`.
- [Mito](https://www.trymito.io/):
  - `pipenv install mitoinstaller` + `pipenv run python -m mitoinstaller install`.
  - [Editing Individual Cells](https://docs.trymito.io/getting-started/installing-mito).
  - [Importing Data into Mito](https://docs.trymito.io/how-to/importing-data-to-mito).
