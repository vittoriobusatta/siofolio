import React from "react";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Generated by create next app"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://www.example.com" />
      </Head>
      <section className="landing">
        <svg
          width="698"
          height="280"
          viewBox="0 0 698 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M78.824 75.592C87.912 71.112 91.24 64.072 91.24 57.032C91.24 41.288 76.776 32.328 54.76 32.328C43.88 32.328 35.048 33.352 26.216 33.352C17.384 33.352 14.184 32.968 10.728 32.968C6.76 32.968 5.096 35.144 5.096 37.448C5.096 43.208 12.52 40.904 12.52 50.12V108.232C12.52 117.448 5.096 115.144 5.096 120.904C5.096 123.208 6.76 125.384 10.728 125.384C14.184 125.384 17.384 125 26.216 125C34.664 125 49.128 125.64 59.112 125.64C85.608 125.64 97.896 116.04 97.896 98.76C97.896 87.624 90.6 79.432 78.824 75.592ZM39.912 50.504C39.912 45.768 43.368 44.744 47.336 44.744H48.104C56.04 44.744 62.056 50.12 62.056 58.696C62.056 67.528 55.656 70.984 48.872 70.984H44.648C40.808 70.984 39.912 69.96 39.912 67.4V50.504ZM51.816 113.48H50.536C42.472 113.48 39.912 112.584 39.912 104.52V87.112C39.912 83.784 41.064 82.504 44.264 82.504H48.488C60.52 82.504 67.944 88.264 67.944 98.888C67.944 107.592 61.288 113.48 51.816 113.48ZM148.619 127.816C172.427 127.816 188.299 119.112 188.299 97.352C188.299 95.432 188.043 92.872 187.787 89.288L184.971 54.344C184.843 52.808 184.587 50.504 184.587 48.712C184.587 44.616 187.019 43.208 189.195 41.928C190.987 40.904 192.651 40.008 192.651 37.448C192.651 35.144 190.987 32.968 187.019 32.968C183.435 32.968 179.851 33.352 176.651 33.352C173.195 33.352 169.483 32.968 165.515 32.968C161.547 32.968 159.243 35.144 159.243 37.448C159.243 40.776 161.419 41.672 163.851 42.824C166.667 44.104 169.611 45.384 169.995 50.12L173.323 90.312C173.451 92.104 173.707 94.152 173.707 96.2C173.707 108.488 164.619 112.456 154.635 112.456C141.835 112.456 135.819 105.8 135.819 95.944C135.819 93.768 136.203 89.544 136.331 87.752L139.275 50.12C139.659 45.128 142.091 43.592 144.139 42.184C145.931 41.16 147.467 40.136 147.467 37.448C147.467 35.144 145.803 32.968 141.835 32.968C138.379 32.968 134.411 33.352 125.579 33.352C116.747 33.352 113.547 32.968 110.091 32.968C106.123 32.968 104.459 35.144 104.459 37.448C104.459 40.008 105.995 40.904 107.787 41.928C109.707 43.208 111.883 44.488 111.883 48.712C111.883 50.504 111.627 52.808 111.499 54.344L108.811 87.24C108.555 90.312 108.299 94.024 108.299 96.712C108.299 119.24 125.067 127.816 148.619 127.816ZM215.459 128.2C219.171 128.2 219.811 123.848 223.779 123.848C227.363 123.848 234.915 127.176 246.179 127.176C268.451 127.176 284.195 115.656 284.195 96.328C284.195 74.696 264.483 68.04 244.771 62.664C232.867 59.336 226.339 57.672 226.339 51.528C226.339 46.792 230.179 43.976 237.091 43.976C249.379 43.976 260.131 52.552 266.275 58.824C268.707 61.256 270.115 62.664 272.675 62.664C274.467 62.664 276.515 61.128 276.515 58.568C276.515 56.008 274.851 52.168 270.627 45.128L267.171 39.368C263.587 33.48 262.563 30.024 258.083 30.024C254.243 30.024 253.987 34.248 250.915 34.248C247.843 34.248 242.723 31.176 232.355 31.176C215.331 31.176 201.635 42.312 201.635 58.184C201.635 77.768 221.859 85.064 237.603 89.416C250.403 93 259.491 95.304 259.491 103.496C259.491 109.384 254.627 113.992 244.387 113.992C228.259 113.992 217.123 102.856 209.315 94.664C207.523 92.744 205.987 90.952 203.299 90.952C200.995 90.952 198.691 92.744 198.691 96.456C198.691 99.272 200.355 103.368 202.787 108.616L208.675 121.416C210.467 125.256 212.131 128.2 215.459 128.2ZM376.639 108.616L357.951 59.208C355.647 53.32 353.087 46.024 351.423 41.16C348.991 33.864 346.815 32.328 335.935 32.328C325.055 32.328 322.239 33.608 319.807 41.032C318.271 46.024 315.711 53.32 313.407 59.208L294.719 108.616C291.391 117.448 283.711 115.4 283.711 121.544C283.711 123.72 285.375 125.384 288.191 125.384C292.543 125.384 295.359 125 299.199 125C302.911 125 307.007 125.384 311.359 125.384C315.583 125.384 318.015 123.848 318.015 121.032C318.015 115.016 308.671 117.448 308.671 110.92C308.671 109.768 309.311 107.72 310.463 104.648L311.743 101.192C312.767 98.248 313.663 96.712 317.247 96.712H340.031C343.615 96.712 344.511 98.248 345.535 101.192L346.815 104.904C347.711 107.336 348.223 109.512 348.223 110.92C348.223 117.448 339.263 115.016 339.263 121.032C339.263 123.848 341.823 125.384 345.919 125.384C350.399 125.384 355.903 125 364.735 125C373.567 125 378.047 125.384 382.399 125.384C385.215 125.384 386.879 123.72 386.879 121.544C386.879 115.656 379.839 117.064 376.639 108.616ZM335.935 84.552H321.599C318.527 84.552 318.655 82.632 319.295 80.968L328.767 55.752L338.111 80.968C338.751 82.632 339.135 84.552 335.935 84.552ZM406.658 125.384C410.37 125.384 414.594 125 424.194 125C433.922 125 437.89 125.384 441.73 125.384C445.698 125.384 447.362 123.208 447.362 120.904C447.362 114.376 437.89 117.448 437.89 108.232V51.784C437.89 47.432 439.554 45.384 443.65 45.384H444.93C451.586 45.384 456.706 51.656 465.154 61.128C467.202 63.432 468.738 64.84 471.042 64.84C473.474 64.84 475.65 62.92 475.65 59.464C475.65 56.52 474.498 54.216 472.706 49.608L467.714 36.808C465.794 31.944 463.746 30.024 460.546 30.024C456.706 30.024 455.81 33.352 449.538 33.352H398.85C392.578 33.352 391.682 30.024 387.842 30.024C384.642 30.024 382.594 31.944 380.674 36.808L375.682 49.608C373.89 54.216 372.738 56.52 372.738 59.464C372.738 62.92 374.914 64.84 377.346 64.84C379.65 64.84 381.186 63.432 383.234 61.128C391.682 51.656 396.802 45.384 403.458 45.384H404.738C408.834 45.384 410.498 47.432 410.498 51.784V108.232C410.498 117.448 401.026 114.376 401.026 120.904C401.026 123.208 402.69 125.384 406.658 125.384ZM511.658 125.384C515.37 125.384 519.594 125 529.194 125C538.922 125 542.89 125.384 546.73 125.384C550.698 125.384 552.362 123.208 552.362 120.904C552.362 114.376 542.89 117.448 542.89 108.232V51.784C542.89 47.432 544.554 45.384 548.65 45.384H549.93C556.586 45.384 561.706 51.656 570.154 61.128C572.202 63.432 573.738 64.84 576.042 64.84C578.474 64.84 580.65 62.92 580.65 59.464C580.65 56.52 579.498 54.216 577.706 49.608L572.714 36.808C570.794 31.944 568.746 30.024 565.546 30.024C561.706 30.024 560.81 33.352 554.538 33.352H503.85C497.578 33.352 496.682 30.024 492.842 30.024C489.642 30.024 487.594 31.944 485.674 36.808L480.682 49.608C478.89 54.216 477.738 56.52 477.738 59.464C477.738 62.92 479.914 64.84 482.346 64.84C484.65 64.84 486.186 63.432 488.234 61.128C496.682 51.656 501.802 45.384 508.458 45.384H509.738C513.834 45.384 515.498 47.432 515.498 51.784V108.232C515.498 117.448 506.026 114.376 506.026 120.904C506.026 123.208 507.69 125.384 511.658 125.384ZM658.639 108.616L639.951 59.208C637.647 53.32 635.087 46.024 633.423 41.16C630.991 33.864 628.815 32.328 617.935 32.328C607.055 32.328 604.239 33.608 601.807 41.032C600.271 46.024 597.711 53.32 595.407 59.208L576.719 108.616C573.391 117.448 565.711 115.4 565.711 121.544C565.711 123.72 567.375 125.384 570.191 125.384C574.543 125.384 577.359 125 581.199 125C584.911 125 589.007 125.384 593.359 125.384C597.583 125.384 600.015 123.848 600.015 121.032C600.015 115.016 590.671 117.448 590.671 110.92C590.671 109.768 591.311 107.72 592.463 104.648L593.743 101.192C594.767 98.248 595.663 96.712 599.247 96.712H622.031C625.615 96.712 626.511 98.248 627.535 101.192L628.815 104.904C629.711 107.336 630.223 109.512 630.223 110.92C630.223 117.448 621.263 115.016 621.263 121.032C621.263 123.848 623.823 125.384 627.919 125.384C632.399 125.384 637.903 125 646.735 125C655.567 125 660.047 125.384 664.399 125.384C667.215 125.384 668.879 123.72 668.879 121.544C668.879 115.656 661.839 117.064 658.639 108.616ZM617.935 84.552H603.599C600.527 84.552 600.655 82.632 601.295 80.968L610.767 55.752L620.111 80.968C620.751 82.632 621.135 84.552 617.935 84.552Z"
            fill="#0B632E"
          />
          <path
            d="M26.056 254.288C28.84 254.288 32.008 254 39.208 254C46.504 254 49.48 254.288 52.36 254.288C55.336 254.288 56.584 252.656 56.584 250.928C56.584 246.032 49.48 248.336 49.48 241.424V199.088C49.48 195.824 50.728 194.288 53.8 194.288H54.76C59.752 194.288 63.592 198.992 69.928 206.096C71.464 207.824 72.616 208.88 74.344 208.88C76.168 208.88 77.8 207.44 77.8 204.848C77.8 202.64 76.936 200.912 75.592 197.456L71.848 187.856C70.408 184.208 68.872 182.768 66.472 182.768C63.592 182.768 62.92 185.264 58.216 185.264H20.2C15.496 185.264 14.824 182.768 11.944 182.768C9.544 182.768 8.008 184.208 6.568 187.856L2.824 197.456C1.48 200.912 0.616 202.64 0.616 204.848C0.616 207.44 2.248 208.88 4.072 208.88C5.8 208.88 6.952 207.824 8.488 206.096C14.824 198.992 18.664 194.288 23.656 194.288H24.616C27.688 194.288 28.936 195.824 28.936 199.088V241.424C28.936 248.336 21.832 246.032 21.832 250.928C21.832 252.656 23.08 254.288 26.056 254.288ZM117.175 256.112C140.791 256.112 155.863 243.152 155.863 220.976C155.863 198.32 139.063 183.152 117.367 183.152C96.247 183.152 78.871 198.128 78.871 221.36C78.871 244.208 95.575 256.112 117.175 256.112ZM117.367 246.32C106.327 246.32 101.527 233.456 101.527 220.4C101.527 206.672 106.039 192.464 117.463 192.464C128.791 192.464 133.207 206.96 133.207 219.824C133.207 233.456 128.983 246.32 117.367 246.32ZM226.879 184.976C224.191 184.976 221.503 185.264 219.103 185.264C216.511 185.264 214.015 184.976 211.039 184.976C208.063 184.976 206.335 186.608 206.335 188.336C206.335 193.424 214.111 191.12 214.111 197.84V221.072L185.887 188.144C183.871 185.84 182.239 184.976 179.839 184.976C177.439 184.976 175.231 185.264 172.351 185.264C170.047 185.264 167.455 184.976 164.863 184.976C161.887 184.976 160.159 186.416 160.159 188.336C160.159 192.656 166.207 190.928 166.207 197.84V241.424C166.207 248.336 160.159 246.608 160.159 250.928C160.159 252.656 161.407 254.288 164.383 254.288C167.071 254.288 169.759 254 172.159 254C174.751 254 177.247 254.288 180.223 254.288C183.199 254.288 184.927 253.136 184.927 250.928C184.927 245.84 177.151 248.144 177.151 241.424V209.168L212.959 250.832C215.071 253.328 216.607 255.056 220.159 255.056C222.559 255.056 225.055 253.616 225.055 250.064V197.84C225.055 190.928 231.103 192.656 231.103 188.336C231.103 186.608 229.855 184.976 226.879 184.976ZM240.327 254.288C242.919 254.288 245.319 254 251.943 254C258.567 254 260.967 254.288 263.559 254.288C266.535 254.288 267.783 252.656 267.783 250.928C267.783 246.608 262.215 248.336 262.215 241.424V197.84C262.215 190.928 267.783 192.656 267.783 188.336C267.783 186.608 266.535 184.976 263.559 184.976C260.967 184.976 258.567 185.264 251.943 185.264C245.319 185.264 243.399 184.976 240.807 184.976C237.831 184.976 236.103 186.608 236.103 188.336C236.103 192.656 241.671 190.928 241.671 197.84V241.424C241.671 248.336 236.103 246.608 236.103 250.928C236.103 252.656 237.351 254.288 240.327 254.288Z"
            fill="#0B632E"
          />
          <path
            d="M587 230.44L585.24 226.44C584.56 224.92 583.88 224.32 582.88 224.32C581.68 224.32 581.44 225.36 579.48 225.36H568.88C566.12 225.36 565.12 225.24 564.04 225.24C562.8 225.24 562.28 225.92 562.28 226.64C562.28 228.44 564.6 227.72 564.6 230.6V248.76C564.6 251.64 562.28 250.92 562.28 252.72C562.28 253.44 562.8 254.12 564.04 254.12C565.12 254.12 566.2 254 569.04 254C571.96 254 573.04 254.12 574.2 254.12C575.44 254.12 575.96 253.44 575.96 252.72C575.96 250.92 573.16 251.64 573.16 248.76V243.08C573.16 242.28 573.44 241.96 574.44 241.96H576.52C578.8 241.96 578.92 245.08 580.64 245.08C581.56 245.08 582.12 244.52 582.12 243.24C582.12 242.28 582 241.04 582 240.08C582 239.12 582.12 237.96 582.12 237C582.12 235.72 581.56 235.16 580.64 235.16C578.92 235.16 578.8 238.2 576.52 238.2H574.44C573.44 238.2 573.16 237.88 573.16 237.08V231C573.16 229.72 573.68 229.12 575.16 229.12H577.24C580.16 229.12 582 231.16 584.8 234.12C585.48 234.84 585.92 235.28 586.64 235.28C587.36 235.28 588.08 234.68 588.08 233.68C588.08 232.68 587.68 231.96 587 230.44ZM604.602 254.88C614.442 254.88 620.722 249.48 620.722 240.24C620.722 230.8 613.722 224.48 604.682 224.48C595.882 224.48 588.642 230.72 588.642 240.4C588.642 249.92 595.602 254.88 604.602 254.88ZM604.682 250.8C600.082 250.8 598.082 245.44 598.082 240C598.082 234.28 599.962 228.36 604.722 228.36C609.442 228.36 611.282 234.4 611.282 239.76C611.282 245.44 609.522 250.8 604.682 250.8ZM642.872 255.04C643.912 255.04 644.552 254.44 645.272 252.88L647.272 248.52C647.992 246.96 648.392 246.24 648.392 245.2C648.392 244.2 647.672 243.56 646.912 243.56C646.192 243.56 645.712 244 645.032 244.76C642.032 248.12 639.672 250.24 636.992 250.24H635.512C634.032 250.24 633.512 249.64 633.512 248.36V230.6C633.512 227.72 635.832 228.44 635.832 226.64C635.832 225.92 635.312 225.24 634.072 225.24C632.992 225.24 631.992 225.36 629.232 225.36C626.472 225.36 625.672 225.24 624.592 225.24C623.352 225.24 622.632 225.92 622.632 226.64C622.632 228.44 624.952 227.72 624.952 230.6V248.76C624.952 251.64 622.632 250.92 622.632 252.72C622.632 253.44 623.152 254.12 624.392 254.12C625.472 254.12 626.472 254 629.232 254H639.472C641.432 254 641.672 255.04 642.872 255.04ZM651.032 254.12C652.112 254.12 653.112 254 655.872 254C658.632 254 659.632 254.12 660.712 254.12C661.952 254.12 662.472 253.44 662.472 252.72C662.472 250.92 660.152 251.64 660.152 248.76V230.6C660.152 227.72 662.472 228.44 662.472 226.64C662.472 225.92 661.952 225.24 660.712 225.24C659.632 225.24 658.632 225.36 655.872 225.36C653.112 225.36 652.312 225.24 651.232 225.24C649.992 225.24 649.272 225.92 649.272 226.64C649.272 228.44 651.592 227.72 651.592 230.6V248.76C651.592 251.64 649.272 250.92 649.272 252.72C649.272 253.44 649.792 254.12 651.032 254.12ZM680.344 254.88C690.184 254.88 696.464 249.48 696.464 240.24C696.464 230.8 689.464 224.48 680.424 224.48C671.624 224.48 664.384 230.72 664.384 240.4C664.384 249.92 671.344 254.88 680.344 254.88ZM680.424 250.8C675.824 250.8 673.824 245.44 673.824 240C673.824 234.28 675.704 228.36 680.464 228.36C685.184 228.36 687.024 234.4 687.024 239.76C687.024 245.44 685.264 250.8 680.424 250.8Z"
            fill="#0B632E"
          />
          <path
            d="M575.6 180.04C572.88 180.04 570.68 180.36 568.8 180.36C566.12 180.36 565.32 180.24 564.24 180.24C563 180.24 562.28 180.92 562.28 181.64C562.28 183.44 564.6 182.72 564.6 185.6V203.76C564.6 206.64 562.28 205.92 562.28 207.72C562.28 208.44 562.8 209.12 564.04 209.12C565.12 209.12 566.12 209 568.88 209C571.88 209 573.2 209.12 574.36 209.12C575.6 209.12 576.12 208.44 576.12 207.72C576.12 205.68 573.16 206.6 573.16 203.76V201.08C573.16 199.96 573.56 200.2 576.12 200.2C587.16 200.2 590.2 195.68 590.2 190.56C590.2 184.2 585.48 180.04 575.6 180.04ZM575.44 196.36C574 196.36 573.16 196 573.16 194.76V185.72C573.16 185.04 573.16 183.92 575.44 183.92C578.68 183.92 580.88 186.16 580.88 190.36C580.88 194.28 578.96 196.36 575.44 196.36ZM607.57 209.88C617.41 209.88 623.69 204.48 623.69 195.24C623.69 185.8 616.69 179.48 607.65 179.48C598.85 179.48 591.61 185.72 591.61 195.4C591.61 204.92 598.57 209.88 607.57 209.88ZM607.65 205.8C603.05 205.8 601.05 200.44 601.05 195C601.05 189.28 602.93 183.36 607.69 183.36C612.41 183.36 614.25 189.4 614.25 194.76C614.25 200.44 612.49 205.8 607.65 205.8ZM651.52 202.6L647.88 197.96C651.52 196.68 653.64 193.8 653.64 189.84C653.64 183.96 648.92 180.04 639.16 180.04C636.56 180.04 633.28 180.36 631.68 180.36C629.96 180.36 628.28 180.24 627.68 180.24C626.08 180.24 625.6 180.96 625.6 181.64C625.6 183.44 627.92 182.72 627.92 185.6V203.76C627.92 206.64 625.6 205.92 625.6 207.72C625.6 208.44 626.12 209.12 627.36 209.12C628.44 209.12 629.44 209 632.2 209C634.96 209 636.04 209.12 637.12 209.12C638.36 209.12 638.88 208.44 638.88 207.72C638.88 205.92 636.48 206.64 636.48 203.76V199.96C636.48 199.28 636.72 199 637.24 199H638.2C639.12 199 639.64 199.36 640.4 200.36L642.2 202.76C642.76 203.52 643.52 204.4 643.52 205.2C643.52 206.8 641.76 206.12 641.76 207.76C641.76 208.64 642.48 209.12 643.76 209.12C644.88 209.12 646.64 209 649 209C651.6 209 653.72 209.12 655.08 209.12C655.96 209.12 656.48 208.6 656.48 207.92C656.48 205.96 654.44 206.32 651.52 202.6ZM638.72 195.72C637.32 195.72 636.48 195.48 636.48 194.32V185.72C636.48 184.24 637.44 183.92 638.56 183.92C641.84 183.92 644.32 185.6 644.32 189.96C644.32 194.04 642.52 195.72 638.72 195.72ZM665.776 209.12C666.936 209.12 668.256 209 671.256 209C674.296 209 675.536 209.12 676.736 209.12C677.976 209.12 678.496 208.44 678.496 207.72C678.496 205.68 675.536 206.64 675.536 203.76V186.12C675.536 184.76 676.056 184.12 677.336 184.12H677.736C679.816 184.12 681.416 186.08 684.056 189.04C684.696 189.76 685.176 190.2 685.896 190.2C686.656 190.2 687.336 189.6 687.336 188.52C687.336 187.6 686.976 186.88 686.416 185.44L684.856 181.44C684.256 179.92 683.616 179.32 682.616 179.32C681.416 179.32 681.136 180.36 679.176 180.36H663.336C661.376 180.36 661.096 179.32 659.896 179.32C658.896 179.32 658.256 179.92 657.656 181.44L656.096 185.44C655.536 186.88 655.176 187.6 655.176 188.52C655.176 189.6 655.856 190.2 656.616 190.2C657.336 190.2 657.816 189.76 658.456 189.04C661.096 186.08 662.696 184.12 664.776 184.12H665.176C666.456 184.12 666.976 184.76 666.976 186.12V203.76C666.976 206.64 664.016 205.68 664.016 207.72C664.016 208.44 664.536 209.12 665.776 209.12Z"
            fill="#0B632E"
          />
        </svg>
      </section>
    </>
  );
}

export default Home;
