import React from "react";

function Certification() {
  return (
    <section className="landing">
      <h1 className="landing__title">Certifications</h1>
      <div className="certification">
        <ul className="certification__list">
          {/* <li>
            <svg
              width="106"
              height="80"
              viewBox="0 0 106 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.8612 50.9183L88.4574 48.9622C89.8775 47.3081 90.8868 45.7109 91.4851 44.1376L103.635 59.1205C105.84 61.9746 105.735 62.5032 102.06 62.5032H100.8C97.1245 62.5032 95.7593 61.7632 93.5541 59.1205L86.8612 50.9183ZM86.8612 30.536L93.5541 22.3338C95.7593 19.6911 97.1245 18.9511 100.8 18.9511H102.06C105.735 18.9511 105.84 19.4797 103.635 22.3338L91.4851 37.3167C90.8868 35.7434 89.8775 34.1462 88.4574 32.4921L86.8612 30.536Z"
                fill="#0B632E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M68.3059 62.5032C64.6308 62.5032 64.5256 61.9746 66.7308 59.1205L79.3319 43.5813C80.2769 42.4186 80.802 41.4671 80.802 40.7271C80.802 39.8814 80.2769 38.9301 79.3319 37.873L66.7308 22.3338C64.5256 19.4797 64.6308 18.9511 68.3059 18.9511H69.5661C73.2413 18.9511 74.6065 19.6911 76.8117 22.3338L86.4724 34.1732C90.5679 38.9301 90.5679 42.5242 86.4724 47.2811L76.8117 59.1205C74.6065 61.7632 73.2413 62.5032 69.5661 62.5032H68.3059Z"
                fill="#0B632E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 76.0549C0 79.211 0.783794 80 3.91897 80H4.96393C8.09911 80 8.8829 79.211 8.8829 76.0549V57.7323C11.2343 61.502 15.5016 63.4307 21.6848 63.4307C33.7899 63.4307 39.799 57.0309 39.799 44.3191V36.692C39.799 23.98 33.3545 18.0187 19.8559 18.0187C7.31531 18.0187 0 24.1554 0 36.692V76.0549ZM30.829 44.4944C30.829 51.8585 28.3906 54.9269 19.9431 54.9269C11.3213 54.9269 8.8829 51.7708 8.8829 44.4944V36.9549C8.8829 29.5908 11.4956 26.4347 19.9431 26.4347C28.5647 26.4347 30.829 29.5908 30.829 36.9549V44.4944Z"
                fill="#0B632E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.1758 58.4527C48.1758 61.6088 48.9596 62.3978 52.0948 62.3978H53.2268C56.362 62.3978 57.1458 61.6088 57.1458 58.4527V22.8595C57.1458 19.7034 56.362 18.9144 53.2268 18.9144H52.0948C48.9596 18.9144 48.1758 19.7034 48.1758 22.8595V58.4527ZM48.7854 9.44626C50.9626 11.5503 54.446 11.5503 56.5362 9.44626C58.7134 7.25447 58.7134 3.74785 56.5362 1.64384C54.446 -0.547948 50.9626 -0.547948 48.7854 1.64384C46.6082 3.74785 46.6082 7.25447 48.7854 9.44626Z"
                fill="#0B632E"
              />
            </svg>
          </li> */}
          <li>
            <a href="https://siofolio.notion.site/Certifications-f2ce281ac05c405e9d1023b5dd3000d1">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                  fill="#0B632E"
                />
                <path
                  d="M29.875 50.8906H31.9219V42.7891H29.875V50.8906ZM20.8906 46.8359C20.8906 49.4453 22.9063 51.0313 25.2031 51.0313C26.1172 51.0313 26.8125 50.8203 27.0703 50.7422V48.5703C26.9766 48.6172 26.3125 49 25.3516 49C23.9844 49 23.1094 48.0391 23.1094 46.8359C23.1094 45.6016 24.0234 44.6719 25.3516 44.6719C26.3281 44.6719 26.9844 45.0625 27.0703 45.1094V42.9375C26.875 42.8828 26.1641 42.6484 25.2031 42.6484C22.7188 42.6484 20.8906 44.4219 20.8906 46.8359ZM42.2266 46.8359C42.2266 49.4453 44.2422 51.0313 46.5391 51.0313C47.4453 51.0313 48.1484 50.8203 48.3984 50.7422V48.5703C48.3125 48.6172 47.6406 49 46.6797 49C45.3203 49 44.4375 48.0391 44.4375 46.8359C44.4375 45.6016 45.3516 44.6719 46.6797 44.6719C47.6563 44.6719 48.3125 45.0625 48.3984 45.1094V42.9375C48.2031 42.8828 47.4922 42.6484 46.5391 42.6484C44.0469 42.6484 42.2266 44.4219 42.2266 46.8359ZM52.7188 46.8359C52.7188 45.6641 53.6172 44.7031 54.8359 44.7031C56.0469 44.7031 56.9531 45.6563 56.9531 46.8359C56.9531 48.0156 56.0469 48.9687 54.8359 48.9687C53.6172 48.9766 52.7188 48.0156 52.7188 46.8359ZM50.5547 46.8359C50.5547 49.1563 52.3438 51.0313 54.8281 51.0313C57.3203 51.0313 59.1094 49.1563 59.1094 46.8359C59.1094 44.5234 57.3203 42.6484 54.8281 42.6484C52.3438 42.6484 50.5547 44.5234 50.5547 46.8359ZM34.6641 45.1797C34.6641 46.5234 35.6172 47.1875 36.75 47.5469C36.875 47.5859 37.0625 47.6484 37.1875 47.6875C37.6953 47.8438 38.0938 48.0859 38.0938 48.4922C38.0938 48.9531 37.625 49.25 36.6094 49.25C35.7188 49.25 34.8594 48.9922 34.6797 48.9453V50.8125C34.7813 50.8359 35.7969 51.0313 36.8828 51.0313C38.4453 51.0313 40.2344 50.3516 40.2344 48.3125C40.2344 47.3281 39.6328 46.4141 38.3047 46L37.7422 45.8203C37.4063 45.7109 36.8047 45.5391 36.8047 45.0469C36.8047 44.6562 37.25 44.3828 38.0703 44.3828C38.7734 44.3828 39.6406 44.6172 39.6641 44.6328V42.8984C39.6016 42.8828 38.6641 42.6406 37.6719 42.6406C35.7969 42.6484 34.6641 43.6641 34.6641 45.1797ZM16.6953 34.0859V36.2109C16.6953 36.7734 17.1563 37.2266 17.7109 37.2266C18.2734 37.2266 18.7266 36.7734 18.7266 36.2109V34.0859C18.7266 33.5312 18.2734 33.0703 17.7109 33.0703C17.1484 33.0781 16.6953 33.5312 16.6953 34.0859ZM38.9922 34.0859V36.2109C38.9922 36.7734 39.4453 37.2266 40.0078 37.2266C40.5625 37.2266 41.0156 36.7734 41.0156 36.2109V34.0859C41.0156 33.5312 40.5625 33.0703 40.0078 33.0703C39.4453 33.0781 38.9922 33.5312 38.9922 34.0859ZM61.2813 34.0859V36.2109C61.2813 36.7734 61.7344 37.2266 62.2891 37.2266C62.8438 37.2266 63.2969 36.7734 63.2969 36.2109V34.0859C63.2969 33.5312 62.8438 33.0703 62.2891 33.0703C61.7344 33.0781 61.2813 33.5312 61.2813 34.0859ZM22.2656 31.2969V36.2109C22.2656 36.7734 22.7188 37.2266 23.2813 37.2266C23.8438 37.2266 24.2969 36.7734 24.2969 36.2109V31.2969C24.2969 30.7422 23.8438 30.2813 23.2813 30.2813C22.7188 30.2813 22.2656 30.7422 22.2656 31.2969ZM33.4141 31.2969V36.2109C33.4141 36.7734 33.8672 37.2266 34.4297 37.2266C34.9922 37.2266 35.4453 36.7734 35.4453 36.2109V31.2969C35.4453 30.7422 34.9922 30.2813 34.4297 30.2813C33.875 30.2813 33.4141 30.7422 33.4141 31.2969ZM44.5625 31.2969V36.2109C44.5625 36.7734 45.0156 37.2266 45.5781 37.2266C46.1328 37.2266 46.5938 36.7734 46.5938 36.2109V31.2969C46.5938 30.7422 46.1406 30.2813 45.5781 30.2813C45.0156 30.2813 44.5625 30.7422 44.5625 31.2969ZM55.7031 31.2969V36.2109C55.7031 36.7734 56.1563 37.2266 56.7109 37.2266C57.2813 37.2266 57.7344 36.7734 57.7344 36.2109V31.2969C57.7344 30.7422 57.2813 30.2813 56.7109 30.2813C56.1563 30.2813 55.7031 30.7422 55.7031 31.2969ZM27.8438 27.4766V38.2344C27.8438 38.7969 28.2969 39.25 28.8594 39.25C29.4141 39.25 29.875 38.7969 29.875 38.2344V27.4766C29.875 26.9141 29.4219 26.4609 28.8594 26.4609C28.2969 26.4688 27.8438 26.9219 27.8438 27.4766ZM50.1406 27.4766V38.2344C50.1406 38.7969 50.5938 39.25 51.1484 39.25C51.7109 39.25 52.1563 38.7969 52.1563 38.2344V27.4766C52.1563 26.9141 51.7031 26.4609 51.1484 26.4609C50.5938 26.4688 50.1406 26.9219 50.1406 27.4766Z"
                  fill="#F5EDDF"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://siofolio.notion.site/Certifications-f2ce281ac05c405e9d1023b5dd3000d1">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H80V80H0V0Z" fill="#0B632E" />
                <rect
                  x="22.3994"
                  y="20.8"
                  width="38.4"
                  height="38.4"
                  fill="white"
                />
                <path
                  d="M20.2753 17.6697C19.2403 17.9254 18.2867 18.7042 17.8448 19.6457L17.6006 20.1804V61.4429L17.8913 62.024C18.2518 62.7563 18.9263 63.4304 19.624 63.7559L20.159 64H61.4422L62.0236 63.7094C62.7563 63.3491 63.4308 62.6749 63.7564 61.9775L64.0006 61.4429V20.1804L63.7099 19.5992C63.3494 18.8669 62.6749 18.1928 61.9771 17.8673L61.4422 17.6232L41.0332 17.6C29.8111 17.6 20.473 17.6232 20.2753 17.6697ZM41.5565 23.7138C43.1845 24.0974 43.9986 24.388 45.6266 25.1783C50.4295 27.5262 53.8135 31.8733 55.0113 37.22C55.2439 38.2661 55.2788 38.7427 55.2788 40.8116C55.2788 42.6713 55.2323 43.4152 55.0695 44.1824C53.3018 52.4465 46.2546 58.2465 37.9515 58.2465C35.4047 58.2465 33.3929 57.8513 31.2066 56.9214C30.1135 56.4681 28.5552 55.608 27.9039 55.1198L27.6248 54.9106L30.3344 51.6793C31.8229 49.9126 33.1487 48.3319 33.2882 48.1691L33.544 47.8785L34.265 48.2389C36.2536 49.2385 39.0097 49.3315 41.0681 48.4597C42.7775 47.7391 44.4986 46.1699 45.2545 44.624C45.9406 43.2292 46.1848 42.0669 46.1267 40.4745C46.0337 38.1731 45.2196 36.3832 43.5567 34.8024C42.0565 33.3844 40.4633 32.6986 38.4166 32.594C36.9397 32.5126 35.8582 32.6986 34.6837 33.21C34.1836 33.4425 33.7069 33.6517 33.6371 33.6749C33.5673 33.7098 32.1834 32.1523 30.567 30.2228L27.6248 26.7126L27.9039 26.5034C28.4621 26.0617 30.0321 25.19 31.0205 24.7715C32.2997 24.2136 33.4626 23.8649 34.9279 23.5976C36.5443 23.2954 40.0214 23.3651 41.5565 23.7138Z"
                  fill="#0B632E"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Certification;
