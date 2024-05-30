# Project of Data Visualization (COM-480)

| Student's name                    | SCIPER |
| --------------------------------- | ------ |
| Diogo Valdivieso Damasio Da Costa | 311673 |
| Tomas Valdivieso Damasio Da Costa | 300086 |
| Armance Nouvel                    | 330729 |

## Launching the website locally

Follow these steps:

1. **Clone the Repository**
   Clone the repository to your local machine using the following Git command:
   ```bash
   git clone https://github.com/TomasVDDC/LesPantheres.git
   cd [repository directory]
   ```
2. **Installing the dependencies**:
   - We will need Node.js https://nodejs.org/en/download/prebuilt-installer
   - We can then install Next.js (Next.js is the React framework we are using), and install the other dependencies of the project.
   ```bash
   npm i next
   npm install
   ```
3. **Looking at the Website**:

- Run the following to start the development server
  ```bash
  npm run dev
  ```
- Open your browser with the url "http://localhost:3000" to see the website running locally

### Dataset

We are using a dataset from the Bureau of Transportation Statistics : "On-Time : Marketing Carrier On-Time Performance". It contains critical information on commercial US flights. For example scheduled and actual departure and arrival times, canceled and diverted flights, causes of delay and cancellation,

Source : https://www.transtats.bts.gov/DL_SelectFields.aspx?gnoyr_VQ=FGK&QO_fu146_anzr=b0-gvzr

The processed data files are kept in "scripts/data/"
