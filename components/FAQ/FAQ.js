import React from "react";
import "./FAQ.scss";
import Accordion from "../Accordion/Accordion";

const FAQ = ({ id }) => {
  return (
    <section className="faq" id={id}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="faq-heading">FAQ</h2>
            <Accordion>
              <div label="I. How does the relocation process work?">
                <p>
                  We help you with your relocation, from the Visa process till
                  your apartment registration. Our HR team will give advice and
                  support during the whole process step by step.
                </p>
                <Accordion subAccordion={true}>
                  <div label="1.Visa">
                    <p>
                      Before travelling to Germany, you need to collect and fill
                      out your documents (depending if you are applying for a
                      Blue Card or a Working Visa; for more info see VI.), go to
                      the local German embassy in your home country to pick up
                      your visa, pack your stuff and buy a plane ticket. Our
                      People & Culture team can guide you through this process
                      by explaining what has to be done from your end and which
                      paperwork you need.
                    </p>
                  </div>
                  <div label="2. Finding a flat">
                    <p>
                      When you arrive in Berlin, you willl need a place to stay.
                      Of course, you can choose to handle this yourself, but we
                      know that flat-hunting in Berlin can take some time.
                      Therefore we will point you towards great companies who
                      can find you a transitional accommodation, which is
                      usually a furnished apartment for the first couple of
                      months. That way, you will have enough time to settle in
                      Berlin and look for a permanent solution. Our People &
                      Culture team is happy to assist you along the way.
                    </p>
                  </div>
                  <div label="3. Paperwork">
                    <p>
                      As soon as you are here, as a next step you will have to
                      reregister in Berlin (“Anmeldung”) and set up a bank
                      account, which you will need for your salary (for more
                      info see III.). Registration at the “Bürgeramt” is
                      important, you will only receive your Tax ID if you are
                      registered in Berlin. You need a Tax ID to be paid.
                    </p>
                    <p>
                      It is further mandatory to register for the public health
                      insurance of your choice (for additional information see
                      for example <a className="link" href="https://www.make-it-in-germany.com/en/living-in-germany/healthcare/insurance/"
                        target="_blank"
                      >
                        https://www.make-it-in-germany.com/en/living-in-germany/healthcare/insurance/
                      </a>
                      ), also to get your social security number.
                    </p>
                    <p>
                      After 3-6 months (depending on the type of visa you are
                      eligible for) we will need to apply for your long-term
                      work Visa. This is just a formality, our team will guide
                      you through this process.
                    </p>
                  </div>
                </Accordion>
              </div>
              <div label="II. How long does the Visa process last?">
                <p>There is no general response to that.</p>
                <p>
                  In any case: SOFTGAMES will help you with every single step.
                  Our People & Culture team has vast experience in relocation
                  assistance and VISA applications.
                </p>
                <p>
                  The actual duration of the Visa process depends on
                  multifarious external factors including:
                </p>
                <ul>
                  <li>
                    The waiting time for appointments at the German Embassy in
                    your home country can differ.
                  </li>
                  <li>
                    If you have a University degree and if so, which kind. This
                    can influence the complexity of the paperwork and therefore
                    the duration of the entire process.
                  </li>
                  <li>
                    What kind of job you are applying for (e.g. getting a Visa
                    for an IT specialist is easier because it’s an understaffed
                    profession in Germany).
                  </li>
                </ul>
              </div>
              <div label="III. What will my earnings after deductions be?">
                <p>
                  When we make you an offer, this amount is the gross salary
                  (“Bruttolohn”). Some details about why net is not gross in
                  Germany:
                </p>
                <p>
                  Employers automatically deduct income tax, the “solidarity
                  surcharge” (“Solidaritätszuschlag”) and the statutory social
                  insurance contributions. The advantage is that your social
                  insurance contributions mean that you are financially insured
                  if you lose your job, fall ill (health insurance covers the
                  cost of medical treatment), or are in need of care, and in old
                  age. The employers even take over some costs. The amounts
                  deducted to cover all these costs may vary depending on your
                  income, federal state, tax bracket, health insurance fund and
                  family status.
                </p>

                <p>
                  Please note that health insurance for you also covers your
                  family (spouse and kids). All details about one of the best
                  medical systems in the world can be read here: <a className="link" target="_blank" href="https://www.make-it-in-germany.com/en/living-in-germany/healthcare/insurance/">
                    https://www.make-it-in-germany.com/en/living-in-germany/healthcare/insurance/
                  </a>
                </p>

                <p>
                  In order to calculate your approximate(!) net salary, feel
                  free to try out one of the „gross net calculators“ like this
                  one: <a className="link" target="_blank" href="https://www.brutto-netto-rechner.info/gehalt/gross_net_calculator_germany.php">
                    https://www.brutto-netto-rechner.info/gehalt/gross_net_calculator_germany.php
                  </a>
                </p>

                <p>Proceed as follows:</p>
                <p>
                  You enter your monthly gross (see in the contract), tax free
                  allowance for a married couple is €18,000, for a single
                  €9,000, select the tax category, which will be most likely „3“
                  or „4“ if you are married or "1" if you are single (see
                  explanation below from Wikipedia) and say you’re not in the
                  church, the state is „Berlin“, if you have children choose 1
                  or 2 (depending how many you have). The rest can stay.
                </p>

                <p>
                  Taxation classes (tax groups = Lohnsteuerklasse aka
                  Steuerklassen) are as follows:
                </p>
                <ul>
                  <li>class I = single</li>
                  <li>
                    class II = single parent (living alone with the
                    child/children)
                  </li>
                  <li>
                    class III = married and spouse has no income or lower income
                  </li>
                  <li>class IV = married and similar income to spouse</li>
                  <li>
                    class V = opposite of class III, i.e this is the class the
                    second earner chooses if the spouse opts for class III
                  </li>
                  <li>
                    class VI = for a second job or for deduction without proper
                    employee information
                  </li>
                </ul>
                <p>
                  At the end of the month your net salary is transferred
                  directly to your bank account. All details here: <a className="link" target="_blank" href="https://en.wikipedia.org/wiki/Taxation_in_Germany">
                    https://en.wikipedia.org/wiki/Taxation_in_Germany
                  </a>
                </p>

                <p>
                  Please note: If you fall under taxation class III or V you
                  need to file an extra application.
                </p>
              </div>
              <div label="IV. Can I bring my family?">
                <p>
                  If you are an EU-citizen or eligible for a Blue Card this
                  process is easy, there should be no problems.
                </p>
                <p>
                  If you are in none of these categories the process involves
                  more steps, nevertheless we will assist you to bring your
                  loved ones as soon as possible.
                </p>
                <p>
                  For detailed information see: <a className="link" target="_blank" href="https://www.berlin.de/willkommenszentrum/en/families/reunification-of-families/">
                    https://www.berlin.de/willkommenszentrum/en/families/reunification-of-families/
                  </a>
                </p>
              </div>
              <div label="V. Which kind of Visa do I have to apply for?">
                <p>
                  In general, if you want to work in Germany you will have to
                  apply for a Working Visa.
                </p>
                <p>
                  If specific requirements are met, you can also apply for a
                  Blue Card.
                </p>
                <p>
                  For details see: <a className="link" target="_blank" href="https://service.berlin.de/dienstleistung/324659/en/">
                    https://service.berlin.de/dienstleistung/324659/en/
                  </a>
                </p>
              </div>
              <div label="VI. Costs (Flat etc.)">
                <p>Living cost in Germany consists of</p>
                <ul>
                  <li>
                    Housing (rent plus additional expenses such as electricity,
                    internet access, phone/mobile, heating, TV tax)
                  </li>
                  <li>
                    Public transportation / vehicle tax + car insurance (in case
                    you own a car)
                  </li>
                  <li>Food</li>
                  <li>Going out</li>
                  <li>Whatever you wish to do :)</li>
                </ul>
                <p>The biggest cost factor is usually housing.</p>

                <p>Example 1:</p>
                <p>
                  A furnished studio apt. for 1 person (approx. 20sqm) can cost
                  900€/month and more.
                </p>
                <p>
                  An unfurnished studio apt. for 1 person (approx. 30sqm) can
                  cost 600€/month and more.
                </p>

                <p>Example 2:</p>
                <p>
                  A furnished flat for 2 people (approx. 60sqm) can cost
                  1300€/month and more.
                </p>
                <p>
                  An unfurnished flat for 2 people (approx. 60sqm) can cost
                  900€/month and more.
                </p>

                <p>
                  Please note: These are estimations based on our experience and
                  on the current market. Of course, the actual cost depends on
                  many factors such as location, renovation status, facilities,
                  furniture, additional services (WLAN) etc.
                </p>

                <p>
                  To get an approximate overview on monthly and general living
                  costs you can check for example: <a className="link" target="_blank" href="https://www.expatistan.com/cost-of-living/berlin">
                    https://www.expatistan.com/cost-of-living/berlin
                  </a>
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
