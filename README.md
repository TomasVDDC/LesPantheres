# Project of Data Visualization (COM-480)

| Student's name                    | SCIPER |
| --------------------------------- | ------ |
| Diogo Valdivieso Damasio Da Costa | 311673 |
| Tomas Valdivieso Damasio Da Costa | 300086 |
| Armance Nouvel                    | 330729 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (29th March, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas. Please, fill the following sections about your project.

_(max. 2000 characters per section)_

### Dataset

We are using a dataset from the Bureau of Transportation Statistics : "On-Time : Marketing Carrier On-Time Performance". It contains critical information on commercial US flights. For example scheduled and actual departure and arrival times, canceled and diverted flights, causes of delay and cancellation, air time among others. Because of the provided interface we can directly pick which features to keep before downloading the data, which reduces the amount of filtering needed.

The data is well kept and sources by the US government so we expect minimal data cleaning to be necessary. Although during our preliminary exploratory data analysis, we identified significant gaps in data across several variables.

The dataset source : https://www.transtats.bts.gov/DL_SelectFields.aspx?gnoyr_VQ=FGK&QO_fu146_anzr=b0-gvzr

### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
>
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

### Exploratory Data Analysis

The analysis of flight delay data reveals key insights: the average delay is 12.7 minutes, with a high standard deviation of 44 minutes indicating varied delay lengths. Most flights are on time, as the median delay is 0 minutes, yet the maximum delay recorded is significantly high at 7,223 minutes. Notably, 37.25% of the data on departure delays is missing, highlighting the need for careful data handling.

Here is a table summarising the key insights:

| Statistic          | Departure Delays (minutes) |
| ------------------ | -------------------------- |
| Mean               | 12.7                       |
| Standard Deviation | 44                         |
| Minimum            | 0                          |
| 25%                | 0                          |
| 50% (Median)       | 0                          |
| 75%                | 5                          |
| Maximum            | 7 223                      |
| Missing Values (%) | 37.25                      |

The accompanying visualization showcases trends in average flight delays from 2018 to 2022, providing a basis for understanding delay patterns and aiding in improving airline operational efficiency. Notice the effect of the Covid-19 pandemic during 2020!

<!--<div style="text-align:center; margin-top:-180px; margin-bottom:-180px;">
    <img src="./plots/Average_Flight_Delays_2018-2022.svg" alt="Alt text" width="800" height="800" >
</div> -->

<div style="text-align:center;">
<img src="./plots/Average_Flight_Delays_2018-2022.png" alt="Alt text" width="800" height="400" >
</div>

### Related work

> - What others have already done with the data?

Many flight data visualizations using this data used tools like Tableau or a visualization library like d3.js. The visualization focused on showcasing airline performance, including delays and cancellations. This data was often reported as a dashboard and data dense.

Analysis of flights delay data showing diverse data, for example:

<div style="text-align:center;">
<img src="./images/image4.png" s height="400" >
</div>

From https://www.heavy.ai/demos/flights or

<div style="text-align:center;">
<img src="./images/image1.png"  height="400" >
</div>

> - Why is your approach original?

We will focus on making the data as interactive as possible, making the data less dense to digest. For example, they can look for data of a particular route or the punctuality of planes departing from a specific airport. By doing this, we enable users to find insights pertinent to their travel habits and satisfy their own curiosity while simultaneously making the data less dense and easier to understand.

> - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).

I’ve put images of some visualizations that we liked:

<div style="text-align:center;">
<img src="./images/image2.jpg" height="400" >
</div>
<div style="text-align:center;">
<img src="./images/image3.png"  height="400" >
</div>
<div style="text-align:center;">
<img src="./images/image5.png" height="400" >
</div>

## Milestone 2 (26th April, 5pm)

**10% of the final grade**

## Milestone 3 (31st May, 5pm)

**80% of the final grade**

## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone
