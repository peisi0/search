const input = document.getElementById('searchInput');
const btn = document.getElementById('searchBtn');
const themeToggle = document.getElementById('themeToggle');

// 检查系统偏好是否为深色模式
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// 获取持久化的主题设置
let currentTheme = localStorage.getItem('theme') || 
                  (prefersDarkScheme.matches ? 'dark' : 'light');

// 应用主题函数
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  currentTheme = theme;
}

// 初始化加载主题
applyTheme(currentTheme);

// 主题切换按钮点击事件
themeToggle.addEventListener('click', () => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
});

// 搜索执行函数
function doSearch(q) {
  if(!q.trim()) return;
  
  const query = q.trim().toLowerCase();
  
  // 自定义关键词跳转
  if(query === 'win11') {
    location.href = 'https://peisi0.github.io/win11';
  } 
  else if(query === 'underia') {
    location.href = 'https://klpig.github.io/underia';
  }
  else if(query === 'gemini') {
    location.href = 'https://gemini.google.com/u/1';
  }
  else {
    // 默认执行 Google 搜索
    location.href = 'https://google.com/search?q=' + encodeURIComponent(q);
  }
}

/* 监听回车键 */
input.addEventListener('keydown', e => {
  if(e.key === 'Enter') {
    e.preventDefault();
    doSearch(input.value);
  }
});

/* 监听按钮点击 */
btn.addEventListener('click', () => doSearch(input.value));
