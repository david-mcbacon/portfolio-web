import Heading from "@/core/heading";

export const metadata = {
  title: "Cookie Policy • David Slaninka • Full-Stack Engineer",
  description:
    "This Cookie Policy provides details on the use and purpose of cookies utilized on David Slaninka's Portfolio Web App.",
};

const CookiePolicy = () => {
  return (
    <main className="px-6 py-20 md:px-14 xl:px-[13.5rem]">
      <div className="flex flex-col space-y-14">
        <div className="mt-10 flex flex-col items-center space-y-3">
          <Heading type={1} className="text-3xl">
            Cookie Policy
          </Heading>
          <p className="text-secondary-500">Last Updated: October 26, 2023</p>
        </div>
        <div
          className={
            "m-auto flex w-full max-w-xl flex-col items-start space-y-8" +
            " justify-center"
          }
        >
          <div>
            <p>
              <strong>1. Introduction</strong>
            </p>
            <p>
              This Cookie Policy provides details on the use and purpose of
              cookies utilized on David Slaninka&apos;s Portfolio Web App
              (referred to as &apos;the Website&apos; in this document). By
              using the Website, you consent to the use of cookies in accordance
              with this policy.
            </p>
          </div>

          <div>
            <p>
              <strong>2. What are cookies?</strong>
            </p>
            <p>
              Cookies are small files that a website may place on your
              device&apos;s hard drive or in your browser memory when you visit.
              They are used to ensure websites function correctly, to remember
              preferences, and to provide website owners with information on
              website usage.
            </p>
          </div>

          <div>
            <p>
              <strong>3. How does the Website use cookies?</strong>
            </p>
            <p className="mb-2">
              The Website uses cookies for the following purposes:
            </p>
            <ul className="flex flex-col space-y-2 pl-4">
              <li>
                <strong>b. Functional Services</strong>: To ensure users can
                seamlessly switch between conversations, store voice notes and
                chat with the AI-powered tools.
              </li>
              <li>
                <strong>c. Analytics and Performance</strong>: To gather data on
                how users interact with the Website, which helps in improving
                user experience. This includes the use of Google Analytics.
              </li>
            </ul>
          </div>

          <div>
            <p>
              <strong>4. Third-Party Cookies</strong>
            </p>
            <p>
              The Website uses Posthog, a web analytics service provided by
              Posthog, Inc. Posthog uses cookies to help analyze how users use
              the Website. The information generated by the cookie about your
              use of the Website will be transmitted to and stored by Posthog on
              servers in the European Union. However, you have the option to
              accept or reject these third-party cookies via my cookie banner.
              If you choose to reject these cookies, Posthog will not store any
              information about your visit.
            </p>
          </div>

          <div>
            <p>
              <strong>5. Managing Cookies</strong>
            </p>
            <p>
              Most web browsers allow control of cookies through the browser
              settings. You can set your browser to notify you when you receive
              a cookie, which will enable you to decide if you want to accept it
              or not. If you choose not to accept a cookie, some features of the
              Website may not function as intended. Additionally, you can manage
              your preference for third-party cookies directly through our
              cookie banner on the Website. For more information on cookies and
              how to manage them, visit www.aboutcookies.org or
              www.allaboutcookies.org.
            </p>
          </div>

          <div>
            <p>
              <strong>6. Updates to this Cookie Policy</strong>
            </p>
            <p>
              This Cookie Policy may be updated from time to time. Any changes
              will be posted on this page. Please check back frequently to see
              any updates or changes.
            </p>
          </div>

          <div>
            <p>
              <strong>7. Contact</strong>
            </p>
            <p>
              For any questions regarding this Cookie Policy, please contact me
              through the Website&apos;s contact page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicy;
