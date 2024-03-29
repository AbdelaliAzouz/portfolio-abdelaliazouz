import { Component, OnInit } from '@angular/core';
// import {Apollo} from "apollo-angular";
// import gql from 'graphql-tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // myFunction() {
  //   var dots = document.getElementById("dots");
  //   var moreText = document.getElementById("more");
  //   var btnText = document.getElementById("myBtn");
  
  //   if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     btnText.innerHTML = "Read more";
  //     moreText.style.display = "none";
  //   } else {
  //     dots.style.display = "none";
  //     btnText.innerHTML = "Read less";
  //     moreText.style.display = "inline";
  //   }
  // }

  readMore = false;
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

  timeline = [
    {
      heading: " Collaborative Platform of Academic Researchers in the faculty of sciences and technologies Tangier",
      subtitle: "Tools: React JS, Node JS, Express JS, MySQL, Firebase.",
      content: "I developed this project as part of my end-of-studies project, to obtain the Bachelor's degree \n"+
      "in Science and Technology, in the Computer Engineering specialty.\n" +
      "The context of the project is oriented towards higher education and scientific research. The latter requires \n" +
      "collaborative work between researchers, so that they can: communicate to collaborate, share their scientific articles, know \n" +
      "the different themes that other researchers are working on. I used the XP method, (eXtreme Programming) for project organization, which is an agile method.The modeling of the project was\n" +
      " done using the UML language with its different aspects. For the technical and development part, i chose JavaScript libraries and frameworks, \n" +
      "ReactJS for the Front-End, NodeJS and Express for the Back-End \n" +
      "and Server part, MySQL for the Database management, Firebase as real-time database....",      
      className1: "mar-right",
      link: "https://github.com/AbdelaliAzouz/LST-GI-PFE-Project",
      className2: "prt_about_learnbox_right",
    },
    {
      heading: "Web Scraping & Data analysis and visualization",
      subtitle: "Tools: Angular, Flask, MongoDB, GraphQL, BeautifulSoup, Pandas, matplotlib.",
      className1: "mar-left",
      content: "The main objective of the project is the realization of an ETL pipeline ''Extract, Transform, Load'' \n" +
      "and Data Visualization / Analysis.The Extract phase process is done with the web scraping, where the objective is to \n" +
      "collect cryptocurrencies data from the website worldCoinIndex. The tools that I have used are BeautifulSoup and pandas. \n" +
      "After collecting the data, I start the preprocessing to organize this data into a suitable formats, this step is very important \n" +
      "in the ETL process which represent the transform part where I have removed the outliers and fill the missing values with the appropriate \n" +
      "information. then I loaded the data into mongoDB database by connecting Flask with the server.The platform gives the user \n" +
      "the ability to download the data or make a visualization with the matplotlib library.",
      className2: "prt_about_learnbox_right",
      link: "https://github.com/AbdelaliAzouz/Scraping-cryptocurrencies-Data",
    },
    {
      heading: "Simulation of a car parking",
      subtitle: "Tools: JAVA(POO, GUI Swing, Multithreading)",
      content: "A smart parking developed with JAVA, where the graphical part is done with Swing and AWT. Each car is represented as a thread where the behaviors of each car are : \n",
      className1: "mar-right",
      link: "https://github.com/AbdelaliAzouz/Smart-parking-Simulation",
      className2: "right",
      steps1:"•	1. The car get outside for a while.",
      steps2:"•	2. Request and obtain access to the car park. \n",
      steps3:"•	3. Enter the parking lot, and stay there for a while \n" ,
      steps4:"•	4. Exit the car park.",

    },
    {
      heading: "Predict the flow of urban traffic in the city of Sao Paulo using machine learning",
      subtitle: "Tools: Python, Numpy, Pandas, scikit learn, Random forest.",
      content: "This project covers a simple exploratory analysis over the Behavior of the urban traffic of the city of Sao Paulo in Brazil Data Set. In addition, i shortlisted a few machine learning models to predict the Slowness in Traffic variable (0-100%). Although the size of the dataset is considerably small, limiting the models performance and the exploratory analysis. The notebook was built with self-learning purposes only. The dataset covers 135 instances, each representing 30 minute timeframes over the week, from Monday 12/14/2009 to Friday 12/18/2009. \n" +
      "The steps that I’ve follow are: ",
      steps1:"•	1. Data Overview",
      steps2:"•	2. Data Manipulation ",
      steps3:"•	3. Data Visualization ",
      steps4:"•	4. Data preprocessing ",
      steps5:"•	5. Model Building ",
      steps6:"•	6. Model Performance",

      className1: "mar-left",
      link: "https://www.kaggle.com/code/parismollo/urban-traffic-analysis-sao-paulo",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Analyze performance indicators of FSTT students",
      subtitle: "Tools: Power BI, Excel, Visual Studio, SQL Server",
      content: "In this project i've applyed the techniques of business intelligence on data from DEUST students  \n"+
      "in the Faculty of Science and Techniques of Tangier to extract information and useful knowledge about these students like.\n"+
      "Enrollment/Pass Rate By Bac Series, By City, By Gender And Year \n",

      className1: "mar-right",
      link: "https://drive.google.com/file/d/1cza4Qoyl-_922XooeN_1vkF1JFeAwTh3/view?usp=sharing",
      className2: "prt_about_learnbox_right",
        }
    ];
  projects2 = [];
  projects3 = [
    {
      link: "https://github.com/sarthakgoenka/portfolio",
    },
    {
      link: "",
    },
    {
      link: "https://natours-8aa57.web.app/",
    },
    {
      link:""
    },
    {

      link: "http://node-room-chat.herokuapp.com/",
    },
    {
      link: "https://personal-doc.herokuapp.com/",

    }
  ]
  // constructor(public apollo: Apollo) { }
  constructor() { }

  ngOnInit(): void {
    
    }

}
