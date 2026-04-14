import React from 'react'
import Card from './components/card'





const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTse3PCKNjGthPXWLYmFDyx0CsxMn3Iq2a5zg&s",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rIxFRNX2QZlnQidGjE75yAg9jR4Jhy3Jgw&s",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWhNNxe98LheKV3UnTCbOClHwMF0sUnha8A&s",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.shutterstock.com/image-vector/adobe-symbol-software-design-computer-260nw-2276290587.jpg",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/5ij5qdSHFzJ2piPRuoTL5F.jpg",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://rabbitlogo.com/wp-content/uploads/2025/10/tesla.jpg",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_1280.jpg",
    companyName: "Spotify",
    datePosted: "1 week ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Remote"
  }
];


  return (
    <div className="parent">
     { jobOpenings.map(function(elem,idx) {
        return <div key={idx}>
           <Card 
        brandLogo={elem.brandLogo}
        company={elem.companyName}
         posted={elem.datePosted}
          position={elem.post} 
          button1={elem.tag1}
          button2={elem.tag2}
          payment={elem.pay}
          location={elem.location}
        />
        </div>
      })}
   
    </div>
    


  )
}

export default App