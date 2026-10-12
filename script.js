const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Python',
  'Responsive Web Design',
  'Embedded C/C++',
  'Arduino UNO',
  'Computer Hardware Assembly',
  'Hardware Diagnostics',
  'Network Troubleshooting',
  'Client Communication',
  'Project Management',
  'Problem Solving',
  'Digital Marketing'
];

const skillsList = document.querySelector('#skills');
skills.forEach((skill, index) => {
  const tag = document.createElement('span');
  tag.className = 'skill';
  tag.style.transitionDelay = `${index * 50}ms`;
  tag.textContent = skill;
  skillsList.append(tag);
});

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function type(el, text, speed) {
  for (const c of text) {
    el.textContent += c;
    await sleep(speed);
  }
}

async function startTyping() {
  const name = document.querySelector('#typed-name');
  const role = document.querySelector('#typed-role');
  await type(name, 'Himanshu Prajapati', 75);
  await sleep(250);
  const roles = [
    'Computer Engineering Student',
    'Web Developer',
    'Tech & Hardware Specialist'
  ];
  let i = 0;
  while (true) {
    await type(role, roles[i], 35);
    await sleep(1650);
    for (let x = roles[i].length; x >= 0; x--) {
      role.textContent = roles[i].slice(0, x);
      await sleep(18);
    }
    i = (i + 1) % roles.length;
  }
}
startTyping();

const reveal = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      reveal.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.skill').forEach(tag => tag.classList.add('show'));
      skillObserver.disconnect();
    }
  });
}, { threshold: 0.15 });
skillObserver.observe(skillsList);

const bar = document.querySelector('#topbar');
window.addEventListener('scroll', () => {
  bar.classList.toggle('scrolled', scrollY > 14);
}, { passive: true });

const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  });
});

const nav = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];
const active = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      nav.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(s => active.observe(s));
