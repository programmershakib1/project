import { useEffect } from "react";

const NewRoute = () => {
  useEffect(() => {
    document.title = "Gadget Heaven | Documents";
  }, []);

  return (
    <div>
      <div className="bg-primary py-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl font-bold text-center">
            Product Documents
          </h2>
          <p className="text-white text-center py-5 mx-10">
            Welcome to Documents. Here you can know all product details. Click
            on the button to know more details about the <br /> product you want
            to know about.
          </p>
        </div>
      </div>
      <div className="mt-16 mx-5 md:mx-20">
        <div>
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/HGtznyJ/asus-rog-zephyrus-g14.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Asus ROG Zephyrus G14</h2>
          </div>
          <p className="pt-3 pb-2">
            ASUS ROG Zephyrus G14 is a compact, high-performance gaming laptop
            known for its powerful specs and portability. Featuring up to an AMD
            Ryzen 9 processor and an NVIDIA GeForce RTX GPU, it delivers
            impressive gaming and multitasking performance. The 14-inch QHD or
            FHD display options offer smooth visuals, often with a high refresh
            rate (up to 144Hz), perfect for gamers and content creators. Its
            innovative AniMe Matrix display on select models allows for custom
            LED animations on the lid. With robust cooling, long battery life,
            and a sleek, minimalist design, it’s popular among those needing a
            balance of power and portability.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://rog.asus.com/bd/laptops/rog-zephyrus/rog-zephyrus-g14-series/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/dbNqxy3/apple-watch-se.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Apple Watch SE</h2>
          </div>
          <p className="pt-3 pb-2">
            AApple Watch SE is a versatile, budget-friendly smartwatch that
            combines essential health and fitness features with seamless Apple
            ecosystem integration. Powered by the S8 chip, it offers smooth
            performance for everyday tasks and activity tracking. The bright
            Retina display ensures easy readability, while water resistance up
            to 50 meters makes it swim-ready. With safety features like fall
            detection and Emergency SOS, it’s a popular choice for those seeking
            a practical, affordable Apple Watch experience.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.apple.com/apple-watch-se/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/hgyTz18/razer-blade-15.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Razer Blade 15</h2>
          </div>
          <p className="pt-3 pb-2">
            Razer Blade 15 is a high-end gaming laptop celebrated for its
            combination of power, portability, and premium build. Featuring up
            to Intel Core i7 or i9 processors and NVIDIA GeForce RTX GPUs, it’s
            designed to handle intensive gaming, content creation, and
            multitasking with ease. The 15.6-inch display offers multiple
            options, including Full HD with ultra-high refresh rates (up to
            360Hz) and 4K resolution for crystal-clear visuals, catering to both
            competitive gamers and creatives who need precision. Encased in a
            durable, sleek aluminum chassis, the Razer Blade 15 includes a
            customizable RGB backlit keyboard, Thunderbolt connectivity, and
            robust cooling for peak performance during long sessions. With its
            compact design, long battery life, and high-quality display, it’s
            popular among those seeking a powerful, stylish laptop that
            transitions smoothly between gaming and professional work.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.razer.com/gaming-laptops/razer-blade-15?srsltid=AfmBOop2Mrlrqi5aOD24IxXJTfd0cx_kM7CF1n80jsK3cg9JGFC4F8s2"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/k2GGk20/fitbit-charge-5.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Fitbit Charge 5</h2>
          </div>
          <p className="pt-3 pb-2">
            Fitbit Charge 5 is a feature-rich fitness tracker designed to help
            users monitor their health and activity levels. It features a sleek,
            lightweight design with a vibrant AMOLED display that provides clear
            visibility of stats and notifications. The Charge 5 includes
            advanced health tracking capabilities, such as an ECG app for heart
            health monitoring, an SpO2 sensor for blood oxygen levels, and
            built-in stress management tools like Daily Readiness Score. With
            built-in GPS, it allows for accurate tracking of outdoor activities
            without needing a smartphone. Additionally, it offers sleep
            tracking, activity tracking, and compatibility with Fitbits
            extensive app ecosystem, making it a comprehensive tool for health
            and wellness enthusiasts.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://device101.fitbit.com/guides/morgan-101.html"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/tqQW223/dell-xps-13.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Dell XPS 13</h2>
          </div>
          <p className="pt-3 pb-2">
            Dell XPS 13 is a premium ultraportable laptop known for its sleek
            design, vibrant display, and impressive performance. It features a
            nearly bezel-less 13.4-inch InfinityEdge display, available in FHD+
            and UHD+ (4K) resolutions, delivering sharp visuals and vibrant
            colors. Powered by Intel’s latest processors (up to Core i7 in many
            models) and with options for up to 32GB of RAM, it handles
            multitasking and everyday tasks with ease. The XPS 13’s compact,
            lightweight build and long battery life make it ideal for on-the-go
            use. With premium materials like aluminum and carbon fiber, it
            balances durability and elegance, appealing to professionals and
            creatives alike.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.dell.com/en-us/shop/dell-laptops/xps-13-laptop/spd/xps-13-9345-laptop"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/DWz7YzG/google-pixel-6.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Google Pixel 6</h2>
          </div>
          <p className="pt-3 pb-2">
            Google Pixel 6 is a smartphone designed for powerful performance and
            advanced AI capabilities, thanks to Google’s custom-built Tensor
            chip. It features a 6.4-inch OLED display with smooth 90Hz refresh
            rate, providing vibrant colors and sharp visuals. The dual-camera
            system includes a 50MP main sensor and a 12MP ultra-wide lens,
            capturing stunning photos with features like Magic Eraser and Real
            Tone for accurate skin tones. Running on Google’s clean Android OS,
            it offers exclusive Pixel features, security updates, and
            integration with Google Assistant. With a distinct design, improved
            battery life, and strong software support, the Pixel 6 is a great
            option for Android users looking for a premium experience.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.gsmarena.com/google_pixel_6-11037.php"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/178LyvZ/iphone-13-mini.png"
              alt=""
            />
            <h2 className="text-xl font-bold">iPhone 13 Mini</h2>
          </div>
          <p className="pt-3 pb-2">
            iPhone 13 Mini is a compact smartphone that delivers powerful
            performance in a small form factor. Featuring a 5.4-inch Super
            Retina XDR display, it offers vibrant colors and sharp details,
            ideal for those who prefer a smaller device without sacrificing
            quality. Powered by Apple’s A15 Bionic chip, it ensures smooth
            performance, efficient multitasking, and impressive energy
            efficiency. The dual-camera system includes a 12MP wide and
            ultra-wide lens, enabling excellent photo and video quality with
            features like Night Mode and Photographic Styles. With improved
            battery life compared to the iPhone 12 Mini and 5G support, the
            iPhone 13 Mini is perfect for users who want a premium iPhone
            experience in a compact size.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.apple.com/by/iphone-13/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/fMpPWVw/hp-spectre-x360.png"
              alt=""
            />
            <h2 className="text-xl font-bold">HP Spectre x360</h2>
          </div>
          <p className="pt-3 pb-2">
            HP Spectre x360 is a premium 2-in-1 convertible laptop known for its
            elegant design and versatile functionality. It features a 13.3-inch
            or 15.6-inch OLED or IPS display with stunning visuals and touch
            capabilities, allowing for seamless interaction in both laptop and
            tablet modes. Powered by Intel’s latest processors, it delivers
            solid performance for productivity, multimedia, and light gaming.
            The x360’s sleek aluminum chassis is complemented by a long battery
            life, making it suitable for on-the-go use. With a backlit keyboard,
            responsive touchpad, and a range of ports including Thunderbolt 4,
            the HP Spectre x360 is a stylish and powerful choice for
            professionals and creatives alike.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.hp.com/us-en/shop/slp/spectre-family/hp-spectre-x-360"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/XsDXqgL/apple-watch-series-6.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Apple Watch Series 6</h2>
          </div>
          <p className="pt-3 pb-2">
            Apple Watch Series 6 is a powerful smartwatch with enhanced health
            and fitness tracking capabilities. It features a blood oxygen
            sensor, ECG app, and always-on altimeter, providing insights into
            wellness and fitness metrics. The always-on Retina display is
            brighter outdoors, making it easier to read in sunlight. Powered by
            the S6 chip, it offers faster performance and smoother operation.
            With a wide range of band options and customizable watch faces, the
            Series 6 combines functionality and style, making it a versatile
            option for health tracking, notifications, and daily tasks.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.apple.com/newsroom/2020/09/apple-watch-series-6-delivers-breakthrough-wellness-and-fitness-capabilities/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/rtBvN8d/lenovo-thinlpad-x1-carbon.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Lenovo ThinkPad X1 Carbon</h2>
          </div>
          <p className="pt-3 pb-2">
            Lenovo ThinkPad X1 Carbon is a premium, ultra-light business laptop
            known for its durability, powerful performance, and sleek design.
            Now in its 10th generation, it’s equipped with Intel Core processors
            (up to i7 or i9), making it capable of handling intensive workflows
            and multitasking with ease. Its 14-inch display comes in various
            options, including Full HD, 4K, and low-blue-light configurations,
            ensuring a comfortable, sharp viewing experience. With the signature
            ThinkPad keyboard, a responsive trackpad, and the iconic red
            TrackPoint, the X1 Carbon is optimized for productivity. It also
            includes enhanced security features, such as a fingerprint reader,
            facial recognition, and a built-in privacy shutter on the webcam.
            Built with a carbon fiber-reinforced chassis, it’s highly durable
            and portable, weighing as little as 2.5 pounds. Boasting all-day
            battery life, multiple USB-C and Thunderbolt 4 ports, and excellent
            thermal management, the ThinkPad X1 Carbon is ideal for
            professionals who need a reliable, powerful laptop on the go.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.lenovo.com/us/en/d/thinkpad-x1-carbon/?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOoryvAAVV5b0fN7BF4dmuKbNOMEk8tX1Nok2w4Jfdjghx3dBsaxH"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/LR01gpy/oppo-reno-6.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Oppo Reno 6</h2>
          </div>
          <p className="pt-3 pb-2">
            Oppo Reno 6 is a sleek, mid-range smartphone focused on camera
            performance and stylish design. It features a 6.4-inch AMOLED
            display with a 90Hz refresh rate, offering smooth visuals and
            vibrant colors for an enjoyable viewing experience. Powered by a
            MediaTek Dimensity 900 processor, it handles daily tasks, gaming,
            and multitasking efficiently. The Reno 6 is known for its impressive
            camera setup, with a 64MP main camera, an 8MP ultra-wide lens, and a
            2MP macro lens, allowing users to capture detailed and vivid photos
            in various modes. It also includes a 32MP front camera with
            AI-powered enhancements, perfect for selfies and video calls. The
            device supports 65W SuperVOOC 2.0 fast charging, which quickly
            powers up the battery, ideal for users on the go. With its thin,
            lightweight build, trendy design, and solid performance, the Oppo
            Reno 6 offers great value for those looking for a stylish and
            capable smartphone.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.oppo.com/en/smartphones/series-reno/reno6-5g/specs/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/sy5CPyG/iphone-se.png"
              alt=""
            />
            <h2 className="text-xl font-bold">iPhone SE (2022)</h2>
          </div>
          <p className="pt-3 pb-2">
            iPhone SE (2022) combines compact design with modern performance,
            featuring a 4.7-inch Retina HD display and the A15 Bionic chip (the
            same processor as the iPhone 13), providing smooth performance and
            efficient power use. It supports 5G connectivity, offering faster
            download and streaming speeds. The device has a single 12MP rear
            camera with advanced features like Smart HDR 4, Deep Fusion, and
            Portrait Mode. It also includes IP67 water and dust resistance,
            Touch ID fingerprint sensor, and is available in three colors:
            Midnight, Starlight, and Product Red. Battery life is improved
            compared to the previous SE, with up to 15 hours of video playback.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.apple.com/iphone-se/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/4gkWyF4/amazfit-bip-u-pro.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Amazfit Bip U Pro</h2>
          </div>
          <p className="pt-3 pb-2">
            Amazfit Bip U Pro is a budget-friendly smartwatch offering a variety
            of health and fitness features. It has a 1.43-inch color TFT display
            with 320 x 302 resolution, providing clear visuals. Key highlights
            include built-in GPS, SpO2 monitoring (blood oxygen), heart rate
            tracking, and sleep analysis. The watch supports over 60 sports
            modes, helping track a wide range of activities, and it’s
            water-resistant up to 50 meters (5 ATM), making it swim-proof.
            Additionally, the Bip U Pro includes Amazon Alexa for voice
            commands, allowing for tasks like checking weather or setting
            reminders. The battery life is impressive, lasting up to 9 days on a
            single charge with typical use, depending on the features used. It’s
            compatible with both Android and iOS, making it versatile and
            accessible across devices.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://motionview.com.bd/product/amazfit-bip-u-pro-smart-watch-global-version?srsltid=AfmBOorQs_GkUo1_e8yPEz16FIIDBrfe1UAQR2C4Abh_kU8wCrflUahS"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/JdCtfK8/Screenshot-2024-11-05-204313.png"
              alt=""
            />
            <h2 className="text-xl font-bold">MacBook Air (M1)</h2>
          </div>
          <p className="pt-3 pb-2">
            MacBook Air (M1) is Apple’s ultra-thin and lightweight laptop
            powered by the M1 chip, delivering exceptional performance and
            efficiency. It features a 13.3-inch Retina display with True Tone
            technology, providing sharp and vibrant visuals. The M1 chip
            combines an 8-core CPU and 7- or 8-core GPU, making the MacBook Air
            capable of handling demanding tasks like photo and video editing
            with ease, while remaining fanless and completely silent. With up to
            16GB of unified memory and SSD options ranging from 256GB to 2TB, it
            offers smooth multitasking and fast storage. The MacBook Air (M1)
            also boasts impressive battery life, lasting up to 18 hours on a
            single charge. Additional features include a Magic Keyboard, Touch
            ID, and compatibility with iOS apps, making it a powerful, versatile
            device for everyday use. It runs on macOS Big Sur (upgradable to the
            latest macOS versions) and supports both Wi-Fi 6 and Bluetooth 5.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.apple.com/macbook-air/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/nfk8r5s/amazfit-bip-u-pro.png"
              alt=""
            />
            <h2 className="text-xl font-bold">MXiaomi Mi Band 6</h2>
          </div>
          <p className="pt-3 pb-2">
            Xiaomi Mi Band 6 is a budget-friendly fitness tracker packed with
            essential health and activity features. It sports a 1.56-inch AMOLED
            full-screen display, which is nearly 50% larger than its
            predecessor, offering crisp and vibrant visuals. The band includes
            SpO2 monitoring for blood oxygen levels, 24/7 heart rate tracking,
            sleep analysis, and stress monitoring. With over 30 fitness modes,
            the Mi Band 6 supports activities like running, cycling, swimming (5
            ATM water resistance), and even indoor exercises. The battery life
            is impressive, lasting up to 14 days on a single charge with typical
            usage. The Mi Band 6 is compatible with both Android and iOS,
            allowing easy integration with the Mi Fit or Xiaomi Wear apps for
            detailed insights and customization. Its affordable price point and
            extensive feature set make it a popular choice for health-conscious
            users.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.mi.com/global/product/mi-smart-band-6/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/1fWDnzy/sony.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Sony WH-1000XM4</h2>
          </div>
          <p className="pt-3 pb-2">
            Sony WH-1000XM4 is a top-rated over-ear wireless headphone offering
            industry-leading active noise cancellation and exceptional sound
            quality. Powered by Sony’s HD Noise Cancelling Processor QN1, it
            effectively reduces ambient noise, making it ideal for travel, work,
            and daily use. The headphones feature 40mm drivers that deliver
            rich, detailed sound with deep bass, while DSEE Extreme technology
            upscales compressed audio files for improved clarity. With Bluetooth
            5.0 and support for multipoint connectivity, users can pair two
            devices simultaneously. The WH-1000XM4 includes Adaptive Sound
            Control, which adjusts noise cancellation based on activity and
            location. Additional features include a 30-hour battery life with
            noise cancellation on (and quick charge support providing 5 hours of
            playback with just a 10-minute charge), touch controls, and
            compatibility with voice assistants like Google Assistant and Alexa.
            Its lightweight and comfortable design, combined with outstanding
            noise cancellation and sound quality, make it a premium choice for
            audiophiles and frequent travelers alike.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.sony-asia.com/electronics/headband-headphones/wh-1000xm4"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/gthdJKP/gt-master.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Realme GT Master Edition</h2>
          </div>
          <p className="pt-3 pb-2">
            Realme GT Master Edition is a stylish mid-range smartphone with
            solid performance and a distinctive suitcase-inspired design by
            renowned designer Naoto Fukasawa (in the Voyager Grey color
            variant). It features a 6.43-inch Super AMOLED display with a 120Hz
            refresh rate and 360Hz touch sampling rate, providing smooth visuals
            and responsiveness, ideal for gaming and everyday use. Powered by
            the Qualcomm Snapdragon 778G processor with up to 8GB of RAM and up
            to 256GB of storage, the GT Master Edition handles multitasking and
            demanding apps with ease. It has a triple rear camera setup: a 64MP
            main sensor, an 8MP ultra-wide, and a 2MP macro, plus a 32MP front
            camera for high-quality selfies. The device supports 5G
            connectivity, ensuring faster network speeds.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.realme.com/bd/realme-gt-master-edition"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/Hrwq2h8/samsung-galaxy-s21.jpg"
              alt=""
            />
            <h2 className="text-xl font-bold">Samsung Galaxy S21</h2>
          </div>
          <p className="pt-3 pb-2">
            Samsung Galaxy S21 is a high-performance smartphone with a sleek
            design, featuring a 6.2-inch Dynamic AMOLED 2X display with a 120Hz
            refresh rate, providing smooth scrolling and vibrant visuals. It’s
            powered by the Exynos 2100 (global) or Snapdragon 888 (U.S.)
            processor, with 8GB of RAM and up to 256GB of internal storage,
            ensuring fast performance and smooth multitasking. The S21 has a
            versatile triple rear camera setup: a 12MP main sensor, a 12MP
            ultra-wide, and a 64MP telephoto camera, which together deliver
            high-quality photos with up to 3x hybrid optical zoom. The 10MP
            front camera offers crisp selfies and supports 4K video recording.
            The device includes a 4,000mAh battery with support for 25W fast
            charging, 15W wireless charging, and reverse wireless charging,
            allowing you to charge other devices. It’s 5G-enabled, supports
            Wi-Fi 6, and runs on Samsung’s One UI based on Android (upgradable
            to the latest versions). The Galaxy S21 is IP68 water and dust
            resistant, and it comes in multiple colors, making it a powerful and
            stylish option for users seeking flagship performance.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.gsmarena.com/samsung_galaxy_s21_5g-10626.php"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/Xpf8PnZ/iphone-12.png"
              alt=""
            />
            <h2 className="text-xl font-bold">iPhone 12</h2>
          </div>
          <p className="pt-3 pb-2">
            iPhone 12 is a powerful smartphone that introduced a refreshed
            design with flat edges and a sleek, durable Ceramic Shield front
            cover for enhanced drop protection. It has a 6.1-inch Super Retina
            XDR OLED display, providing vibrant colors, deep contrast, and HDR10
            support. Powered by Apple’s A14 Bionic chip, the iPhone 12 delivers
            fast and efficient performance, supporting demanding apps and games
            with ease. The phone features a dual-camera system on the back,
            including a 12MP wide and a 12MP ultra-wide lens, with Night Mode
            available on both. It captures impressive low-light photos and 4K
            Dolby Vision HDR video, offering excellent camera versatility.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.mobiledokan.com/mobile/apple-iphone-12"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/6JDV5Nd/microsoft-surface.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Microsoft Surface Laptop 4</h2>
          </div>
          <p className="pt-3 pb-2">
            Microsoft Surface Laptop 4 is a sleek and lightweight laptop
            designed for both productivity and entertainment, available in two
            display sizes: 13.5-inch and 15-inch, with PixelSense touchscreen
            displays and a 3:2 aspect ratio for enhanced productivity. The
            displays are sharp and vibrant, with touch and Surface Pen
            compatibility (pen sold separately), making it versatile for
            creative tasks. Under the hood, the Surface Laptop 4 is powered by
            either 11th Gen Intel Core processors (i5 or i7) or custom AMD Ryzen
            4000 Series processors, providing a balance of performance and
            battery efficiency. It comes with options for up to 32GB of RAM and
            up to 1TB SSD, delivering smooth multitasking and quick storage
            access.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.microsoft.com/en-us/surface/devices/surface-laptop-4/tech-specs"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/0QsBC24/honor-magic-3.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Honor Magic 3</h2>
          </div>
          <p className="pt-3 pb-2">
            Honor Magic 3 is a premium smartphone with powerful hardware and
            advanced camera capabilities. It features a 6.76-inch OLED display
            with a 120Hz refresh rate and HDR10+ support, delivering smooth
            visuals, deep colors, and excellent contrast. Powered by the
            Qualcomm Snapdragon 888+ processor and paired with up to 12GB of RAM
            and up to 512GB of storage, the Magic 3 handles demanding
            applications and multitasking with ease. One of the standout
            features of the Honor Magic 3 is its camera system. It boasts a
            triple rear camera setup: a 50MP wide main sensor, a 64MP monochrome
            sensor, and a 13MP ultra-wide lens, which provide high-quality
            images with advanced computational photography. The device also
            supports 4K video recording and has various AI enhancements for
            improved photography and videography.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.honor.com/global/phones/honor-magic3-pro-series/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/QXRCsBz/ipad-air.png"
              alt=""
            />
            <h2 className="text-xl font-bold">iPad Air (2020)</h2>
          </div>
          <p className="pt-3 pb-2">
            iPad Air (2020) is a powerful tablet offering a perfect balance
            between performance, design, and functionality. It features a
            10.9-inch Liquid Retina display with True Tone and P3 wide color
            support, providing vibrant and accurate colors. The iPad Air (2020)
            is powered by the A14 Bionic chip, offering excellent performance
            for demanding tasks like gaming, video editing, and multitasking. It
            has a 12MP rear camera capable of shooting 4K video and a 7MP front
            camera, making it a great option for photography, video calls, and
            content creation. The tablet supports the second-generation Apple
            Pencil (sold separately) for precise drawing and note-taking, as
            well as the Magic Keyboard, offering a laptop-like experience with a
            floating design.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.apple.com/ipad-air/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/QYCXkkN/vivo-v21.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Vivo V21</h2>
          </div>
          <p className="pt-3 pb-2">
            Vivo V21 is a mid-range smartphone designed for photography
            enthusiasts and those who enjoy a sleek, modern design. It features
            a 6.44-inch AMOLED display with a 90Hz refresh rate, providing
            smooth scrolling and vibrant colors. The display is bright and
            clear, with HDR10 support for enhanced visuals in compatible
            content. The Vivo V21 stands out with its impressive camera system.
            It has a 44MP front camera with Optical Image Stabilization (OIS)
            for sharp and stable selfies, even in low light. The rear camera
            setup includes a 64MP primary sensor, an 8MP ultra-wide lens, and a
            2MP macro lens, offering versatile photography options with
            high-quality results. Powered by the MediaTek Dimensity 800U
            processor and paired with 8GB of RAM and 128GB or 256GB of internal
            storage, the Vivo V21 offers smooth performance for day-to-day tasks
            and moderate gaming. The 4,000mAh battery supports 33W fast
            charging, providing quick top-ups when needed.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.vivo.com/bd/products/param/v21"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/PcKwxXG/acer-swift-3.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Acer Swift 3</h2>
          </div>
          <p className="pt-3 pb-2">
            Acer Swift 3 is a lightweight and portable laptop that combines
            performance and affordability, making it ideal for students,
            professionals, and everyday users. It features a 14-inch Full HD IPS
            display with thin bezels, offering a sharp and vibrant viewing
            experience. The Swift 3 is powered by the latest Intel Core i5 or i7
            processors (or AMD Ryzen 5 or 7 in some models), providing solid
            performance for multitasking, productivity, and light gaming. It
            comes with up to 16GB of RAM and up to 512GB of SSD storage,
            offering fast boot times and smooth performance for most tasks. The
            laptop also features an integrated Intel or AMD GPU, handling casual
            gaming and multimedia tasks with ease. The Swift 3 boasts a thin,
            all-aluminum body, weighing just around 2.65 pounds (1.2 kg), making
            it highly portable. It offers long battery life, up to 11 hours,
            ensuring all-day productivity on a single charge. Additionally, the
            laptop includes a fingerprint reader for secure login, a backlit
            keyboard for comfortable typing, and various ports, including USB-C,
            USB-A, and HDMI.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.acer.com/us-en/laptops/swift/swift-3-intel"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/9tTFJ65/garmin-forerunner-245.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Garmin Forerunner 245</h2>
          </div>
          <p className="pt-3 pb-2">
            Garmin Forerunner 245 is a versatile and feature-packed GPS running
            smartwatch designed for athletes and fitness enthusiasts. It offers
            advanced performance and health tracking features, including heart
            rate monitoring, GPS tracking, sleep tracking, and VO2 max
            estimation. The watch supports a variety of sports modes, including
            running, cycling, swimming, and more, providing detailed metrics to
            help you improve your performance. One of the standout features of
            the Forerunner 245 is its ability to track running dynamics, such as
            cadence, ground contact time, and vertical oscillation, helping
            runners analyze their form. The watch also provides real-time
            performance insights like training status, recovery time, and race
            predictor, allowing for better training planning. The Forerunner 245
            features a 1.2-inch color display that is easily readable in various
            lighting conditions. It offers up to 7 days of battery life in
            smartwatch mode, and up to 24 hours with continuous GPS tracking,
            making it ideal for long workouts or races.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.garmin.com/en-CA/p/628939"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/gwnwhTM/macbook-pro-m1.png"
              alt=""
            />
            <h2 className="text-xl font-bold">MacBook Pro (M1)</h2>
          </div>
          <p className="pt-3 pb-2">
            MacBook Pro (M1), released in November 2020, is a revolutionary
            laptop that features Apple’s custom-designed M1 chip, marking the
            company’s shift away from Intel processors. The M1 chip integrates
            the CPU, GPU, Neural Engine, and memory into a single
            system-on-a-chip (SoC), which provides significant performance
            boosts in both speed and efficiency. With a 13.3-inch Retina
            display, the MacBook Pro (M1) offers vibrant colors, sharp details,
            and True Tone technology for a more natural viewing experience. It
            comes with 8GB or 16GB of unified memory, which allows for smooth
            multitasking and faster access to frequently used apps. The device
            supports up to 2TB of SSD storage, providing ample space for large
            files and media projects. One of the standout features of the
            MacBook Pro (M1) is its exceptional battery life. Thanks to the
            energy-efficient M1 chip, it can last up to 20 hours on a single
            charge, making it the longest-lasting MacBook ever. This means more
            time spent working, creating, or enjoying media without needing to
            recharge. The M1 MacBook Pro also offers impressive performance for
            professional tasks such as video editing, coding, and graphic
            design, with its 8-core CPU and up to 8-core GPU. The device also
            has two Thunderbolt 3/USB 4 ports for fast data transfer, along with
            a 3.5mm headphone jack for audio connectivity.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.apple.com/shop/buy-mac/macbook-pro"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/gyz2Y7P/oneplus-9-pro.png"
              alt=""
            />
            <h2 className="text-xl font-bold">OnePlus 9 Pro</h2>
          </div>
          <p className="pt-3 pb-2">
            OnePlus 9 Pro, released in March 2021, is a flagship smartphone that
            combines powerful performance, advanced features, and a premium
            design. Powered by the Qualcomm Snapdragon 888 chipset, it offers
            exceptional speed, smooth multitasking, and an optimized experience
            for gaming and productivity. The phone features a stunning 6.7-inch
            Fluid AMOLED display with QHD+ resolution and a 120Hz refresh rate,
            providing vibrant colors and fluid scrolling. One of the standout
            aspects of the OnePlus 9 Pro is its camera system, co-developed with
            Hasselblad, which improves color accuracy and image quality. The
            quad-camera setup includes a 48MP main sensor, a 50MP ultra-wide
            lens, and an 8MP telephoto lens with 3.3x optical zoom, allowing
            users to capture professional-quality photos. With a large 4,500mAh
            battery, the OnePlus 9 Pro supports Warp Charge 65T for ultra-fast
            wired charging, reaching 100% in just about 29 minutes, and also
            features 50W wireless charging for added convenience. The phone runs
            OxygenOS based on Android, offering a clean interface with fast
            updates and customization options. The OnePlus 9 Pro is available
            with up to 12GB of RAM and 256GB of storage, ensuring quick access
            to apps and plenty of space for photos, videos, and files.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.oneplus.com/global/9-pro/specs"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/3Sq8BXt/iphone-14-pro.png"
              alt=""
            />
            <h2 className="text-xl font-bold">IPhone 16 Pro</h2>
          </div>
          <p className="pt-3 pb-2">
            IPhone 15 Pro builds on Apple’s flagship lineup with advanced
            features and materials. It sports a lightweight titanium frame,
            making it more durable and lighter than previous models. Equipped
            with the new A17 Pro chip, it delivers impressive processing power
            and graphics performance, ideal for gaming and demanding tasks. The
            6.1-inch Super Retina XDR display includes ProMotion for smooth
            visuals and improved energy efficiency. The camera system sees
            enhancements, with a 48MP main sensor, better zoom capabilities, and
            improved low-light performance. It also introduces a USB-C port for
            faster data transfer and versatile charging. With refined design
            elements, high performance, and impressive durability, the iPhone 15
            Pro is a top choice for advanced users.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.apple.com/iphone-16-pro/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/0M5SKDC/xiaomi-mi-11.png"
              alt=""
            />
            <h2 className="text-xl font-bold">Xiaomi Mi 11</h2>
          </div>
          <p className="pt-3 pb-2">
            Xiaomi Mi 11, launched in December 2020, is a flagship smartphone
            that combines high-end specifications with a sleek design at a
            competitive price point. It features a large 6.81-inch AMOLED
            display with a 120Hz refresh rate and a QHD+ resolution (3200 x
            1440), offering vibrant, sharp visuals and smooth interaction. The
            display is complemented by HDR10+ support, making it ideal for
            streaming high-quality media. At its core, the Mi 11 is powered by
            the Qualcomm Snapdragon 888 processor, ensuring top-tier
            performance, whether for gaming, multitasking, or intensive
            applications. It comes with 8GB or 12GB of RAM and offers storage
            options of 128GB or 256GB, making it fast and responsive, with
            plenty of space for apps and media. The camera system of the Mi 11
            stands out with its triple-lens setup, featuring a 108MP main
            sensor, a 13MP ultra-wide lens, and a 5MP macro sensor, capable of
            producing high-quality images and videos. The camera system also
            includes advanced features like Night Mode, AI enhancements, and 8K
            video recording, ensuring it meets the demands of both casual users
            and photography enthusiasts. The battery is a 4,600mAh unit,
            providing ample power for a full day of use, and supports 55W fast
            charging, which can charge the device from 0 to 100% in about 45
            minutes. It also supports 50W wireless charging and 10W reverse
            wireless charging, allowing for quick and convenient power-ups and
            charging other devices.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.mi.com/global/product/mi-11/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <img
              className="w-20 h-14"
              src="https://i.ibb.co.com/mXc7Zsm/mackbook-pro.png"
              alt=""
            />
            <h2 className="text-xl font-bold">MacBook Pro</h2>
          </div>
          <p className="pt-3 pb-2">
            MacBook Pro is Apple’s high-performance laptop, designed for
            professionals needing power, speed, and premium build quality.
            Available in 14-inch and 16-inch models, it is equipped with Apples
            M2 Pro, M2 Max, or M3 series chips (depending on the model year),
            providing exceptional performance for tasks like video editing, 3D
            rendering, and software development. The Liquid Retina XDR display
            offers vivid colors, deep blacks, and high brightness, perfect for
            creative work. It features a long-lasting battery, advanced cooling
            system, and versatile ports, including HDMI, Thunderbolt, and an SD
            card slot, making it ideal for demanding workflows and creative
            tasks.
          </p>
          <p className="font-semibold">
            Click here for more details:{" "}
            <a
              className="text-primary font-bold"
              href="https://www.apple.com/macbook-pro/"
              target="_blank"
            >
              Click
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewRoute;
