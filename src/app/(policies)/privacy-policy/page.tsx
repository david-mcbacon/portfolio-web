import Heading from "@/core/heading";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy • David Slaninka • Full-Stack Engineer",
  description:
    "This Privacy Policy outlines the types of personal information collected when you use David Slaninka's Portfolio Web App, how it is used, and with whom it might be shared.",
};

const PrivacyPolicy = () => {
  return (
    <main className="px-6 py-20 md:px-14 xl:px-[13.5rem]">
      <div className="flex flex-col space-y-14">
        <div className="mt-10 flex flex-col items-center space-y-3">
          <Heading type={1} className="text-3xl">
            Privacy Policy
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
              Thank you for visiting my portfolio webapp. Protecting your
              privacy is a top priority for me. This Privacy Policy outlines the
              types of personal information I collect when you use my webapp,
              how I use this information, and with whom it might be shared.
              Please read this policy carefully.
            </p>
          </div>

          <div>
            <p>
              <strong>2. Data Collection</strong>
            </p>
            <ul className="flex flex-col space-y-2 pl-4">
              <li>
                <strong>a. Information You Provide:</strong> When you sign up on
                my webapp, I collect certain information like your name, email
                address, and any other details you choose to provide.
              </li>
              <li>
                <strong>b. Automated Data Collection:</strong> This includes the
                use of cookies to store user data from the backend and Google
                Analytics to help understand web traffic and page usage.
              </li>
              <li>
                <strong>c. AI Conversations and Voice Notes:</strong> When you
                engage with the AI Chatbot or use the Voice Notes feature, I
                store the conversation history and voice recordings.
              </li>
            </ul>
          </div>

          <div>
            <p>
              <strong>3. Use of Information</strong>
            </p>
            <ul className="flex flex-col space-y-2 pl-4">
              <li>
                <strong>a. Personalizing Your Experience:</strong> Your data
                helps me respond better to your individual needs.
              </li>
              <li>
                <strong>b. Improving the Webapp:</strong> I continually strive
                to improve the offerings based on the information and feedback I
                receive from you.
              </li>
              <li>
                <strong>c. Processing Requests:</strong> To handle any requests
                or services you might avail, like using the AI-powered products.
              </li>
              <li>
                <strong>d. Communication:</strong> Sending occasional emails
                pertaining to updates, new products, or other related
                information.
              </li>
            </ul>
          </div>

          <div>
            <p>
              <strong>4. Data Sharing and Transfer</strong>
            </p>
            <ul className="flex flex-col space-y-2 pl-4">
              <li>
                <strong>a. Third-party Service Providers:</strong> Some
                functions of the webapp are outsourced to third-party services,
                like Google Analytics. These service providers only have access
                to personal information needed to perform their functions and
                may not use it for other purposes.
              </li>
              <li>
                <strong>b. Compliance with Law and Safety:</strong> I might
                disclose your information when I believe it&apos;s appropriate
                to comply with the law, enforce site policies, or protect mine
                or others&apos; rights, property, or safety.
              </li>
            </ul>
          </div>

          <div>
            <p>
              <strong>5. Data Security</strong>
            </p>
            <ul className="flex flex-col space-y-2 pl-4">
              <li>
                <strong>a. Protection Measures:</strong> I implement various
                security measures to maintain the safety of your personal
                information.
              </li>
              <li>
                <strong>b. Encryption:</strong> Your sensitive information is
                encrypted via Secure Socket Layer (SSL) technology.
              </li>
            </ul>
          </div>

          <div>
            <p>
              <strong>6. User Rights</strong>
            </p>
            <ul className="flex flex-col space-y-2 pl-4">
              <li>
                <strong>a. Access and Rectification:</strong> You have the right
                to access, correct, or delete your personal data.
              </li>
              <li>
                <strong>b. Limitation and Opposition:</strong> You can limit the
                use of your personal data and oppose the processing of your data
                for legitimate reasons.
              </li>
              <li>
                <strong>c. Data Portability:</strong> You have the right to
                receive personal data in a transferable format.
              </li>
            </ul>
          </div>

          <div>
            <p>
              <strong>7. Cookies</strong>
            </p>
            <p>
              Please refer to the{" "}
              <Link href="/policies/cookie-policy">Cookie Policy</Link> for
              information about how cookies are used on this webapp.
            </p>
          </div>

          <div>
            <p>
              <strong>8. Consent</strong>
            </p>
            <p>By using my webapp, you consent to this privacy policy.</p>
          </div>

          <div>
            <p>
              <strong>9. Changes to the Privacy Policy</strong>
            </p>
            <p>
              Any changes to the privacy policy will be posted on this page.
              This policy was last modified on [Date].
            </p>
          </div>

          <div>
            <p>
              <strong>10. Contact Information</strong>
            </p>
            <p>
              If there are any questions regarding this privacy policy, you may
              contact me using the information on the &apos;Contact&apos; page
              of the webapp.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
