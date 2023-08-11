import React from 'react';
import './Components.css';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <section className="page4">
      <div className="work">
        <h1 className="header">Work experience.</h1>
      </div>
      <div className="employments">
        <table className="table-style">
          <tr>
            <td className="header3">Staffing Manager, Hemfrid<p className="work_exp">My main tasks as staffing manager were to
              coach and lead the
              area's Hemfridare with the goal of creating continuity, employee commitment and high customer
              satisfaction.
              I was responsible for the area's costs, resource planning and schedule optimization. </p></td>
            <td>&nbsp;2019-2020</td>
          </tr>
          <tr>
            <td className="header3">Service Manager, First Camp<p className="work_exp">As Service Manager, I was
              responsible for leading
              the work at the campsite according to centrally established routines and directives. I had personnel
              responsibility and
              was responsible for reception, janitorial, shop, cleaning and restaurant.
              I was also responsible for reaching the facility's budget goals, purchases, and ongoing operational
              issues.</p></td>
            <td>&nbsp;2016-2019</td>
          </tr>
          <tr>
            <td className="header3">Site Responsible, Fitness24Seven <p className="work_exp">I was in charge of the day-to-day
              running of the gym,
              which included reception work, customer service, purchasing, sales, compilation of cash reports and
              ensured that
              everything is complete, clean and worked as it should. I also developed into both a
              Training manager for new employees and coordinator in Östergötland for
              100% pure hard training.</p>
            </td>
            <td>&nbsp;2014-2016</td>
          </tr>
          <tr>
            <td className="header3">Reception Manager, First Camp<p className="work_exp">Reception work such as
              bookings, customer service.
               I was also responsible for recruiting staff, holding training courses, planning
              schedule, report wages and reconcile and compile cash reports. </p>
            </td>
            <td>&nbsp;2011-2013</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default WorkExperience;
