# https://github.com/operatorequals/httpimport#the-github-use-case
# https://github.com/slingamn/mureq
from pathlib import Path
from urllib.parse import urlparse

import pandas as pd
from httpimport import github_repo

INPUT_DATA: str = "./arte-urbana-manual.xlsx"
OUTPUT_FOLDER: Path = Path("../img/raw/pictures")

if __name__ == "__main__":
    df = pd.read_excel(
        INPUT_DATA,
        verbose=False,
        dtype={"Data": "Int64"},
    )
    urls = df["pic_url"].to_list()

    with github_repo("slingamn", "mureq"):
        import mureq

        for url in urls:
            r = mureq.get(url)

            parsed_url = urlparse(url)
            filename = parsed_url.path.rpartition("/")[-1]
            output_path = OUTPUT_FOLDER / filename

            with open(output_path, "wb") as fp:
                fp.write(r.content)

            print(f"\n✓ {filename}")

        print("\n✨ Done!")
