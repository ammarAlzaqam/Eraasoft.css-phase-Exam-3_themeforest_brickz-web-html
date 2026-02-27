// ===== Anime.js Text Animation =====
document.addEventListener("DOMContentLoaded", function () {
  //! ===== Scroll Trigger for Anime =====
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting && !el.classList.contains("animate")) {
          animateLetters(el);
        } else if (!entry.isIntersecting && el.classList.contains("animate")) {
          resetLetters(el);
        }
      });
    },
    { threshold: 0.3 },
  );

  document.querySelectorAll(".ml12").forEach((el) => {
    el.dataset.original = el.textContent;
    observer.observe(el);
  });

  //! ===== Anime Text Effect =====
  function animateLetters(el) {
    el.classList.add("animate");
    el.innerHTML = el.dataset.original.replace(
      /\S/g,
      "<span class='letter'>$&</span>",
    );

    anime.timeline({ loop: false }).add({
      targets: el.querySelectorAll(".letter"),
      translateX: [40, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 30 * i,
    });
  }

  //! ===== لما يخرج =====
  function resetLetters(el) {
    el.classList.remove("animate");
    el.innerHTML = el.dataset.original;
  }

  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLetters2(entry.target);
          observer.unobserve(entry.target); // يشتغل مرة واحدة
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll(".ml10").forEach((el) => {
    observer2.observe(el);
  });

  //! ===== Anime Text Effect 2 =====
  function animateLetters2(el) {
    if (el.querySelector(".letter")) return;

    el.innerHTML = el.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>",
    );

    anime.timeline({ loop: false }).add({
      targets: ".ml10 .letter",
      rotateY: [-90, 0],
      duration: 1300,
      delay: (el, i) => 15 * i,
    });
  }

  //! ===== WOW Init =====
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }

  //! ===== Hover Links Effect =====
  document.querySelectorAll(".link").forEach((link) => {
    link.innerHTML =
      "<div><span>" +
      link.textContent.trim().split("").join("</span><span>") +
      "</span></div>";

    link
      .querySelectorAll("span")
      .forEach(
        (s) => (s.innerHTML = s.textContent === " " ? "&nbsp;" : s.textContent),
      );

    link.insertAdjacentHTML(
      "beforeend",
      `<div>
        <svg preserveAspectRatio="none" viewBox="0 0 192 5">
          <path d="M191.246 4H129C129 4 127.781 4.00674 127 4C114.767 3.89447 108.233 1 96 1C83.7669 1 77.2327 3.89447 65 4C64.219 4.00674 63 4 63 4H0.751923" />
        </svg>
      </div>`,
    );
  });

  //! ===== Odometer =====
  const counters = document.querySelectorAll(".odometer");

  const observer3 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const finalNumber = el.getAttribute("data-count");

          el.innerHTML = finalNumber;
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.6 },
  );

  counters.forEach((counter) => {
    observer3.observe(counter);
  });

  //! ===== Width-Change animation =====
  const elements = document.querySelectorAll(".img-animate-wrapper");

  const observer4 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          // دخل الشاشة
          el.classList.remove("animate");
          void el.offsetWidth; // إعادة تشغيل الأنيميشن
          el.classList.add("animate");
        } else {
          // خرج من الشاشة
          el.classList.remove("animate");
        }
      });
    },
    { threshold: 0 },
  );

  elements.forEach((el) => observer4.observe(el));

  //! ===== Loader =====
  // const loader = document.getElementById("loader");

  setTimeout(() => {
    // loader.classList.add("un-show-loader");

    // ===== AOS Init =====
    if (typeof AOS !== "undefined") {
      AOS.init({
        once: true,
        duration: 1000,
      });
    }
  }, 0); // 2000

  //! ===== Progress bar =====
  let duration = 3000;
  let target = 95;

  let bar = document.querySelector(".progress-bar");
  let percent = document.getElementById("percent");
  let container = document.querySelector(".progress-container");

  function startProgress() {
    bar.style.width = target + "%";
    percent.style.left = target + "%";

    // نخلي الرقم يعد بشكل منفصل
    let current = 0;
    let stepTime = duration / target;

    let interval = setInterval(() => {
      current++;
      percent.textContent = current + "%";

      if (current >= target) {
        clearInterval(interval);
      }
    }, stepTime);
  }

  const ProgressObserver = new IntersectionObserver(
    (entries, obs) => {
      if (entries[0].isIntersecting) {
        startProgress();
        obs.unobserve(container); // يشتغل مرة واحدة بس
      }
    },
    { threshold: 0.5 },
  );

  ProgressObserver.observe(container);

  let target2 = 97;

  let bar2 = document.querySelector(".progress-bar2");
  let percent2 = document.getElementById("percent2");
  let container2 = document.querySelector(".progress-container2");

  function startProgress2() {
    bar2.style.width = target2 + "%";
    percent2.style.left = target2 + "%";

    // نخلي الرقم يعد بشكل منفصل
    let current = 0;
    let stepTime = duration / target2;

    let interval = setInterval(() => {
      current++;
      percent2.textContent = current + "%";

      if (current >= target2) {
        clearInterval(interval);
      }
    }, stepTime);
  }

  const ProgressObserver2 = new IntersectionObserver(
    (entries, obs) => {
      if (entries[0].isIntersecting) {
        startProgress2();
        obs.unobserve(container2); // يشتغل مرة واحدة بس
      }
    },
    { threshold: 0.5 },
  );

  ProgressObserver2.observe(container2);

  //! =====Scroll (lenis) =====
  const lenis = new Lenis({
    duration: 0.7,
    easing: (t) => 1 - Math.pow(1 - t, 2),
    smoothWheel: true,
    wheelMultiplier: 1.1,
    touchMultiplier: 1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  //! reset video modal
  const modal = document.getElementById("videoModal");
  const iframe = modal.querySelector("iframe");

  modal.addEventListener("hidden.bs.modal", () => {
    iframe.src = iframe.src;
  });
});
