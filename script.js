// ===== 打字机效果 =====
const roles = [
  '后端工程师',
  '全栈开发者',
  'Python 爱好者',
  '开源贡献者',
  '终身学习者',
];
const typedEl = document.getElementById('typed');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400); // 完整显示后停顿
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 90);
}
typeLoop();

// ===== 移动端菜单 =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// 点击链接后关闭菜单
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== 滚动进入视口动画 =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.project-card, .skill-card, .fact').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ===== 页脚年份 =====
document.getElementById('year').textContent = new Date().getFullYear();
