import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        certif: "../../../assets/images/certifications/DataScience.png",
      },
      {
        certif: "../../../assets/images/certifications/DataGoogle.png",
      },
      // {
      //   certif: "../../../assets/images/certifications/machinelearningIBM.png",
      //   },
      ],
      experience2: [
        {
          certif: "../../../assets/images/certifications/Big_Data_Engineer.png",
          },
      {
        certif: "../../../assets/images/certifications/IoT.png",
        },
      ],
      experience3: [
      {
        certif: "../../../assets/images/certifications/Python.png",
        },
      {
        certif: "../../../assets/images/certifications/PowerBI.png",
        },
      ],
      experience4: [
      {
        certif: "../../../assets/images/certifications/Intermediate Machine Learning.png",
        },
      { 
        certif: "../../../assets/images/certifications/PythonKaggle.png",
        },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}










// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-experience',
//   templateUrl: './experience.component.html',
//   styleUrls: ['./experience.component.scss']
// })
// export class ExperienceComponent implements OnInit {

//   public workExperiences = {
//     viewExperiences: true,
//     experience: [
//       {
//         role: "Big Data Engineer Mastery Award IBM",
//         company: "IBM",
//         color: "#3781c2",
//         companylogo: "../../../assets/images/IBM.png",
//         date: "../../assets/images/certifications/Big_Data_Engineer.png",
//         desc: "Upcoming Software Enginer Specialist(SES) at Infosys",
//       },
//       {
//         role: "Computer Science & Engineering",
//         company: "GLA University",
//         color: "#3f703f",
//         companylogo: "../../../assets/images/gla.png",
//         date: "Aug 2016 – Jul 2020",
//         desc: "I have completed my 4 year graduation degree in computer science with overall CGPA 8.6",
//       },
//       {
//         role: "Software Engineer Intern",
//         company: "Innovative Buiness Solutions",
//         color: "#ff9102",
//         companylogo: "../../../assets/images/ibs.png",
//         date: "Jun 2018 – Aug 2018",
//         desc: "The 6- Week summer training focused on full-stack web development and helped learn to work in a team",
//         },
//     ]
//   };

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
