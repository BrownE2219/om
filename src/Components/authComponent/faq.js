import React , { Component } from 'react';
import Header from './../../header';
import Footer from './../../footer';
import './faq.css';
import './faqscript.js';
class Faq extends Component{
	render(){
		return (
			<div>
						<Header/>
			<div>
      <div className="questions">
      <button className="accordion">1. What is plasma?</button>
      <div className="panel">
      <p>Plasma is the liquid portion of blood. About 55% of our blood is plasma, and the remaining 45% are red blood cells, white blood cells and platelets that are suspended in the plasma.</p>
      </div>


      <button className="accordion">2. How plasma transfusion will help COVID-19 patients?</button>
      <div className="panel">
      <p>Transfusion of plasma consists of the noncellular portion of blood that is separated and frozen after collection, is used to treat and prevent bleeding in patients with coagulopathy and to replete plasma proteins that may be deficient.</p>
      </div>



      <button className="accordion">3. How plasma transfusion will help COVID-19 patients?</button>
      <div className="panel">
      <p>The use of convalescent plasma (CP) collected from previously infected individuals to passively transfer antibodies in order to protect or treat humans dates back almost 100 years. CP has been used for the treatment of diverse infectious diseases, notably in times of outbreaks (e.g. polio) and pandemics (e.g. Spanish flu and now COVID-19).<br/><br/>
      The vast majority of patients who recover from COVID-19 illness develop circulating antibodies to various SARS-CoV-2 proteins 2-3 weeks following infection, which are detectable by ELISA or other quantitative assays and often correlate with the presence of neutralizing antibodies. These antibodies appear to be protective, based on several primate studies showing animals could not be re-infected with SARS-CoV-2 weeks to months later.</p>
      </div>



      <button className="accordion">4. What is the eligibility of plasma donation?</button>
      <div className="panel">
      <p>To volunteer as a plasma donor you must: </p>
      <ul>
        <li>be fit and healthy.</li>
        <li>be aged 17 or over. </li>
        <li>have a large enough blood volume (calculated by height and weight before we invite you to donate)</li>
        <li>have high antibody plasma preferred</li>
      </ul>
      </div>


      <button className="accordion">5. What is the novel coronavirus?</button>
      <div className="panel">
      <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.<br/><br/>
      Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</p>
      </div>


      <button className="accordion">6. How to prevent yourself from catching COVID-19?</button>
      <div className="panel">
      <p>To prevent the spread/catching of COVID-19:</p>
      <ul>
        <li>Stay home if you feel unwell.</li>
        <li>If you have a fever, cough and difficulty breathing, seek medical attention.</li>
        <li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
        <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
        <li>Wear a mask when physical distancing is not possible.</li>
        <li>Don’t touch your eyes, nose or mouth.</li>
        <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
      </ul>
      </div>


      <button className="accordion">7. What’s the relevance of wearing masks during COVID-19 pandemic?</button>
      <div className="panel">
      <p>Masks can help prevent the spread of the virus from the person wearing the mask to others. Masks alone do not protect against COVID-19 and should be combined with physical distancing and hand hygiene. Follow the advice provided by your local health authority.</p>
      </div>


      <button className="accordion">8. What are the steps to be taken before the plasma donation? </button>
      <div className="panel">
      <ul>
        <li>Drink plenty of water or juice to be fully hydrated</li>
        <li>Notify centre personnel if you have had any recent surgery</li>
        <li>Notify centre personnel if you have obtained a tattoo or piercing within the past 12 months</li>
        <li>Notify centre personnel if you are taking any medication or are under doctors care for any medical condition</li>
      </ul>
      </div>



      <button className="accordion">9. How is a COVID-19 test is done?</button>
      <div className="panel">
      <p>Two kinds of tests are available for COVID-19: viral tests and antibody tests.</p>
      <ol>
        <li>A viral test tells you if you have a current infection.</li>
        <li>An antibody test might tell you if you had a past infection.</li>
      </ol>
      <p>To get tested for current COVID-19 infection:</p>
      <ul>
        <li>You can visit your state or localexternal icon health department’s website to look for the latest local information on testing.</li>
        <li>If you have symptoms of COVID-19 and want to get tested, call your healthcare provider first.</li>
      </ul>
      </div>



      <button className="accordion">10. What is a Viral test?</button>
      <div className="panel">
      <p><b>Viral or diagnostic test:</b> A viral test can tell you if you are currently infected with the coronavirus that causes COVID-19. This is the test you will receive if your doctor refers you for a COVID-19 test based on your symptoms and other factors.</p>
      </div>



      <button className="accordion">11. What is an Antibody test?</button>
      <div className="panel">
      <p><b>Antibody test:</b> An antibody test can show if you were previously exposed to or infected with the virus that causes COVID-19, and if your body has created antibodies in an attempt to defend itself. It takes at least 12 days after exposure for your body to make enough antibodies to show up on a test.</p>
      </div>

      <button className="accordion">12. How is antibody test different from COVID-19 test?</button>
      <div className="panel">
      <p> Antibody testing determines whether you had COVID-19 in the past and now have antibodies against the virus. A test to diagnose COVID-19 determines if you currently have the disease.</p>
      </div>
			</div>
			</div>
			<div>
			<Footer  stype ="position:absolute; bottom:0%; left:0%;">
			</Footer>
			</div>
			</div>
			);
	}
}

export default Faq
