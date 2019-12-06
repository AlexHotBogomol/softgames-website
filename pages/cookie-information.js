import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";

const CookieInformation = props => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Breadcrumb
            items={[
              { name: "Home", slug: "/" },
              { name: "Cookie Information", slug: "/cookie-information" }
            ]}
          />
        </div>
      </div>
    </div>
    <section className="simplePage withIllustration">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1>Cookie and 3rd party information</h1>
            <p>
              Cookies and re-marketing on the Website and the Gaming
              Applications (as defined in the Privacy Notice –
              <Link href="/privacy">
                <a> https://www.softgames.de/privacy</a>
              </Link>
              )<br />
              This information supplements the Privacy Notice (available at
              <Link href="/privacy">
                <a> https://www.softgames.de/privacy</a>
              </Link>
              ).
            </p>
            <p>
              Below is a list of all cookies and other web tracking tools on our
              website that are either provided by us or by third parties.
            </p>
            <h3>1. Our own cookies (so-called “First-Party Cookies”):</h3>
            <p>
              We use these cookies to analyze web traffic, customize services,
              content and ads, measure the effectiveness of advertising
              campaigns and promote confidence in and security of the website.
              In addition, we use first-party cookies to distinguish one user
              from another and to determine the total number of visitors to the
              website in connection with the log files of our web server. The
              web usage data collected in this way helps us to receive the
              necessary feedback to constantly improve the website and to better
              serve users. We only use session cookies meaning that these
              cookies will expire shortly after you have visited our Website. We
              do not use permanent First-Party Cookies remaining on your device
              for a longer time.
            </p>
            <p>
              Users can prevent the acceptance of First-Party Cookies by setting
              their browser settings so that they do not accept cookies at all.
              However, if this setting is made, you may not be able to use
              certain current or future elements of our website.
            </p>
            <h3>
              2. Cookies and plugins on our website that transfer data to third
              parties (so-called “Third-Party Cookies”):
            </h3>
            <p>
              In addition to First-Party Cookies, we also use the following
              Third-Party Cookies and plugins provided to us by the following
              parties:
            </p>
            <p>Use of Advertising Tools</p>
            <p>
              Some of our advertising partners may use cookies and web beacons
              on our site. Our advertising partners include the companies listed
              below.
            </p>
            <p>
              These third-party ad servers or ad networks use technology in
              their respective advertisements and links that appear on the
              Website, in particular Gaming Applications and which are sent
              directly to your browser.
            </p>
            <p>
              They automatically receive your IP address when this occurs. Other
              technologies (such as cookies, JavaScript, or Web Beacons) may
              also be used by our site’s third-party ad networks to measure the
              effectiveness of their advertising campaigns and/or to personalize
              the advertising content that you see on the site.
            </p>
            <p>
              Softgames has no access to or control over these cookies that are
              used by third-party advertisers.
            </p>
            <p>
              This type of services allows user data to be utilized for
              advertising communication purposes displayed in the form of
              banners and other advertisements on this Website, possibly based
              on user interests.
            </p>
            <p>
              Some of the services listed below may use cookies to identify
              users or they may use the behavioral retargeting technique, i.e.
              displaying ads tailored to the user’s interests and behavior,
              including those detected outside this Website. For more
              information, please check the privacy policies of the relevant
              services.
            </p>
            <p>
              We may display advertisement served by the following third party
              providers, a provider advertising services that are designed
              specifically as per the compliance requirements of the GDPR.
            </p>
            <p>
              The third party providers may place personalized, or contextual
              targeted advertising on our Website (in particular the Gaming
              Applications) by collecting certain Information, including
              persistent identifiers subject to the privacy policies listed
              below (Privacy Terms):
            </p>
            <p>
              <b>AdBility</b>
              <br />
              Address: Heilwigstr. 136, 20249 Hamburg, Germany
              <br />
              Privacy Terms: https://www.adbility-media.com/en/privacy-policy/
            </p>
            <p>
              <b>AdMob</b>
              <br />
              Address: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA
              94043, USA
              <br />
              Privacy Terms: https://policies.google.com/privacy?hl=de&gl=de
            </p>
            <p>
              <b>Freewheel</b>
              <br />
              Address: 115-123 Avenue Charles de Gaulle, 92200 Neuilly sur
              Seine, France
              <br />
              Privacy Terms: http://freewheel.tv/privacy-policy/
            </p>
            <p>
              <b>Playwire</b>b>
              <br />
              Address: Playwire LLC, 1000 E Hillsboro Blvd, Suite 103, Deerfield
              Beach, FL 33441
              <br />
              Privacy Terms: https://www.playwire.com/privacy-policy/
            </p>
            <p>
              <b>Ad Nordics</b>
              <br />
              Address: Klamsagervej 21B, 1st floor, DK-8230 Aabyhoej
              <br />
              Privacy Terms: No PP Available http://www.adnordics.com/
            </p>
            <p>
              <b>RedPinaeapple Media</b>
              <br />
              Address: Adalbertstraße 8, 10999 Berlin
              <br />
              Privacy Terms:
              http://www.redpineapplemedia.com/privacy-policy.html
            </p>
            <p>
              <b>SpotX</b>
              <br />
              Address: SpotXchange Inc., 11030 Circle Point Road, Westminster,
              CO 80020
              <br />
              Privacy Terms: https://www.spotx.tv/privacy-policy/
            </p>
            <p>
              <b>AppNexus</b>
              <br />
              Address: AppNexus Inc., 28 West 23rd Street, 4th Floor, New York,
              NY 10010
              <br />
              Privacy Terms:
              https://www.appnexus.com/en/company/platform-privacy-policy
            </p>
            <p>
              <b>Stroer Primetime</b>
              <br />
              Address: Ströer Allee 1, 50999 Cologne, Germany
              <br />
              Privacy Terms:
              https://www.stroeer.com/en/service/privacy-policy.html
            </p>
            <p>
              <b>LoopMe</b>
              <br />
              Address: LoopMe Ltd, 32-38 Saffron Hill, London
              <br />
              Privacy Terms: https://loopme.com/end-user-privacy-policy/
            </p>
            <p>
              <b>Rock You</b>
              <br />
              Address: RockYou Corporate Headquarters, 642 Harrison Street,
              Suite 300, San Francisco, CA 94107
              <br />
              Privacy Terms: https://rockyou.com/privacy-policy/
            </p>
            <p>
              <b>LKQD</b>
              <br />
              Address: LKQD Media, Inc., 27422 Portola Pkwy – Suite 350,
              Foothill Ranch, CA 92610
              <br />
              Privacy Terms: https://www.lkqd.com/privacy-policy/
            </p>
            <p>
              <b>TubeMogul</b>
              <br />
              Address: 1250 53rd Street, Suite 2, Emeryville, CA 94608
              <br />
              Privacy Terms: https://www.adobe.com/privacy/marketing-cloud.html
            </p>
            <p>
              <b>Unruly</b>
              <br />
              Address: Großer Burstah 36-38, D·20457 Hamburg
              <br />
              Privacy Terms: https://unruly.co/privacy/
            </p>
            <p>
              <b>Smart Adserver</b>
              <br />
              Address: M-33 Höfe – Mehringdam 33, 10961 Berlin
              <br />
              Privacy Terms: https://smartadserver.com/company/privacy-policy/
            </p>
            <p>
              <b>CPM Star</b>
              <br />
              Address: CPMStar – A Division of GSN Games, 2150 Colorado Avenue,
              Santa Monica, CA 90404
              <br />
              Privacy Terms: https://www.cpmstar.com/
            </p>
            <p>
              <b>Pubnative</b>
              <br />
              Address: PubNative GmbH, Greifswalder Str. 212, 10405 Berlin,
              Germany
              <br />
              Privacy Terms: https://pubnative.net/privacy-policy/
            </p>
            <p>
              <b>SuperAwesome</b>
              <br />
              Address: SuperAwesome Trading Ltd., 2nd Floor Lincoln House,
              296-302 High Holborn, London WC1V7JH, United Kingdom
              <br />
              Privacy Terms: https://www.superawesome.tv/privacy-policy
            </p>
            <p>
              <b>Ad4Game</b>
              <br />
              Address: Ad4Game Ireland Limited, 6-9 Trinity Street, Dublin 2,
              Ireland
              <br />
              Privacy Terms: https://www.ad4game.com/privacy/
            </p>
            <h3>Use of GameAnalytics</h3>
            <p>
              We use the services of GameAnalytics (London), 1 Hardwick St,
              London, EC1R 4RB to track game related information generated by
              the use of the Gaming Applications, e.g. gameplay details, player
              use of resources, bonuses, weapons, progression through stages, or
              even just to keep track of errors. When the so-called Tracking
              Code is implemented into the Gaming Application, this tool collect
              some or all of the following date: Unique device identifier
              generated from the device including but not limited to 1) ID for
              Advertisers (iOS); 2) Google Advertising ID (Google), Platform
              (automatic), Device (automatic), OS major (automatic), OS minor
              (automatic), IP address (automatic) – used to infer country
              information, Install timestamp: a timestamp of the first event
              received from the app integrated with GameAnalytics, for that
              Customer, Boot-up timestamp: timestamp of when a user boots up a
              game The collection of data is subject to the following Privacy
              Terms: https://gameanalytics.com/privacy.
            </p>
            <h3>Use of Google services on our Website:</h3>
            <p>
              Our website uses Google Sign-In, Google AdSense, Google Ad
              Exchange, Google Analytics and Google Tag Manager provided by
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043
              (“Google”), respectively Google Analytics use cookies. We also use
              Google AdWords & Google Remarketing. These tools enable users who
              have already visited our website and are interested in the offer
              to be addressed again through targeted advertising on the pages of
              the Google partner network. The use of cookies is also used to
              place advertisements.
            </p>
            <p>
              The information generated by the cookie about your use of our
              website is usually transferred to a Google server in the USA and
              stored there. However, within the member states of the European
              Union or in other signatory states to the Agreement on the
              European Economic Area, your IP address will first be shortened by
              Google on our website. For this purpose we have implemented the
              code “gat._anonymizeIp() ;” to ensure anonymous collection of IP
              addresses (so-called IP masking).
            </p>
            <p>
              Only in exceptional cases is the complete IP address transmitted
              to a Google server in the USA and abbreviated there. If personal
              data is exceptionally transferred to the USA, a data protection
              level appropriate to the data protection level in the EU is
              ensured there by Google’s certification according to the so-called
              “Privacy Shield Agreement” between the EU and the USA
              (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).
            </p>
            <p>
              Google will use the information about your use of the website on
              our behalf within the framework of Google Analytics in order to
              evaluate your use of the website, to compile reports on website
              activities and to provide other services connected with the use of
              the website and the Internet. The IP address transmitted by your
              browser as part of Google Analytics and Google Tag Manager is not
              merged with other Google data.
              <br />
              You can prevent cookies from being saved by adjusting your browser
              software or the operating system of your mobile device
              accordingly; however, we would like to point out that in this case
              you may not be able to use all functions of our website to their
              full extent. In addition, you can prevent the collection of data
              generated by the cookie about your use of our website (including
              IP address) by Google and its processing by Google by downloading
              and installing the browser plug-in under the following link:
              http://tools.google.com/dlpage/gaoptout.
              <br />
              Further information on the terms of use and data protection can be
              found at http://www.google.com/analytics/terms/de.html and
              https://www.google.de/intl/de/policies/privacy/.
            </p>
            <p>
              oogle AdWords & Google Remarketing enable users who have already
              visited our website and are interested in the offer to be
              addressed again through targeted advertising on the pages of the
              Google partner network. The advertisement is placed through the
              use of so-called “Web Beacons” on our website and all other
              websites that participate in the AdWords & Remarketing program.
              These are pixels that are built into our website but are not
              visible to you. The web beacon causes a cookie to be stored on
              your end device. The cookie then records which websites you have
              visited, what content or offers you are interested in and the
              website from which you accessed our website. All data is only
              stored pseudonymously: The information only allows conclusions to
              be drawn about the behaviour of the respective user for whom the
              cookie was set. However, it is generally not possible to identify
              the actual person on whose device the cookie was set.
              <br />
              If you do not wish to receive interest-based advertising, you can
              disable Google’s use of cookies for these purposes by visiting
              https://www.google.de/settings/ads Both services are also subject
              to Google’s privacy policy, which can be viewed at
              http://www.google.com/intl/de/policies/privacy/
            </p>
            <p>
              <strong>
                You can also prevent data processing here by clicking on the
                link: http://tools.google.com/dlpage/gaoptout. An opt-out cookie
                is stored on your device. If you delete your cookies, you must
                click this link again.
              </strong>
            </p>
            <p>
              Google AdSense is an advertising service provided by Google Inc.
              This service uses the “Doubleclick” cookie, which tracks use of
              this Website and user behavior concerning ads, products and
              services offered. The personal data collected are cookies and
              usage data. Users are free to disable all the Doubleclick Cookies
              by clicking on: google.com/settings/ads/onweb/optout.
            </p>
            <h4>Twitter Share Button</h4>
            <p>
              Functions of the Twitter service have been integrated into our
              website and app. These features are offered by Twitter Inc., 1355
              Market Street, Suite 900, San Francisco, CA 94103, USA. When you
              use Twitter and the “Retweet” function, the websites you visit are
              connected to your Twitter account and made known to other users.
              In doing so, data will also be transferred to Twitter. We would
              like to point out that, as the provider of these pages, we have no
              knowledge of the content of the data transmitted or how it will be
              used by Twitter. For more information on Twitter’s privacy policy,
              please go to https://twitter.com/privacy.
              <br />
              Your privacy preferences with Twitter can be modified in your
              account settings at https://twitter.com/account/settings.
            </p>
            <h4>Facebook plugins (Like & Share buttons)</h4>
            <p>
              Facebook plugins are integrated into our website. You can
              recognize the Facebook plugins by the Facebook logo or the “I
              like” button on our page. An overview of the Facebook plugins can
              be found here: http://developers.facebook.com/docs/plugins/. These
              are services of Facebook Ireland Ltd, 4 Grand Canal Square, Grand
              Canal Harbour, Dublin 2, Ireland (“Facebook EU”), which also
              transfer data to Facebook Inc., 1 Hacker Way, Menlo Park, CA
              94025, USA (“Facebook USA”; together with Facebook EU as a whole
              “Facebook”). Like Google, Facebook USA is also certified according
              to the Privacy Shield Agreement and therefore offers an adequate
              level of data protection outside the EU
              ((https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active).
              <br />
              When you visit our site, a direct connection between your browser
              and the Facebook server is established via the plugin. This
              enables Facebook to receive information that you have visited our
              site from your IP address. If you click on the Facebook “Like
              button” while you are logged into your Facebook account, you can
              link the content of our site to your Facebook profile. This allows
              Facebook to associate visits to our site with your user account.
              Please note that, as the operator of this site, we have no
              knowledge of the content of the data transmitted to Facebook or of
              how Facebook uses these data. For more information, please see
              Facebook’s privacy policy at
              https://de-de.facebook.com/policy.php.
            </p>
            <p>
              If you do not want Facebook to associate your visit to our site
              with your Facebook account, please log out of your Facebook
              account. Please note that as the provider of the Website, we do
              not receive any information about the content of the transmitted
              data or its use by Facebook. However, if you are not a Facebook
              member, you will still receive and store your IP address and
              receive information when you visit these websites and
              applications, including device information (operating system,
              hardware version, device settings, file and software names and
              types, battery and signal strength), device identifiers, device
              locations, including specific geographic locations, such as GPS,
              Bluetooth or WiFi signals, connection information such as the name
              of your mobile operator or ISP, browser type, language and time
              zone, mobile phone number) and information about your activity.
              According to Facebook, only an anonymized IP address is processed.
            </p>
            <p>
              For more information, please see Facebook’s privacy policy at
              http://de-de.facebook.com/policy.php or
              https://www.facebook.com/business/help/651294705016616. If you do
              not want Facebook to link your visit to our website to your
              Facebook account, please log out of your Facebook account. Further
              settings and objections to the use of the data for advertising
              purposes are possible within the Facebook profile settings:
              https://www.facebook.com/settings?tab=ads.
            </p>
            <p>
              Facebook users should note that this website also uses Facebook’s
              Website Custom Audiences communication tool.
              <br />
              For this purpose, so-called Facebook pixels are integrated into
              our website, which identify you as a visitor to our website in
              anonymous form, i.e. without identifying you as a person. When you
              later log in to Facebook, a non-reversible, non-personal checksum
              (profile) of your usage data is sent to Facebook for analysis and
              marketing purposes. For more information about the purpose and
              scope of data collection and the further processing and use of the
              data by Facebook as well as your setting options to protect your
              privacy, please refer to Facebook’s data protection guidelines,
              which can be found at
              https://www.facebook.com/ads/webseite_custom_audiences/ and
              https://www.facebook.com/privacy/explanation, among others. If you
              wish to object to the use of the Facebook website Custom
              Audiences/, you can do so at
              https://www.facebook.com/ads/webseite_custom_audiences/.
            </p>
            <h4>Use of “Mailchimp” newsletter service:</h4>
            <p>
              Our e-mail newsletters for partners are sent via the technical
              service provider The Rocket Science Group, LLC d/b/a MailChimp,
              675 Ponce de Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA
              (http://www.mailchimp.com/), to whom we pass on the data you
              provided when registering for the newsletter.
              <br />
              MailChimp uses this information to send and statistically evaluate
              the newsletter on our behalf. For evaluation purposes, the e-mails
              sent contain so-called web beacons or tracking pixels, which
              represent single-pixel image files stored on our website. This
              allows you to determine whether a newsletter message has been
              opened and which links have been clicked on. In addition,
              technical information is recorded (e.g. time of retrieval, IP
              address, browser type and operating system). The data are raised
              exclusively pseudonymised and are not linked with your further
              personal data, a direct personal relationship is excluded. This
              data is for statistical analysis purposes only. The results of
              these analyses can be used to better adapt future newsletters to
              the interests of the recipients.
            </p>
            <p>
              If you wish to object to the data analysis for statistical
              evaluation purposes, you must unsubscribe from the newsletter.
              <br />
              Furthermore, MailChimp can use this data according to art. 6 par.
              1 lit. f DSGVO even on the basis of its own legitimate interest in
              the demand-oriented design and optimization of the service as well
              as for market research purposes, for example to determine from
              which countries the recipients come. However, MailChimp does not
              use the data of our newsletter recipients to write them down or
              pass them on to third parties.
              <br />
              In order to protect your data in the USA, we have concluded a data
              processing order with MailChimp on the basis of the standard
              contractual clauses of the European Commission in order to enable
              the transmission of your personal data to MailChimp. If
              interested, this data processing agreement can be viewed at the
              following Internet address:
              http://mailchimp.com/legal/forms/data-processing-agreement/.
              <br />
              The data protection regulations of MailChimp can be viewed here:
              https://mailchimp.com/legal/privacy/.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default CookieInformation;
