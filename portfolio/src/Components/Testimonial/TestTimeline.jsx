// import React from "react";
// import "./TestTimeline.css";
// const TestTimeline = () => {
//    return (
//       <>
//          {/* <div class="container">
//             <div class="row">
//                <div class="col-md-12">
//                   <div class="card">
//                      <div class="card-body">
//                         <h6 class="card-title">Timeline</h6>
//                         <div id="content">
//                            <ul class="timeline">
//                               <li class="event" data-date="12:30 - 1:00pm">
//                                  <h3>Registration</h3>
//                                  <p>
//                                     Get here on time, it's first come first
//                                     serve. Be late, get turned away.
//                                  </p>
//                               </li>
//                               <li class="event" data-date="2:30 - 4:00pm">
//                                  <h3>Opening Ceremony</h3>
//                                  <p>
//                                     Get ready for an exciting event, this will
//                                     kick off in amazing fashion with MOP &amp;
//                                     Busta Rhymes as an opening show.
//                                  </p>
//                               </li>
//                               <li class="event" data-date="5:00 - 8:00pm">
//                                  <h3>Main Event</h3>
//                                  <p>
//                                     This is where it all goes down. You will
//                                     compete head to head with your friends and
//                                     rivals. Get ready!
//                                  </p>
//                               </li>
//                               <li class="event" data-date="8:30 - 9:30pm">
//                                  <h3>Closing Ceremony</h3>
//                                  <p>
//                                     See how is the victor and who are the
//                                     losers. The big stage is where the winners
//                                     bask in their own glory.
//                                  </p>
//                               </li>
//                            </ul>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div> */}
//          <div class="container">
// <div class="main-timeline">

//                         <!-- start experience section-->
//                         <div class="timeline">
//                             <div class="icon"></div>
//                             <div class="date-content">
//                                 <div class="date-outer">
//                                     <span class="date">
//                                             <span class="month">2 Years</span>
//                                     <span class="year">2013</span>
//                                     </span>
//                                 </div>
//                             </div>
//                             <div class="timeline-content">
//                                 <h5 class="title">Visual Art &amp; Design</h5>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
//                                 </p>
//                             </div>
//                         </div>
//                         <!-- end experience section-->

//                         <!-- start experience section-->
//                         <div class="timeline">
//                             <div class="icon"></div>
//                             <div class="date-content">
//                                 <div class="date-outer">
//                                     <span class="date">
//                                             <span class="month">1 Years</span>
//                                     <span class="year">2015</span>
//                                     </span>
//                                 </div>
//                             </div>
//                             <div class="timeline-content">
//                                 <h5 class="title">Product Designer</h5>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
//                                 </p>
//                             </div>
//                         </div>
//                         <!-- end experience section-->

//                         <!-- start experience section-->
//                         <div class="timeline">
//                             <div class="icon"></div>
//                             <div class="date-content">
//                                 <div class="date-outer">
//                                     <span class="date">
//                                             <span class="month">2 Years</span>
//                                     <span class="year">2016</span>
//                                     </span>
//                                 </div>
//                             </div>
//                             <div class="timeline-content">
//                                 <h5 class="title">Web Designer</h5>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
//                                 </p>
//                             </div>
//                         </div>
//                         <!-- end experience section-->

//                         <!-- start experience section-->
//                         <div class="timeline">
//                             <div class="icon"></div>
//                             <div class="date-content">
//                                 <div class="date-outer">
//                                     <span class="date">
//                                             <span class="month">2 Years</span>
//                                     <span class="year">2018</span>
//                                     </span>
//                                 </div>
//                             </div>
//                             <div class="timeline-content">
//                                 <h5 class="title">Graphic Designer</h5>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
//                                 </p>
//                             </div>
//                         </div>
//                         <!-- end experience section-->

//                     </div>
// </div>
//       </>
//    );
// };

// export default { TestTimeline };
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const TestTimeline2 = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //    icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //    icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //    icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //    icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //    icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //    icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //    icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          //    icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export { TestTimeline2 };
