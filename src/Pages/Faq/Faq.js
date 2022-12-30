import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <section className=" dark:text-gray-100 dark:bg-gray-800 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-10 ">
        <div className="container w-1/2 mx-auto flex flex-col justify-center p-4 md:p-8">
          <h2 className="mb-12 pt-5 text-4xl font-bold leading-none text-center sm:text-5xl">
            Faq_
          </h2>

          <div className="flex flex-col pt-12 pb-12 sm:px-8 lg:px-12 xl:px-32  border rounded faq-details">
            <details>
              <summary className="py-6 outline-none cursor-pointer">
                For Whom Is This Course?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  This Course Is Created For Those Who Want To Learn Web
                  Development From Scratch And Build A Career As A Web Developer
                  In Software Companies. Even Those Who Studied CSE For Four
                  Years But Didn’t Learn Much And Couldn’t Decide What To Do,
                  Can Complete Web Development From This Course And Apply For
                  Jobs. 😀
                </p>
              </div>
            </details>
            <details>
              <summary className="py-6 outline-none cursor-pointer ">
                What Prior Experience Is Needed For This Course?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Since We’ll Be Teaching From Scratch, You Don’t Need To Know
                  Anything Beforehand. But If You Have Free Time, You Can Do
                  These Things: Be Comfortable With A Computer, Internet So That
                  You Can Search Anything Online You Should Have Basic English
                  Literacy Typing Speed 15-30 Wpm Will Be Excellent. Familiarity
                  With HTML, CSS Would Be Fantastic..
                </p>
              </div>
            </details>
            <details>
              <summary className="py-6 outline-none cursor-pointer">
                What Educational Background Is Required?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  We Have Designed The Course In Such A Way That Your
                  Educational Background Doesn’t Matter Here. You Can Do This
                  Course From Any Educational Background. Anyone, Such As A
                  University Student, College Student, Jobber, Unemployed,
                  Lover, Runaway Lover, Even The Girlfriend Who Doesn’t Pick Up
                  The Phone Can Do This Course. However, You Have To Commit 6-8
                  Hours Everyday.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-6 outline-none cursor-pointer ">
                What's Inside The Course?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  You Will Learn Everything Needed To Become A Serious Web
                  Developer. Starting From HTML, CSS, You'll Learn Bootstrap,
                  JavaScript, Git, ES6, REST API, Server, JSON, Etc. Not Only
                  That, You'll Also Learn The Most Famous Framework, ReactJS,
                  Alongside These And Will Make A Complete Website. In Addition,
                  You'll Learn Node, Database (Mongodb), Debug, Problem Solving,
                  Interview Questions And Many Other Things. We'll Teach You How
                  To Build 11 Websites In The Entire Course. Moreover, You'll
                  Get 11 Websites To Build As Your Homework. If You Finish This
                  Anyhow, Then You'll Surely Be A Junior Developer.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-6 outline-none cursor-pointer">
                I Work Full Time.Should I Join This Course?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  If You Want To Finish With Our Course Flow And Go To SCIC, You
                  Will Have To Give It All. If You Do Not Devote At Least 6
                  Hours Everyday Or Extra Time On Weekends And Holidays, You
                  Will Be Unable To Complete Our Course Content, Assignments,
                  And Practice Problems Intime. You Will Not Be Able To Use All
                  Of The Course’s Facilities. So, We Would Say, If You Can
                  Assure At Least 6 Hours Everyday, You May Join This Course.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-6 outline-none cursor-pointer">
                How Will I Get A Job After Completing The Course?
              </summary>
              <div className="px-4 pb-4  space-y-2">
                <p>
                  Take Note Of One Thing Clearly: We Cannot Guarantee You A Job.
                  However, You’ll Go To SCIC If You Finish The Main Course On
                  Time. There You Will Get Job-Related And Interview-Related
                  Specific Training. Work Hard There And One Of Our Job
                  Placement Team Members Will Send Your CV/Resume To Several
                  Companies. Interestingly, Many Of Our Students Get Jobs As
                  They Apply By Themselves. Finally, If You Keep Working Hard,
                  One Of Our Job Placement Managers Will Keep Guiding You Until
                  You Get A Job.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
