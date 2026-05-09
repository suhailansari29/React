import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
  {
    "logo": "https://t3.ftcdn.net/jpg/03/88/07/84/360_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg",
    "company": "Google",
    "date_posted": "2 days ago",
    "post": "Frontend Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$45/hr",
    "location": "Mumbai, India"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnm4ZH1HWixmlvg8ebErR-esnoLv2CBpMjhA&s",
    "company": "Apple",
    "date_posted": "5 days ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$70/hr",
    "location": "Mumbai, India"
  },
  {
    "logo": "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    "company": "Amazon",
    "date_posted": "1 day ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$50/hr",
    "location": "Mumbai, India"
  },
  {
    "logo": "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
    "company": "Meta",
    "date_posted": "3 days ago",
    "post": "React Developer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": "$40/hr",
    "location": "Mumbai, India"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoxdoCIm725ct_McxxeTLB1MkYuXBWmQeFQ&s",
    "company": "Netflix",
    "date_posted": "6 days ago",
    "post": "Full Stack Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$80/hr",
    "location": "Mumbai, India"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvoNIy8qjA4cqDkn9N5rPq1YiezDHcX_qVA&s",
    "company": "Microsoft",
    "date_posted": "4 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$75/hr",
    "location": "Mumbai, India"
  },
  {
    "logo": "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
    "company": "Tesla",
    "date_posted": "7 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$55/hr",
    "location": "Mumbai, India"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsy9DVbzBn3nlR5glCzV6YT2O3UMU4FHFDRg&s",
    "company": "Adobe",
    "date_posted": "2 days ago",
    "post": "UI/UX Designer",
    "tag1": "Part Time",
    "tag2": "Senior Level",
    "pay": "$60/hr",
    "location": "Mumbai, India"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7R5c22EjFhkxpkIQKOlSoRiX0apTg3NwkRw&s",
    "company": "Uber",
    "date_posted": "3 days ago",
    "post": "Data Analyst",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$42/hr",
    "location": "Mumbai, India"
  },
  {
    "logo": "https://cdn.sanity.io/images/rn4tswnp/production/701c93f19c501de365d167e88aae6d09802cb629-1675x1103.jpg?h=320&auto=format&dpr=2",
    "company": "Airbnb",
    "date_posted": "5 days ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$78/hr",
    "location": "Mumbai, India"
  }
];

  return (
    <div className="parent">

      {jobOpenings.map(function (element, index) {

        return (
        <div key={index}>

          <Card company={element.company} date={element.date_posted} post={element.post} tag1={element.tag1} tag2={element.tag2} pay={element.pay} location={element.location} logo={element.logo}/>

        </div>);
      })}
    </div>

  );
};

export default App;
