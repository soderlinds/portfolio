import React from 'react';
import './Components.css';
import './Education.css';

const Education = () => {
  return (
    <section className="page3">

      <div className="education">
        <h1 className="header">Education.</h1>
      </div>
      <div className="educations">
        <table>
          <tr>
            <td className="header3">Blockchain Development, Medieinstitutet<p class="edu">Education that provides
              specialized knowledge in theoretical and practical development,
              design and programming of blockchain-based systems and applications. </p></td>
            <td>&nbsp;2022-</td>
          </tr>
          <tr>
            <td className="header3">Konstlab, Lunnevads Folkhögskola<p class="edu">1-year further education at a distance
              for in-depth knowledge in art.</p></td>
            <td>&nbsp;2021-2022</td>
          </tr>
          <tr>
            <td className="header3">KG II, Falkenbergs konstskola<p class="edu">An education with focus on developing one's
              own artistry and the ability to reflect on the work process. </p></td>
            <td>&nbsp;2020-2021</td>
          </tr>
          <tr>
            <td className="header3">Web Development, Mittuniversitetet<p class="edu">The education focused on theoretical as
              well as practical skills and had a large
              emphasis on web development with modern tools and languages.</p></td>
            <td>&nbsp;2009-2011</td>
          </tr>
          <tr>
            <td class="header3">Graphic Design and Web Development, JTH <p class="edu">Courses in Graphic Design and Web
              Development.</p>
            </td>
            <td>&nbsp;2007-2008</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Education;
